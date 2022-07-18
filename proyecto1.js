function crearVector(n, m){
    let miarray = [];

    for(let x = 0; x < n; x++){
        miarray.push((Math.random() * m).toFixed(1));
    }

    return miarray
}

<<<<<<< HEAD

=======
function suma(v1,v2,v3){
    resultado = v1+v2+v3
    return resultado
}

function sumaVector(v1,v2){
    let miarray=[]
    for(x=0;x<v1.length;x++){
        
        if(v1.length = v2.length){
            miarray[x] = v1[x] + v2[x]
        }
    }
    return miarray
}
console.log(sumaVector([1,2,3],[1,2,3]));
>>>>>>> rama2


function restaVector(v1,v2){
    let miarray=[]
    for(x=0;x<v1.length;x++){
        
        if(v1.length = v2.length){
            miarray[x] = v1[x] - v2[x]
        }
    }
    return miarray
}

console.log(restaVector([1,2,3],[1,2,3]));

function productoVector(v1,v2){
    let miarray = [];
    for(x=0;x<v1.length;x++){
        
        if(v1.length = v2.length){
            miarray[x] = v1[x] * v2[x]
        }
    }
    return miarray
}

console.log(productoVector([1,2,3],[1,2,3]))

function productoNumeroVector(v1,v2){
    let miarray = [];
    for(x=0;x<v1.length;x++){
        
        if(v1.length = v2.length){
            miarray.push(n[x] * v);
        }
    }
    return miarray
}

function calcularCuadrado(v1){
   let x = Math.pow(v1,2)
    return x
}



module.exports = {productoNumeroVector, sumaVector, restaVector,productoVector,crearVector,calcularCuadrado}
