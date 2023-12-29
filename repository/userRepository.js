const { UserModel } = require("../database/models/userModel")

module.exports = {
    async create(params) {
        return await UserModel.create(params);
    },
    async findOne(params) {
        let filter = {};
        if (params._id) {
            filter['_id'] = params._id
        }
        if (params.email) {
            filter['email'] = params.email;
        }
        return await UserModel.findOne(filter);
    },
    async findAll() {
        return await UserModel.find({});
    },
    async update(updateObj, params) {
        return await updateObj.updateOne(params);
    },
    async delete(userObj) {
        return await userObj.deleteOne();
    }
}