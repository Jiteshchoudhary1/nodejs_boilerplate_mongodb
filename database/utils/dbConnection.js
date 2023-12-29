const mongoose = require('mongoose');
const { config } = require('../../configuration');
const { databaseUrl } = config.database;
module.exports.dbConnection = async () => {
    try {
        return await mongoose.connect(databaseUrl);

    } catch (error) {
        throw Error(error);
    }
}