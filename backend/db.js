const mongoose=require('mongoose')
const mongoURI='mongodb://127.0.0.1:27017/CloudNote1?directConnection=true'
// mongodb://localhost:27017/
// mongodb://127.0.0.1:27017/?directConnection=true

const connectmongo=async()=>{

const mon=await mongoose.connect(mongoURI)

console.log(`connected successfully ${mon.connection.host}`)

}


module.exports=connectmongo;