const model = require('../models/auth');
const {mutipleMongooseToObject , mongooseToObject} = require('../../tool/mongo');
const argon2 = require('argon2');
const { Model } = require('mongoose');
class AuthController{

    register(req, res, next){
        res.render('auth/register');
    }

   async save(req, res, next){
        const {name , password} = req.body;
        console.log(req.body);
        // simple validation
        if(!name || !password){
            return res.status(404).json({message: 'Please enter all fields'});
        }
        try {
            const auth = await model.findOne({name});
            if(auth){
                return res.status(404).json({message: 'User already exist'});
            }

            const hashPass = await argon2.hash(password);
            const user = new model({name , password: hashPass});
            await user.save();
            res.redirect('/auth/login');
        } catch (error) {
            next(error);
        }
    }

    login(req, res, next){
        res.render('auth/login');
    }

    async authenticate(req, res, next){
        // const {name , password} = req.body;
        // // simple validation
        // if(!name || !password){
        //     return res.status(404).json({message: 'Please enter all fields'});
        // }
        // try {
        //     model.findOne({name , password})
        //     .then(auth => {
        //         if(!auth){
        //             return res.status(404).json({message: 'Invalid credentials'});
        //         }
        //         res.render('auth/home' , {
        //             auth : mongooseToObject(auth)
        //         });
        //     })
            
        // } catch (error) {
        //     next(error);
        // }

          const auth = await model.findOne({name: req.body.name});
            if(!auth){
                return res.status(404).json({message: 'Invalid credentials'});
            }
            const match = await argon2.verify(auth.password, req.body.password);
            if(!match){
                return res.status(404).json({message: 'Invalid credentials'});
            }
            res.render('auth/home' , {
                auth : mongooseToObject(auth)
            });
    }
}

module.exports = new AuthController();