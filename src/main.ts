import express from 'express'
import mysql from 'mysql2/promise'
const app = express()
app.get("/produtos", async(req,res)=>{
    //OK -> 0 - Criar o banco de dados e iniciar o servidor de banco.
    //1 - Criar a conexão com o banco
    try{
        const conection = await mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"",
            database:"banco1022a",
            port:3306
        })
        //2 - Realizar uma consulta na tabela
        const [result, fields] = await conection.query("SELECT * from produtos")
        //3 - Devolver os dados pra quem pediu
        res.send(result)
    }catch(e){
        res.status(500).send("Server ERROR")
    }
})
app.listen(8000,()=>{
    console.log("Iniciei o servidor")
})
