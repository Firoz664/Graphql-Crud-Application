const { GraphQLList,GraphQLInt,GraphQLString } = require('graphql');
const DataBase=require('../../models')
const UserType=require('../TypeDefs/UserType')
const StatusType=require('../TypeDefs/StatusType')

const User=DataBase.users;


module.exports.USER_ADD={
    type:UserType,
    args:{
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        gender:{type:GraphQLString},
        status:{type:GraphQLString},
        phone:{type:GraphQLString}

    },
    resolve(parent,args){
       User.create({
        name:args.name,
        email:args.email,
        phone:args.phone,
        status:args.status,
        gender:args.gender
       })
        console.log(args)
        return args
    }
}
module.exports.USER_UPDATE={
    type:StatusType,
    args:{
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        gender:{type:GraphQLString},
        status:{type:GraphQLString},
        phone:{type:GraphQLString}
        
    },
    resolve:async(parent,args)=>{
        console.log(args)
       await  User.update({ 
        name:args.name,
        email:args.email,
        phone:args.phone,
        status:args.status,
        gender:args.gender
        },{where:{
            id:args.id
        }})
        return {
            success:true,message:"User Data Updated Successfully",error:""
        }
    }
}


module.exports.DELETE_USER={
    type:StatusType,
    args:{
        id:{type:GraphQLInt}, 
    },
    resolve:async(parent,args)=>{
        console.log(args)
       await  User.destroy({where:{
            id:args.id
        }})
        return {
            success:true,message:"User Data Delete Successfully",error:""
        }
    }
}