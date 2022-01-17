
export  interface MariaDBConfig{
    connectionLimit:Number,
    host:string,
    port:number,
    username:string,
    password:string,
    database:string,
    connectionTimeout:number
}
export  interface Config{
    mariaDBConfig :MariaDBConfig
}