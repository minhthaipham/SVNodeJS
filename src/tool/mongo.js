module.exports = {
    mutipleMongooseToObject: function (mongooseModel) {
        return mongooseModel.map(item => item.toObject());
    }, 

    mongooseToObject: function (mongoose){
        return mongoose ? mongoose.toObject() : null;
    }
}