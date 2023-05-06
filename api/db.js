import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", //seu login do MySql
    database: "crud"
})

