'use strict'

import path from 'path'
import fs from 'fs'
import log4js from 'log4js'
import Moment from 'moment'
log4js.configure({
  appenders: {
    access: { type: 'dateFile', filename: 'log/access.log', maxLogSize: 51916800, backups: 3, compress: true }
  },
  categories: { default: { appenders: ["access"], level: "all" } }
});

const logger = log4js.getLogger("access");

const getTime = () => {
  const date = new Date()
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`
}

class LoggerService {

  constructor() { }

  static info(content:any) {
    const log = `[${getTime()}] [INFO] ${content}`
    logger.info(content)
    console.info('\x1b[36m%s\x1b[0m', log)
  }

  static debug(message:any, content:any) {
    const log = `[${getTime()}] [DEBUG] ${message} ${JSON.stringify(content)}`
    logger.debug(message, content)
    console.debug(log)
  }

  static trace(content:any) {
    logger.trace(content)
    console.trace(`[${getTime()}] [TRACE] ${JSON.stringify(content)}`)
  }

  static warn(content:any) {
    const log = `[${getTime()}] [WARN] ${JSON.stringify(content)}`
    logger.warn(content)
    console.warn('\x1b[33m%s\x1b[0m', log)
  }

  static log(content:any) {
    logger.log(content)
    console.log(`[${getTime()}]-[LOG]: \n`, content)
  }

  static error(content:any) {
    const log = `[${getTime()}] [ERROR] ${JSON.stringify(content)}`
    logger.error(content)
    console.error('\x1b[31m%s\x1b[0m', log)
    console.trace();
  }

}

export default LoggerService;
