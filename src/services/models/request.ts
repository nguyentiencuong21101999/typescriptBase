'use strict'

class ModelRequest {
   payload:any;
   headers;
  constructor() {
    this.headers={
        ['content-type']: '',
        token: '',
    }
  }

  getHeaders() { return this.headers }
  setHeaders(headers:{['content-type']:string,token:string}) { this.headers = headers }
  getToken() { return this.headers.token }

  getPayload() { return this.payload }
  setPayload(payload:object) { this.payload = payload; return this }

  getUserId() { return this.getPayload().userId }
  getUserType() { return this.getPayload().userType }

}

export default ModelRequest
