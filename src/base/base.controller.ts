import Logger from '../services/logger/logger.service'
import ModelRequest from '../services/models/request'
import ModelResponse  from '../services/models/response'
import {Response,Request}  from 'express'

class BaseController{
    constructor(){}
    responseSuccess(response:Response, code:number|null, data = {}) {
        try {
          // Logger.info(`BaseController execute responseSuccess with`)
          // Logger.debug(`BaseController execute responseSuccess receive code`, code)
          // Logger.debug(`BaseController execute responseSuccess receive data`, data)
          const responseData = new ModelResponse()
          responseData.setCode(code)
          responseData.setData(data)
          Logger.debug(`BaseController execute responseSuccess with response code`, responseData.getCode())
          Logger.info(`BaseController execute responseSuccess`)
          response
            .status(responseData.getSuccess().getHttpCode())
            .json(responseData.getSuccess());
        } catch (e:any) {
          Logger.error(`BaseController responseSuccess with ${e.toString()}`)
          throw e
        }
      }
}
export default BaseController
