import express from 'express';
import {getSalutations, createSalutations, listePourLangue} from '../controllers/salutations.controller.js';

const salutationsRouter = express.Router();

salutationsRouter.get('/api/salutations/liste_pour_langue/:code_langue', (req, res) => {
    listePourLangue(req, res);
});

salutationsRouter.get('/liste', (req, res) => {
    getSalutations(req, res);
});

salutationsRouter.post('/', createSalutations);


export default salutationsRouter;