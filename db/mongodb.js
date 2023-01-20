




const mongoose = require ('mongoose')


mongoose.set('strictQuery', true)

mongoose.connection.on('open', ()=> console.log('db connectedn la concha de la lora'))

async function connectDb({host, port, dbName }){


     const uri=`mongodb://${host}:${port}/${dbName}`
     await mongoose.connect(uri,{useNewUrlParser:true})

}
module.exports = connectDb