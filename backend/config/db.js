import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://vivekballa:sunny1122@cluster0.b1vyrvg.mongodb.net/food-dev').then(()=>console.log("DB Connected"))
}