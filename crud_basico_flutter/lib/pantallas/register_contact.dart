import 'package:crud_en_flutter/modelos/cliente.model.dart';
import 'package:crud_en_flutter/pantallas/text_box.dart';
import 'package:crud_en_flutter/peticiones/cliente.peticion.dart';
import 'package:flutter/material.dart';

class RegisterContact extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _RegisterContact();
}

class _RegisterContact extends State<RegisterContact> {
  TextEditingController controllerName;
  TextEditingController controllerSurname;
  TextEditingController controllerPhone;

  @override
  void initState() {
    controllerName = new TextEditingController();
    controllerSurname = new TextEditingController();
    controllerPhone = new TextEditingController();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Registrar Contactos"),
        ),
        body: ListView(
          children: [
            TextBox(controllerName, "Nombre"),
            TextBox(controllerSurname, "Apellido"),
            TextBox(controllerPhone, "Telefono"),
            ElevatedButton(
                onPressed: () {
                  String name = controllerName.text;
                  String surname = controllerSurname.text;
                  String phone = controllerPhone.text;

                  if (name.isNotEmpty &&
                      surname.isNotEmpty &&
                      phone.isNotEmpty) {
                    Client c =
                        new Client(name: name, surname: surname, phone: phone);

                    addClient(c).then((client) {
                      if (client.id != '') {
                        print('Cliente registrado...!');
                        Navigator.pop(context, client);
                      }
                    });
                  }
                },
                child: Text("Guardar Contacto")),
          ],
        ));
  }
}
