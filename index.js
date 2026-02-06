// Importer le module express
import express from 'express';
import salutationsRouter from './src/routes/salutations.route.js';

// Créer une application express
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/salutations', salutationsRouter);

app.get('/api', (req, res) => {
    res.send("<h1>Mon premier serveur web sur express !</h1>");
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});