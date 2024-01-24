const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect('mongodb+srv://flipcart:sayali2003@cluster0.8rxjkhg.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongoose Connected");
    })
    .catch((err) => {
        console.error("Mongoose Connection Error:", err);
    });
}

module.exports = connectDatabase;