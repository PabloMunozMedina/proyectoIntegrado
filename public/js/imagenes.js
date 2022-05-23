function aleatorio() {
    var myArray = ['fiesta', 'atardecer', 'musica', 'deporte', 'aleatorio', 'colorido'];
    var rand = ~~(Math.random() * myArray.length);
    var rValue = myArray[rand];
    window.location.href = "/?query=" + rValue;
}

// Funcion para descargar imagenes
function downloadImage(url, name) {
    fetch(url)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // El nombre del archivo que tu buscas
            a.download = name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('Ha ocurrido un error, lo sentimos'));
}


function busquedaImagen(query, page = null) {
    if (query == null || query == "") {
        var url = "https://api.pexels.com/v1/search?query=noche&locale=es-ES&page=" + page + "&&per_page=30"
    } else {
        var url = "https://api.pexels.com/v1/search?query=" + query + "&locale=es-ES&page=" + page + "&per_page=30"
    }

    var photos

    var photo

    var color

    var linksat

    $.ajax({
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "563492ad6f91700001000001d77aff73dbb641b3989bf88d0088d163");
        },
        method: 'GET',
        url: url,
        success: function(data) {

            document.getElementById('result').innerHTML = " ";

            console.log(data)

            photos = data.photos
                //MAQUETACION FOTOGRAFIAS
            if (photos.length == 0) {
                $("#result").append(
                    `
                    <img src="../img/error.png" alt="ERROR 404">
                    `
                )
            } else {
                for (var i = 0; i < photos.length; i++) {
                    color = photos[i].avg_color.slice(1)
                    photo = `
                    <div id="imagen">
                        <img src="${photos[i].src.large2x}"/>
                        <div id="opciones">
                            <a href="/imagen?id=${photos[i].id}&nombre=${photos[i].alt}&avg_color=${color}&width=${photos[i].width}&height=${photos[i].height}&photographer=${photos[i].photographer}&src=${photos[i].src.large2x}">Detalles</a>   
                        </div>

                    </div>
                    `
                    $("#result").append(photo)
                }
            }
            ///
            console.log(data.page)

            // --------------------------------Explicacion--------------------------------------//
            // Al mostrar 20 paginas, no añadimos mediante blucle mas botones hasta la pagina 17//
            // Por ello apartir de la pagina 17 hay que añadirle condiciones extras             //
            // para que los botones se maqueten como queramos                                   //
            // ---------------------------------------------------------------------------------//

            //BOTONES PAGINAS
            if (data.page != 1) { //Si la pagina no es uno
                atras = data.page - 1;
                botonAtras = `
                <button class="pagina" onclick="page(this.value)" value="${atras}"> <- </button>
                ` //Se define y se añade un boton para ir hacia atras
                $("#linksat").append(botonAtras)

                boton1 = `
                <button class="pagina" onclick="page(this.value)" value="1">1</button>
                ` //Se define y se añade un boton para ir directamente a la pagina 1
                $("#linksat").append(boton1)


                //BOTONES PARA PAGINA ANTERIOR
                // Revisar codigo para optimizar
                if (atras != 1 && atras <= 17) { //Si no es la primera o llega al limite de 17 paginas se añade un boton con la pagina anterior a la que estas
                    anterior = `
                    <button class="pagina" onclick="page(this.value)" value="${atras}"> ${atras} </button>
                    `
                    $("#linksat").append(anterior)

                }
                if (atras != 1 && atras > 17) { //Si no es la primera o llega al limite de 17 paginas se añade un boton con la pagina 16
                    anterior = `
                    <button class="pagina" onclick="page(this.value)" value="16">16</button>
                    `
                    $("#linksat").append(anterior)
                }
            }

            //BOTONES DE PAGINAS
            if (data.page < 17) { //Al llegar a la pagina 17 se añaden de manera fija hasta la pagina 20
                for (var i = data.page; i < data.page + 3; i++) {
                    linksat = `
                    <button class="pagina" onclick="page(this.value)" value="${i}">${i}</button>
                    `
                    $("#linksat").append(linksat)
                }
                boton20 = `
                    <button class="pagina" onclick="page(this.value)" value="20">20</button>
                    ` //Se define y se añade el boton 20
                $("#linksat").append(boton20)
            } else {
                for (var i = 17; i < 21; i++) { //Estos botones se añaden de forma fija cuando se esta minimo en la pagina 17

                    linksat = ` 
                    <button class="pagina" onclick="page(this.value)" value="${i}">${i}</button>
                    `
                    $("#linksat").append(linksat)
                }
            }

            if (data.page != 20) { //Mientras no llegues a 20
                adelante = data.page + 1;
                botonAdelante = `
                <button class="pagina" onclick="page(this.value)" value="${adelante}"> -> </button>
                ` //Se define y se añade el boton de avanzar
                $("#linksat").append(botonAdelante)
            }
        }
    })
}

// Cargar imagenes al iniciar la pagina 
window.onload = function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var query = urlParams.get('query');
    busquedaImagen(query);
}

//Elegir filtro/categoria
$('.categoria').click(function() {
    var valor = $(this).attr('value'); //Guardar valor de la categoria
    console.log(valor);
    busquedaImagen(valor);
})

//Funcion de pagina
function page(value) {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var query = urlParams.get('query'); //Conseguir la query por url
    console.log(query);
    var page = value; //Guardar numero de la pagina
    console.log(page);
    $("#linksat").empty(); //Eliminar los botones de la vista
    busquedaImagen(query, page);
}

//Funcion de busqueda
var form = $("#myForm");
form.submit(function(e) {
    e.preventDefault()
    var query = $("#search").val();
    window.location.href = "/?query=" + query;
})