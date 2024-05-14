const dotEnv = require("dotenv");
const mongoose = require("mongoose");
dotEnv.config();
const databaseUrl = process.env.MONGODB_URI;

module.exports = async () => {
    try {
        await mongoose.connect(databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database successfully connected");
    } catch (error) {
        console.error(`Database Connectivity Error: ${error}`);
        throw new Error(error);
    }
};
