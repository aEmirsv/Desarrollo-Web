// Ejercicio 1 Devoler pares
arreglo=[1,2,3,4,5,6,7,8,9]

function devolverPares(arreglo){ 
    pares=[]  
    let n=arreglo.length
    let pos=0
    for(let i=0; i<n;i++){
        if(arreglo[i]%2==0){
            pares[pos]=arreglo[i];
            pos++
        }
    }
    return pares;
}
console.log(devolverPares(arreglo));

//Ejercicio 2 Retornar suma

function sumar(arreglo){
    let suma=0
    let n=arreglo.length
    for(let i=0; i<n;i++){
        suma+=arreglo[i];
    }
    return suma;
}

console.log(sumar(arreglo));

// Ejercicio 3 Eliminar elementos duplicados de un arreglo

let cad = ['manzana', 'Platano', 'naranja', 'pera', 'manzana', 'uva', 'Platano', 'manzana', 'naranja', 'pera']; 

function borrarDuplicados(cad){

    for(let i=0; i<cad.length;i++){
        for(let j=1; j<cad.length;j++){
            if(cad[i]==cad[j] && i!=j){
                cad.splice(j,1);
                j--
            }
        }
    }
    return cad
}
console.log(borrarDuplicados(cad))

// Ejercicio 4 retorne un objeto con cada palabra como clave y número de veces que aparece como valor


function regresarobj(cad){
    let objetito={}
    let nobj=0
    for(let i=0; i<cad.length;i++){
        let cont=0
        for(let j=1; j<cad.length;j++){
            if(cad[i]==cad[j]){
                cont++

            }
        }
        objetito[]={
            
        }
    }
}

// Ejercicio 5  Ordene numeros de forma ascendente

let arreglo_ua=[4,5,8,6,2,3,7,3,5,1]

function burbuja(arreglo_ua){
    let aux=0
    let n=arreglo_ua.length

    for(let i=0; i<n;i++){
        for(let j=0;j<n;j++){
            if(arreglo_ua[j]>=arreglo_ua[j+1]){
                aux=arreglo_ua[j+1]
                arreglo_ua[j+1]=arreglo_ua[j];
                arreglo_ua[j]=aux
            }  
        }
    }
    return arreglo_ua
}

console.log(burbuja(arreglo_ua))

//Ejercicio 6 Retornar arreglo con elementos en mayuscula

var frutas = ['manzana', 'platano', 'naranja', 'pera'];

function mayusculas(frutas){
    let mayus=[];
    frutas.forEach(function(cad) {
        mayus.push(cad.toUpperCase());
    });
    return mayus;
}

console.log(mayusculas(frutas))

// Ejercicio 7 Retornar maximo y minimo de arreglo

function maxandmin(arreglo_ua){
    let maxmin=[arreglo_ua[0],arreglo_ua[0]];

    for(let i=1; i<arreglo_ua.length;i++){
        if(maxmin[0]<=arreglo_ua[i]){
            maxmin[0]=arreglo_ua[i]
        }else if(maxmin[1]>=arreglo_ua[i]){
            maxmin[1]=arreglo_ua[i]
        }
    }
    return maxmin
}   
let arrmm=maxandmin(arreglo_ua);
console.log("Maximo: "+arrmm[0]+" Minimo: "+arrmm[1])



// Ejercicio 8 Dos arreglos en uno
let arreglo1=[1,2,3,4,5,6,7,8,9]
let arreglo2=[4,5,8,6,2,3,7,3,5,1]


function insertar(arreglo1, arreglo2){
    let insertados=[]

    arreglo1.forEach(function(arr){
        insertados.push(arr)
    })
    arreglo2.forEach(function(arr){
        insertados.push(arr)
    })
    return insertados
}
console.log(insertar(arreglo1, arreglo2))

//Ejercicio 9 Suma de cuadrados de un vector

function sumaCuadrados(arreglo){
    let suma=0
    let n=arreglo.length
    for(let i=0; i<n;i++){
        suma+=arreglo[i]**2;
    }
    return suma;
}

console.log(sumaCuadrados(arreglo))

//Ejercicio 10 Invertir orden de un arreglo

let arr_inv=[4,5,8,6,2,3,7,3,5]
function invertir(arreglo_ua){

    let n=arreglo_ua.length
    let mitad=n/2

    for(let i=0; i<mitad;i++){
        let auxiliar=arreglo_ua[i]
        arreglo_ua[i]=arreglo_ua[n-1]
        arreglo_ua[n-1]=auxiliar
        n--
    }
    return arreglo_ua
}

console.log(arr_inv)
console.log(invertir(arr_inv))
