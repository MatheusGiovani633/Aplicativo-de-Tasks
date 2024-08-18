const { Sequelize } = require ('sequelize')

const sequelize = new Sequelize('nodemvc2','root','',{
    host: 'localhost',
    dialect: 'mysql', // ou 'postgres', 'sqlite', 'mariadb', etc.
    port:'3308'

})

try{
    sequelize.authenticate()
    console.log('Conectamos ao Mysql!')

} catch(error){
    console.log(`Não foi possivel conectar: ${error}`)
}

module.exports = sequelize