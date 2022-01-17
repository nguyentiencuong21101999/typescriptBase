'use strict'
import express,{ Express } from 'express';
import Config from 'config'
import fs from 'fs'
import cors from 'cors'

const app:Express = express();
const port = 4000;

import ApiRoute from './routes/api/api.route';
import MariaDB from './integration/database/mariaDB/index';
(async () => {
  try {
    const appConf = JSON.parse(fs.readFileSync('config/app.config.json', 'utf8'))
    MariaDB.createConnection(appConf)
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

      app.use('/api', ApiRoute.route())

    app.listen(port,() =>{
        console.log(` server on port ${port}`)
    })
    } catch (err) {
      console.log(err)
      process.exit(0)
    }
  })();
  
  