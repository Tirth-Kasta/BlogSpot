const mongoose = require("mongoose");
const URI = process.env.URI;

const dbConnect = async() => {
    try {
        await mongoose.connect(URI)
        .then(()=>{
            console.log("Database Conneteced")
        })
    } catch (error) {
        console.log("error in db connection")
    }
}

module.exports = dbConnect;