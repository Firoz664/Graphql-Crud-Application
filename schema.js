const graphiql=require('graphql');
const { Schema } = require('mongoose');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
}=graphiql;

const UserType=new GraphQLObjectType({
    name:"user",
    fields:()=>({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLString}

    })

})
const DataBase=require('./models')
const User=DataBase.users
const RootQuery=new GraphQLObjectType({
    name:"xyz",
    fields:{
        codeimprove:{
            type:new GraphQLList(UserType),
          resolve(parent,args){
            let data=[{
                id:12,name:'codeimprove',email:'code@gmail.com',
                phone:'8010706464'
            },
            {
                id:13,name:'shams',email:'shams@gmail.com',
                phone:'9010706464'
            }]
            return data  
            
          }
        },
        userList:{
            type:new GraphQLList(UserType),
          resolve(parent,args){
            let data=User.findAll()
            return data  
            
          }
        }
    }
})
module.exports= new GraphQLSchema({query:RootQuery})