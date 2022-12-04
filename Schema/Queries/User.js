const { GraphQLList, GraphQLInt } = require('graphql');
const DataBase=require('../../models')
const UserType=require('../TypeDefs/UserType')
const User=DataBase.users;

module.exports.USER_LIST={
    type:new GraphQLList(UserType),
    resolve(parent,args,context){
        let myData=context();
        // console.log(parent)
        let={dbConfig}=parent
        // let data=dbConfig.users.findAll()
        let data=User.findAll()
        return data
    }
    // resolve:async (parent,args,context)=>{
    //     let mydata=await context()
    //     console.log(mydata.host)
    //     let {dbConfig}=parent
    //     let data=dbConfig.users.findAll()
    //     return data
    // }
  


}
module.exports.USER_LIST2={
    type:new GraphQLList(UserType),
    resolve(parent,args){
        let data=User.findAll({where:{id:1}})
        return data
    }
}
module.exports.USER_DETAILS={
    type:new GraphQLList(UserType),
    args:{
        id:{type:GraphQLInt}

    },
    resolve(parent,args){
        console.log('second',args)
        let data=User.findAll({where:{id:args.id}})
        return data
    }
}
module.exports.USER_UPDATES={
    type:new GraphQLList(UserType),
    args:{
        id:{type:GraphQLInt}

    },
    resolve(parent,args){
        console.log('second',args)
        let data=User.findAll({where:{id:args.id}})
        return data
    }
}