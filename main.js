/*let numero = parseInt(prompt("ingrese el número al cual desea agregar IVA"));
let multiplicacion = (numero * 0.21);
let resultado = 0;
let espacio = " " ;


function sumar(numero1, numero2) {
    resultado = numero1 + numero2;
}
sumar(numero, multiplicacion)

alert("el resultado es " + resultado);
document.write("solicitaste ver el valor con iva de " + numero + espacio);

document.write(espacio + "tu resultado es " + resultado);
*/
let producto = prompt(
  "Ingrese el Juego de Pokemon que desees comprar. para finalizar la compra escriba OK.\n Pokemon Rojo 300$  \n Pokemon Verde 500$  \n Pokemon Silver 1500$ ."
);
let total = 0;
function agregarProducto() {
  while (producto != "OK") {
    switch (producto) {
      case "Pokemon Rojo":
        console.log("producto: " + producto);
        total = total + 300;
        break;
      case "Pokemon Verde":
        console.log("producto: " + producto);
        total = total + 500;
        break;
      case "Pokemon Silver":
        console.log("producto: " + producto);
        total = total + 1500;
      default:
        console.log("producto no encontrado");
        break;
    }
    producto = prompt(
      "Ingrese el Juego de Pokemon que desees comprar. para finalizar la compra escriba OK.\n Pokemon Rojo 300$  \n Pokemon Verde 500$  \n Pokemon Silver 1500$ ."
    );
  }
  console.log("total a pagar : $" + total);
}
agregarProducto()

document.write("El total de tu compra es " + total );