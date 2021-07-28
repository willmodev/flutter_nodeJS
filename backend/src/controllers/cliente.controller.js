const clienteService = require('../services/cliente.service');

const agregarclientes = async (req, res) => {
    console.log(req.body);
    res.json({
       cliente: await clienteService.guardarcliente(req.body)

    })

}

const consultarclientes = async(req, res) => {
    res.json({
        clientes: await clienteService.consultarclientes()
    })
}

const modificarcliente = async(req, res) => {
    res.json({
        cliente: await clienteService.modificarcliente(req.body)
    })
}

const eliminarcliente = async(req, res) => {
    res.json({
        cliente: await clienteService.eliminarcliente(req.params.id)
    })
}



module.exports = {consultarclientes, agregarclientes, modificarcliente, eliminarcliente};