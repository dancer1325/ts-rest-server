import express, { Application } from 'express';
import userRoutes from '../routes/usuario'; // If you use several routers --> Use alias to distinguish them
import cors from 'cors';

import db from '../db/connection';

// Export indicated declaring them
// export class Server {

class Server {
    // ts: Necessary to define the attributes previously to initialize them
    private app: Application; // Type is not required, but it's useful
    // private app: express.Application; // Similar to the previous line
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000'; // Since port is string, and process.env.PORT can be undefined --> Necessary to specify a value as default

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {

            await db.authenticate(); // Test if the connection to the database via sequelize is ok
            console.log('Database online');

        } catch (error) {
            throw new Error( error );
        }

    }

    middlewares() {

        // CORS -- Mount the specific cors middleware function
        this.app.use( cors() );

        // Lectura del body-- Mount the specific middleware function for parsing incoming requests with json as payload
        this.app.use( express.json() );

        // Carpeta pública -- Mount the specific middleware function for serving static files
        this.app.use( express.static('public') );
    }


    routes() {
        this.app.use( this.apiPaths.usuarios, userRoutes )
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }

}

export default Server;