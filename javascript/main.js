function  actualizaSubtotal(producto){
    const priceUnit  = producto.querySelector('.pu span').textContent;
    console.log(priceUnit)
    // console.dir(priceUnit);
    // console.log(parseFloat(priceUnit.textContent));

    //Quantity 
    const quantity = producto.querySelector('.qty input').value;
   

    //total
    const total = parseFloat(priceUnit) * parseFloat(quantity);
    console.log(total)
   
    //subtotal 
    const subTotal = producto.querySelector('.subtot span');
    subTotal.innerHTML = total;
    return total;

}//actualizaSubtotal
//Declaramos nuestra función 
function caculaTodoTotal(){
    //productos
    const productos = document.getElementsByClassName('product');
   //Arreglo de productos
    console.log(productos);
    let totalTotal = 0;
    for(let i = 0 ; i < productos.length ; i++){
        console.log(productos[i]);
         totalTotal = totalTotal + actualizaSubtotal(productos[i])
         
    }
    console.log("sum total" + totalTotal);

    let ancla = document.getElementById("total-value");
    ancla.innerHTML = totalTotal;
    // Array.from(productos);
    //     tmpArray.forEach(function (item, i){
    //         console.log(productos[i] );
    //     });

    // productos.forEach(function( producto){
    //     //Cada uno de los elementos
    //     console.log(producto)
    // })

}
//Traer todos los elementos 
 const btnsRemove = document.querySelectorAll('.btn-delete');
 console.log(btnsRemove);
 btnsRemove.forEach( function (button){
     button.addEventListener('click', function(evento){
         console.dir(evento.currentTarget);
         const target = evento.currentTarget;
         target.parentNode.parentNode.remove();

     })
 })



const btnCalc  = document.getElementById("calc");

btnCalc.addEventListener('click', function(event){
    // console.log(event);
    // console.log(event.target);
    // console.log(event.timeStamp);
    // console.log(event.type);
    console.log(" Hay me clickeaste");
    //priceUnit
    //Calcular solamente 1 
    //actualizaSubtotal();
    //ejectua la funcion 
    caculaTodoTotal();
    


})//function click

// function()
// ()=>