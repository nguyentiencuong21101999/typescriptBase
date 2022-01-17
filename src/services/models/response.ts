'use strict'

import HttpCode from '../../services/codeResponse/http'
 import ResponseCode from '../../services/codeResponse/code'

class ModelResponse {
    code:number;
    data:object;
    message:string

  constructor() {
    this.code = 200
    this.data = {}
    this.message = ''
  }
  getSuccess() {
      console.log("HttpCode_",HttpCode)
    return {
      code: `${this.code ? this.code : HttpCode.OK}`,
      data: this.getData(),
      message: `success ${ResponseCode[this.code]}`,
      getHttpCode: () => {
        return HttpCode.OK
      },
    }
  }

//   getSuccess() {
//     return {
//       code: `${this.code ? this.code : HttpCode.OK}`,
//       data: this.getData(),
//       message: `${ResponseCode[this.code] ? ResponseCode[this.code] : 'Success'}`,
//       getHttpCode: () => {
//         return HttpCode.OK
//       },
//     }
//   }

//   getSystemException() {
//     return {
//       code: ResponseCode.SYSTEM_ERROR,
//       data: {},
//       message: ResponseCode[ResponseCode.SYSTEM_ERROR],
//       getHttpCode: () => {
//         return HttpCode.OK
//       },
//     }
//   }

//   getBadRequest() {
//     return {
//       getHttpCode: () => {
//         return HttpCode.BAD_REQUEST
//       },
//     }
//   }

  setCode(code:number|null) {
    this.code = code
    this.message = 'success' //ResponseCode[code]
  }

  getCode() {
    return this.code
  }

  setData(data:object) {
    this.data = data
  }

  getData() {
    return this.data
  }

  setMessage(message:string) {
    this.message = message
  }

  getMessage() {
    return this.message
  }

}

export default ModelResponse
