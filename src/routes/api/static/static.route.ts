import { Router } from 'express';
import Multer from "multer"
import StaticController from './static.controller'

class StaticRoute{
    private static instance = new StaticRoute()
    constructor(){
        if(!StaticRoute.instance){

            StaticRoute.instance = this
        }
    return StaticRoute.instance
    }
    route(){
        const router = Router()
        router.post("/user",Multer({
            storage: Multer.memoryStorage(),
            limits: { fileSize: 7 * 1024 * 1024 },
            fileFilter: (_, file, callback) => {
                console.log("abc")
                if (['image/png', 'image/jpeg', 'image/jpg'].includes(file.mimetype)) {
                    return callback(null, true)
                }
                callback(new Error(`File mimetype not support: ${file.mimetype}`));
            }
        }).single('file'),StaticController.uploadAvatar)
        return router
    }
}
export default new StaticRoute()