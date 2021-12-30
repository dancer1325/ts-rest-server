import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('Usuario', { // Define the model using .define
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
});


export default Usuario;