import React, { createContext, useState } from "react";


export const CarritoContext = createContext();



export function CarritoProvider({children}){


const [carrito,setCarrito] = useState([]);




function agregarProducto(producto){


const existe = carrito.find(

(item)=> item.title === producto.title

);



if(existe){


setCarrito(

carrito.map(item =>

item.title === producto.title

?

{

...item,

cantidad:item.cantidad + 1

}

:

item

)

);


}

else{


setCarrito([

...carrito,

{

...producto,

cantidad:1

}

]);


}



}





function eliminarProducto(index){


const nuevo=[...carrito];

nuevo.splice(index,1);

setCarrito(nuevo);


}





function aumentarCantidad(index){


const nuevo=[...carrito];


nuevo[index].cantidad++;


setCarrito(nuevo);


}





function disminuirCantidad(index){


const nuevo=[...carrito];


if(nuevo[index].cantidad>1){

nuevo[index].cantidad--;

}


setCarrito(nuevo);


}




function vaciarCarrito(){

setCarrito([]);

}





return(

<CarritoContext.Provider

value={{

carrito,

agregarProducto,

eliminarProducto,

aumentarCantidad,

disminuirCantidad,

vaciarCarrito

}}

>


{children}


</CarritoContext.Provider>


);


}