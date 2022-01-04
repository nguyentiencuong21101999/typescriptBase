'use strict'
import express from 'express';
import Config from 'config'
import fs from 'fs'
import cors from 'cors'

const app = express();
const port = 3000;

import apiRoute from 'routes/api/api.route';


(async () => {
  try {
    const appConf = JSON.parse(fs.readFileSync('config/app.config.json', 'utf8'))

    app.use(cors({
        origin: '*', // ["http://localhost:3001"]
        // credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        // headers: [],
        allowedHeaders: [
          'Origin',
          'X-Requested-With',
          'Content-Type',
          'Accept',
          'X-Access-Token',
        ],
        optionsSuccessStatus: 204
      }))
    app.listen(port,() =>{
        console.log(` server on port ${port}`)
    })
    } catch (err) {
      process.exit(1)
    }
  })();
  
  