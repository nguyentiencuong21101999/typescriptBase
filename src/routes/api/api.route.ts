'use strict'


import { Router } from "express";

class ApiRoute {
  private static instance = new ApiRoute()
    constructor() {
      if (!ApiRoute.instance) {
        this.route = this.route.bind(this)
        ApiRoute.instance = this;
      }
      return ApiRoute.instance;
    }
  
    route() {
      const router = Router();
      // router.use('/auth', AuthRoute.route())
     
      return router
    }
  
  }
  
  export default new ApiRoute();