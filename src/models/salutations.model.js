import db from '../config/db.js';

const requete = `SELECT code_langue, langue, message FROM salutations`;

try {
    const [salutations] = await db.query(requete);
    console.log(salutations);
} catch (erreur) {
    console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
}

export { 
    salutations,
};