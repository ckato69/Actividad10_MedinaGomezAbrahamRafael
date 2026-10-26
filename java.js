// Función para cambiar de pantalla según el menú desplegable
function irAPractica() {
    let opcion = document.getElementById("menuPracticas").value;
    let area = document.getElementById("areaTrabajo");

    if (opcion === "1") {
        area.innerHTML = `
            <div class="caja-ejercicio">
                <h3>1. Votación por Sección</h3>
                <p>¿De qué sección eres?</p>
                <select id="seccion">
                    <option value="norte">Norte</option>
                    <option value="sur">Sur</option>
                    <option value="centro">Centro</option>
                </select>
                <button onclick="votar()">Votar</button>
                <p id="res1"></p>
            </div>`;
    } else if (opcion === "2") {
        area.innerHTML = `
            <div class="caja-ejercicio">
                <h3>2. Sumar Números Positivos</h3>
                <button onclick="sumarPositivos()">Comenzar</button>
                <p id="res2"></p>
            </div>`;
    } else if (opcion === "3") {
        area.innerHTML = `
            <div class="caja-ejercicio">
                <h3>3. Ordenar 3 Números</h3>
                <input type="number" id="n1" placeholder="Número 1"><br><br>
                <input type="number" id="n2" placeholder="Número 2"><br><br>
                <input type="number" id="n3" placeholder="Número 3"><br><br>
                <button onclick="ordenar()">Ordenar</button>
                <p id="res3"></p>
            </div>`;
    } else if (opcion === "9") {
        area.innerHTML = `
            <div class="caja-ejercicio">
                <h3>9. Métodos de Arreglos (Países)</h3>
                <p id="listaPaises"></p>
                <button onclick="probarPop()">Probar Pop()</button>
                <p id="res9"></p>
            </div>`;
    }
}

// Lógica de Ejercicio 1 (Switch)
function votar() {
    let sec = document.getElementById("seccion").value;
    switch(sec) {
        case "norte":
            document.getElementById("res1").innerText = "Gracias por votar por la sección NORTE.";
            break;
        case "sur":
            document.getElementById("res1").innerText = "Gracias por votar por la sección SUR.";
            break;
        case "centro":
            document.getElementById("res1").innerText = "Gracias por votar por la sección CENTRO.";
            break;
    }
}

// Lógica de Ejercicio 2 (Do-While sencillo)
function sumarPositivos() {
    let suma = 0;
    let num = 1;
    while(num > 0) {
        num = prompt("Ingresa un número positivo (0 o negativo para salir):");
        num = Number(num);
        if(num > 0) {
            suma += num;
        }
    }
    document.getElementById("res2").innerText = "La suma total es: " + suma;
}

// Lógica de Ejercicio 3 (If-Else para ordenar)
function ordenar() {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    let c = Number(document.getElementById("n3").value);
    let arr = [a, b, c];
    arr.sort(function(x, y) { return y - x; }); // De mayor a menor
    document.getElementById("res3").innerText = "De mayor a menor: " + arr.join(", ");
}

// Lógica de Ejercicio 9 (Arreglos básico)
let paises = ["México", "España", "Canadá", "Japón", "Brasil", "Alemania", "Francia", "Italia", "Chile", "Perú"];
function probarPop() {
    paises.pop(); // Borra el último
    document.getElementById("res9").innerText = "Nuevo arreglo tras pop(): " + paises.join(", ");
}