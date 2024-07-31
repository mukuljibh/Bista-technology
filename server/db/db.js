import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Bista_Tech', 'anurag', 'anurag123', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error: ' + err));

export default sequelize;