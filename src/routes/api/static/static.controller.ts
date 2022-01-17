import { Request,Response } from "express";
import BaseController from "../../../base/base.controller";
import ModelResponse from "../../../services/models/response";
class StaticController extends BaseController{
    private static instance = new StaticController()
    constructor(){
        super()
        if(!StaticController.instance){
            this.uploadAvatar = this.uploadAvatar.bind(this)
            StaticController.instance = this
        }
        return StaticController.instance
    }
    async uploadAvatar(request:Request,response:Response){
        console.log(request.file)
        const responseData = new ModelResponse()
        responseData.setData([])
        console.log(responseData.getCode())
        response
        .status(responseData.getSuccess().getHttpCode())
        .send(responseData.getSuccess())
    }
}
export default new StaticController