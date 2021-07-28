const app = require('./app');
const { dbConection } = require('./database');

async function main() {
    //Primero nos conectamos a la base de datos
    await dbConection();
    //Despues inicio mi servidor 
    await app.listen(4000);
}

main();