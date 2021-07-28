const mongose = require('mongoose');
const dbConection = async() => {
    try {
        console.log('Conectando DB..............................................');
        await mongose.connect('mongodb://localhost/apiClients', {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('CONECTADO...................................................');

    } catch (error) {

        throw new Error(error);

    }
}

module.exports = {
    dbConection
};