const express= require('express')
const app=express();
const PORT=5000;
const {graphql, graphqlHTTP} =require('express-graphql')

const schema=require('./Schema/index')
 const Database=require('./models')
app.use(express.json())

const root={
    ip:'191.69.1.112',
    accesskey:"shamsasdfasdahjsdv",
    dbConfig:Database
}

const context=async req=>{
    console.log(" hello  tesitng Shams Firoz")
    const token="shasdhjadvhjerhjqedvnadc823458934"
    return{token}
}

app.use('/graphql',
// graphqlHTTP({
//     schema,
//     rootValue:root,
//     graphiql:true,
//     context:()=>context(req)
// })
graphqlHTTP(async req=>({
    schema,
    rootValue:root,
    graphiql:true,
    context:()=>context(req)   
}))

)
app.listen(PORT,()=>{
    console.log("server is running sucessfully on PORT http://localhost:5000/")
})