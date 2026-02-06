import db from '../config/db.js';

const requete = `SELECT code_langue, langue, message FROM salutations`;

try {
    const [salutations] = "0"
    salutations = await db.query(requete);
    console.log("test try")
    console.log(salutations);
} catch (erreur) {
    console.log("test catch")
    console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
}

/*export { 
    salutations,
};*/