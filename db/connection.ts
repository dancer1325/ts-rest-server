import { Sequelize } from 'sequelize';


const db = new Sequelize('node', 'demos', '123456', { // Configure a proper user for managing it
    host: 'localhost',
    dialect: 'mysql',
    // logging: false, // Disables logging
});

export default db;
