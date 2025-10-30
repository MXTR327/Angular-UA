class Cliente extends Persona {
  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this._idCliente = Persona.contadorPersonas;
    this._fechaRegistro = fechaRegistro;
  }

  get idCliente() {
    return this._idCliente;
  }

  get fechaRegistro() {
    return this._fechaRegistro;
  }
  set fechaRegistro(fechaRegistro) {
    this._fechaRegistro = fechaRegistro;
  }

  toString() {
    return `${super.toString()} - ${this._idCliente} - ${this._fechaRegistro}`;
  }
}
