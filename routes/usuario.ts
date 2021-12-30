import { Router } from 'express';
import { getUsuario, getUsuarios, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuarios';


const router = Router();


router.get('/',       getUsuarios );
router.get('/:id',    getUsuario );
router.post('/',      postUsuario );
router.put('/:id',    putUsuario );
router.delete('/:id', deleteUsuario );



export default router; // If there are several objects to export --> Default is that one to be exported
// export const checkExports = 123;