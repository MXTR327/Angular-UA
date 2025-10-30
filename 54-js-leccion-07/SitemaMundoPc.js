class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return `Raton [ID: ${this._idRaton}, Tipo de Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
  }
}

class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  get idTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `Teclado [ID: ${this._idTeclado}, Tipo de Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
  }
}

class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamaño) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamaño = tamaño;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  toString() {
    return `Monitor [ID: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}"]`;
  }
}

class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, monitor, raton, teclado) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._raton = raton;
    this._teclado = teclado;
  }

  toString() {
    return `Computadora [ID: ${this._idComputadora}, Nombre: ${this._nombre}, \n  ${this._monitor}, \n  ${this._raton}, \n  ${this._teclado}]`;
  }
}

class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let computadorasOrden = '';
        for (let computadora of this._computadoras) {
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden [ID: ${this._idOrden}, Computadoras: ${computadorasOrden}]`);
    }
}

let raton1 = new Raton("USB", "Logitech");
console.log(raton1.toString());

let raton2 = new Raton("Bluetooth", "Microsoft");
console.log(raton2.toString());

let teclado1 = new Teclado("USB", "Dell");
let teclado2 = new Teclado("Bluetooth", "HP");
console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1 = new Monitor("Samsung", 24);
let monitor2 = new Monitor("LG", 27);
console.log(monitor1.toString());
console.log(monitor2.toString());

let computadora1 = new Computadora("PC Gamer", monitor1, raton1, teclado1);
console.log(`${computadora1}`);

let computadora2 = new Computadora("PC Oficina", monitor2, raton2, teclado2);
console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();