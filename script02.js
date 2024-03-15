// ctrl shift p > quokka.js Instalar esta extension
let arr=[1,2,3,4,5]
console.log(arr)

//Agregar un nuevo elemento al arreglo 
arr[arr.length]=6
console.log(arr)

//Insertar valores al final
arr.push(7)
console.log(arr)

//Insertar valores al principio
arr.unshift(0)
console.log(arr)

//Remover el ultimo elemento del arreglo
arr.pop()
console.log(arr)

//Remover el primer elemento del arreglo
arr.shift()
console.log(arr)

//SI yo deseo insertar un elemento en cualquier posicion
arr.splice(3, 0, 0)
console.log(arr)

arr.splice(3, 1, 0)
console.log(arr)

//Pasar como parametros funciones dentro de funciones (callbacks)
function fn(func, nombre){
  func(nombre)
}
function saludar(nombre){
  console.log("Hola" + nombre)
}
fn(saludar, "Jonathan")

//Procesar los elementos de un arreglo 
//Forma mas básica es con un bucle

for(i=0; i<arr.length;i++){
  console.log(arr[i])
}

//Otros metodos para procesar los elementos 
arr.forEach(function(elemento, index){  //function (Primero siempre elemento, segundo siempre indice(si se necesita))
  console.log(index + ":" + elemento)  
})

arr.forEach(function(elemento, index){
  arr.[index]=elemento*3
})

console.log(arr)

//Generar un nuevo arreglo con los resultados de multiplicar por 2 cada elemento 
let dobles =arr.map(funcion(elemento){
  return elemento*2
})
console.log(dobles)

//Filtrar elementos 
let pares=arr.filter(function(elemento){
  return elementos%2==0
})

console.log(pares)

//Operador ternario
let x= 5>2 ? console.log("Verdadera"): console.log("Falsa")
//console.log(x)
//5>2 ? console.log("Verdadera"): console.log("Falsa")

//Aplicar una operacion usando todos los elementos del arreglo
let suma=arr.reduce(function(acumulador, elemento){   //Necsita un valor inicial si fuera producto el valor inicial deberia de ser 1
  return acumulador+= elemento
}, 0)
console.log(suma)

//Buscar elemento que cumpla una condicion
let buscado= arr.find(function(elemento){
 return elemento>7
})
console.log(buscado)

//Verificar si al menos un elemento del arreglo cumple con una condicion
let resultado=arr.some(function(elemento){
  return elemento>7
})

console.log(resultado)

//Desestructuracion

let arr2=[1,3,4,6,,8,9,10,12]

[a,b,c,d,...e]=arr2  //Operacion de propagacion "..."
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

//Funcionar dos arreglos
let arr3=[15,18,20,23]
let nuevoArr=[...arr2,...arr3]
console.log(nuevoArr)

//Pasar argumentos a funciones
function sumar(a,b,c,d){
    return a+b+c+d
}
console.log(sumar(.arr3))
