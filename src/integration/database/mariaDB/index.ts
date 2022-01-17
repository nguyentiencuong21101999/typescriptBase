'use strict'

import mariaDB from 'mariadb'
import Logger from '../../../services/logger/logger.service'
import { Config } from './interfaces';
// import StaticEnum from './repository/model/static.enum';
class MariaDbRepo {
  private static instance = new MariaDbRepo() 
  private con:any;;
  constructor() {
    if (!MariaDbRepo.instance) {
      this.con = null;
      this.createConnection = this.createConnection.bind(this)
      MariaDbRepo.instance = this;
    }
    return MariaDbRepo.instance;
  }

  createConnection(config:Config) {
    Logger.info("MariaDbRepo start connect");
    this.con = mariaDB.createPool({
      connectionLimit: 16,
      host: config.mariaDBConfig.host,
      port: config.mariaDBConfig.port,
      user: config.mariaDBConfig.username,
      password: config.mariaDBConfig.password,
      database: config.mariaDBConfig.database,
      connectTimeout: config.mariaDBConfig.connectionTimeout,
      //metaAsArray: true
    });
    Logger.info("MariaDbRepo start connection pool successful!");
  }

  async query(query:String, field:Array<any>, param:Array<any>, data?:string) {
   Logger.info("MariaDbRepo start query");
    query = query.replace(/\?\?/gi, '$')
    while (query.includes('$')) {
      query = query.replace('$', this.con.escapeId(field[0]))
      field.splice(0, 1)
    }
    if (data) {
      query = query.replace('#', data)
    }
   Logger.debug("MariaDbRepo start query receive query", query);
    Logger.debug("MariaDbRepo start query receive param", param);
    return await this.con.query(query, param).then((rs:Array<any>) => {
      return rs[0];
    }).catch((e:Error) => {
      if (e) {
        throw e
      }
    });
  }

}

export default new MariaDbRepo()
