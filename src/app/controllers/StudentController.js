const Model = require('../models/Student');
const {mongooseToObject } = require('../../tool/mongo');
const {mutipleMongooseToObject } = require('../../tool/mongo');
const { model } = require('mongoose');
class StudentController{
    // list(req, res, next){
    //     Model.find({})
    //     .then(data => {
    //         res.render('student/show', {
    //             data: mutipleMongooseToObject(data)
    //         });
    //     })
    //     .catch(err => {
    //         next(err);
    //     }
    //     );
    // }

    async list(req, res, next){
        const data = await Model.find({});
        res.render('student/show', {
            data: mutipleMongooseToObject(data)
        });

    }

    add(req, res, next){
        res.render('student/add');
    }

    // save(req, res, next){
    //     const student = new Model(req.body);
    //     student.save()
    //     .then(student => {
    //         res.redirect('/list');
    //     }
    //     )
    //     .catch(next);
    // }


    async save(req, res, next){
        const student = new Model(req.body);
        await student.save();
        res.redirect('/list');
    }



    // edit(req, res, next){
    //     Model.findById(req.params.slug)
    //     .then(student => {
    //         res.render('student/edit', {
    //             data: mongooseToObject(student)
    //         });
    //     })
    // }


    async edit(req, res, next){
        const student = await Model.findById(req.params.slug);
        res.render('student/edit', {
            data: mongooseToObject(student)
        });
    }



    // update(req, res, next){
    //     Model.findByIdAndUpdate(req.params.slug, req.body)
    //     .then(student => {
    //         res.redirect('/list');
    //     })
    // }


    async update(req, res, next){
        const student = await Model.findByIdAndUpdate(req.params.slug, req.body);
        res.redirect('/list');
    }


    // delete(req, res, next){
    //     Model.findByIdAndRemove(req.params.slug)
    //     .then(student => {
    //         res.redirect('/list');
    //     })
    //     .catch(next);
    // }


    async delete(req, res, next){
        const student = await Model.findByIdAndRemove(req.params.slug);
        res.redirect('/list');
    }


}

module.exports = new StudentController();




