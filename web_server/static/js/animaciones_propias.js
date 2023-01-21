function typeWriter() {
    // Extraemos el texto que vamos a animar
    text = document.getElementById("text_delayed").innnerHTML;
    
    // Vaciamos el elemento
    document.getElementById("text_delayed").innnerHTML = "";

    // Declaramos variables
    var i     = 0;
    var speed = 20; // en milisengudos
    
    if (i < text.length) {
        document.getElementById("text_delayed").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();