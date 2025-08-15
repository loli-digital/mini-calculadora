//Función que sirve para cada bloque de "article_layout" y así no repito código

document.querySelectorAll(".article_layout").forEach(article => {
    const input1 = article.querySelector(".num1");
    const input2 = article.querySelector(".num2");
    const resultado = article.querySelector(".resultado");
    const btn = article.querySelector(".btn");
    //Selecciona lo que hay escrito en el párrafo "Sumar", "Restar", etc. y lo convierte a minúsculas
    const tipoOperacion = article.querySelector("p").textContent.toLowerCase();

    //El evento del botón
    btn.addEventListener("click", () => {

        const num1 = parseFloat(input1.value.trim());
        const num2 = parseFloat(input2.value.trim());

        //Validamos los números
        if(isNaN(num1) || isNaN(num2)){
            resultado.textContent = "Introduce un número válido";
            resultado.style.color = "red";
            return;
        }

        resultado.style.color = "black";
        let operacion;

        //Hacemos las operaciones

        if(tipoOperacion.includes("suma")){
            operacion = num1 + num2;
        } else if(tipoOperacion.includes("resta")){
            operacion = num1 - num2;
        } else if(tipoOperacion.includes("multiplicación")){
            operacion = num1 * num2;
        } else if(tipoOperacion.includes("división")){
            if( num2 === 0){
                resultado.textContent = "No se puede dividir entre 0";
                resultado.style.color = "red";
                return;
            }
            operacion = num1 / num2;
        }

        resultado.textContent = operacion;
    })

});