<body>
    <div id="container">
        <div class="aside-principal">
            <div id="aside-seccion">
                <p class="subtitulo">Descubre</p>
                <!-- BUCLE FOREACH PARA MOSTRAR CADA CATEGORIA EN UN LI -->
                <ul>
                    <li><button class="categoria" onclick="aleatorio()"><box-icon name='shuffle'></box-icon> &nbsp;&nbsp;Aleatorio</button></li>                
                </ul>
            </div>
            <div id="aside-seccion">
                <ul>
                    <p class="subtitulo">Colores</p>
                    <li><button class="categoria" value="blanco"><p class="color white"></p>Blanco</button></li>
                    <li><button class="categoria" value="negro"><p class="color black"></p>Negro</button></li>
                    <li><button class="categoria" value="rojo"><p class="color red"></p>Rojo</button></li>
                    <li><button class="categoria" value="naranja"><p class="color orange"></p>Naranja</button></li>
                    <li><button class="categoria" value="verde"><p class="color green"></p>Verde</button></li>
                    <li><button class="categoria" value="morado"><p class="color purple"></p>Morado</button></li>
                    <li><button class="categoria" value="azul"><p class="color blue"></p>Azul</button></li>
                    <li><button class="categoria" value="amarillo"><p class="color yellow"></p>Amarillo</button></li>
                </ul>
            </div>
            <div id="aside-seccion">
                <p class="subtitulo">Tags</p>
                <ul>
                    <li><button class="categoria" value="animales"><box-icon type='solid' name='cat'></box-icon> &nbsp;&nbsp; Animales</button></li>                
                    <li><button class="categoria" value="vehiculos"><box-icon name='car' ></box-icon>&nbsp;&nbsp;Vehiculos</button></li> 
                    <li><button class="categoria" value="juegos"><box-icon name='joystick'></box-icon>&nbsp;&nbsp;Juegos</button></li>
                    <li><button class="categoria" value="naturaleza"><box-icon name='florist' type='solid' ></box-icon>&nbsp;&nbsp;Naturaleza</button></li>
                    <li><button class="categoria" value="peliculas"><box-icon name='camera-movie' ></box-icon>&nbsp;&nbsp;Películas</button></li>
                    <li><button class="categoria" value="ciudad"><box-icon name='business' type='solid' ></box-icon>&nbsp;&nbsp;Ciudad</button></li>              
                </ul>
            </div>
        </div>
        
        <div id="result"> 
        {{-- RESULTADOS DE LA API --}}
        </div>

        <div id="linksat">
        {{-- Barra navegacion pages --}}
        </div> 
        
    </div>
</body>


