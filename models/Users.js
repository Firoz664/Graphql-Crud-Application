module.exports=(sequelize,DataTypes)=>{
    Users=sequelize.define('users',{
        name:DataTypes.STRING,
        email:DataTypes.STRING,
        phone:DataTypes.STRING,
        gender:DataTypes.STRING,
        status:DataTypes.STRING,
    },{
        createdAt:'create_at',
        updatedAt:'modified_at'
    })
    return Users

}