const clientemodel = require('../models/cliente.model');



class ClienteService {
    ClienteService() {}

    async guardarcliente(cliente = new clientemodel()) {
        try {
            var clienteGuardado;
            await clientemodel.create(cliente).then( (value) => {
                clienteGuardado =  value;
            });

            return clienteGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async consultarclientes() {
        try {

            return await clientemodel.find();
        } catch (error) {
            return error;

        }
    }

    async eliminarcliente(idc) {
        console.log(idc);
        var clienteEliminado;
        try {
            await clientemodel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                clienteEliminado = value;
            });

            return clienteEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificarcliente(clientemod) {

        var clienteModificado;
        try {
            await clientemodel.findOneAndUpdate({
                _id: clientemod._id
            }, clientemod).then( (value) => {

                clienteModificado = clientemod;
            });

            return clienteModificado;
        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = new ClienteService();
