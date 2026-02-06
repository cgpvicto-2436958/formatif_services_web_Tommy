import express from 'express';
import {getSalutations, createSalutations, getSalutationHasard} from '../controllers/salutations.controller.js';

const salutationsRouter = express.Router();

salutationsRouter.get('/hasard', (req, res) => {
    res.json(getSalutationHasard(req, res));
});

salutationsRouter.get('/liste', (req, res) => {
    getSalutations(req, res);
});

salutationsRouter.post('/', createSalutations);


export default salutationsRouter;