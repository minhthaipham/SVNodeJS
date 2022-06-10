const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Student = new Schema({
    name: { type: String },
    age : { type: String },
    address : { type: String },
    slug: { type: String, slug: 'name' },
}, { timestamps: true });

module.exports = mongoose.model('Student', Student);