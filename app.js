function agregar() {
    let dato = document.getElementById("dato").value;
    let lista = document.getElementById("lista");

    let li = document.createElement("li");
    li.textContent = dato;

    lista.appendChild(li);
}