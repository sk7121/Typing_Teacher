const mongoose = require("mongoose");
const User = require("../models/userdata.js");
const Data = require("./data.js");



const MONGO_URL = "mongodb://127.0.0.1:27017/UserDetails";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("database connected!");
    })
    .catch(err => {
        console.log(err);
    });


const initDB = async () => {
    await User.deleteMany({});
    await User.insertMany(Data.data);
    console.log("data is saved to the DataBase");
}

initDB();