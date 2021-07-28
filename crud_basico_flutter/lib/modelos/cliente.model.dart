class Client {
  var id;
  var name;
  var surname;
  var phone;

  Client({this.id, this.name, this.surname, this.phone});

  factory Client.fromJson(Map<String, dynamic> json) {
    return Client(
        id: json['_id'],
        name: json['nombre'],
        surname: json['apellido'],
        phone: json['telefono']);
  }
}
