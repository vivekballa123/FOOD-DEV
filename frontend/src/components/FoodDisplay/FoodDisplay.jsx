import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category, searchQuery }) => {

  const { food_list } = useContext(StoreContext)

  const filteredList = food_list.filter((item) => {
    const matchesCategory = category === "All" || category === item.category
    const matchesSearch = !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      {filteredList.length > 0 ? (
        <div className="food-display-list">
          {filteredList.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <p className='food-display-empty'>No dishes found for "{searchQuery}"</p>
      )}
    </div>
  )
}

export default FoodDisplay
