const routerStudent = require('./student')
const routerAuth = require('./auth')
function route(app){
    app.use('/auth', routerAuth)
    app.use('/',routerStudent)
}

module.exports = route