// let autos = new Array("BMW", "Audi", "Volvo");
const autos = ["BMW", "Audi", "Volvo"];
console.log(autos);

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for (let i = 0; i < autos.length; i++) {
  console.log(i + " : " + autos[i]);
}
autos[1] = "Mercedes Benz";
console.log(autos[1]);

autos.push("Audi");
console.log(autos);

console.log(autos.length);
autos[autos.length] = "Cadillac";

console.log(autos);

autos[6] = "Porsche";
console.log(autos);

console.log(typeof autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);
