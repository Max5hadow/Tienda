//Suma elementos
function sumar(boton) {
    const carta = boton.closest('.carta-marvel'); //Busca el elemento más cercano que tenga la clase .carta-marvel
    const cantidadSpan = carta.querySelector('.cantidad'); //Busca el elemento más cercano que tenga la clase .cantidad
    let cuenta = Number(cantidadSpan.innerText); //Convierte texto a número
    cuenta++; //Aumenta la cantidad de cartas en 1
    cantidadSpan.innerText = cuenta; //Actualiza el texto de la cantidad de cartas
    mostrar(); // Llama a la función mostrar para actualizar el valor total de la compra
}
//Resta elementos
function restar(boton) {
    const carta = boton.closest('.carta-marvel');
    const cantidadSpan = carta.querySelector('.cantidad');
    let cuenta = Number(cantidadSpan.innerText);
    cuenta = Math.max(0, cuenta - 1); // Resta 1 a cuenta a la vez que limita el valor de cuenta a que su minimo sea 0
    cantidadSpan.innerText = cuenta;
    mostrar();
}
//Actualiza el total a pagar
function mostrar() {
    let total = 0;

    const cartas = document.querySelectorAll('.carta-marvel'); //Obtiene todas las cartas marvel

    cartas.forEach(carta => { //Recorre las cartas
        const cantidadEl = carta.querySelector('.cantidad'); //Guarda la cantidad de cartas
        const valorEl = carta.querySelector('.valor'); //Guarda el valor de la carta

        if (cantidadEl && valorEl) { //Si ambos valores existe entonces convierte los textos a números
            const cantidad = Number(cantidadEl.innerText);
            const precio = Number(valorEl.innerText);
            total += cantidad * precio; //Los multiplica para sumar al total
        }
    });

    document.querySelector('.valor-total').innerText = total.toLocaleString(); //Actualiza el texto del total
}
