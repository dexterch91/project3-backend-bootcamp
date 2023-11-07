const express = require('express')
const router = express.Router()

class AchievementRouter {
    constructor(controller,checkJwt){
        this.controller = controller;
        this.checkJwt = checkJwt;
    }
    routes(){
        // we will insert routes into here later on
        router.get('/', this.checkJwt,this.controller.getAll.bind(this.controller))
        router.post('/', this.checkJwt,this.controller.insertOne.bind(this.controller))
        return router
    }
}

module.exports = AchievementRouter
