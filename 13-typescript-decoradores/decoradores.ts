function Saludar(target: Function): void {
  target.prototype.saludos = (): void => console.log("Hola desde decorador");
}

@Saludar
class Hola {
  constructor() {}
}

let hola1: any = new Hola();
hola1.saludos();
