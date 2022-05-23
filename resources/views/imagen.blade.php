<?php 
    $id = $_GET['id'];
    $nombre = $_GET['nombre'];
    $avg_color = $_GET['avg_color'];
    $width = $_GET['width'];
    $height = $_GET['height'];
    $photographer = $_GET['photographer'];
    $src = $_GET['src']
?>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="{{ asset('js/imagenes.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/index.css') }}" rel="stylesheet">

    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>

</head>

<body>
    <header>
        @include('layouts.header_principal')
    </header>
    <main>
        <div id="main-container">
            <div class="imagen">
                <img src="<?php echo $src ?>"/>
            </div>
            <div class="info-container">
                <div class="propiedades">
                    <ul>
                        <li>
                            <span class="nombre">Nombre:</span>
                            <span class="dato"><?php echo $nombre ?></span>
                        </li>
                        <li>
                            <span class="nombre">Altura:</span>
                            <span class="dato"><?php echo $height ?> px</span>
                        </li>  
                        <li>
                            <span class="nombre">Anchura: </span>
                            <span class="dato"><?php echo $width ?> px</span>
                            </li>
                        <li>
                            <span class="nombre">Color:  </span>
                            <span class="dato"><?php echo '#'.$avg_color ?></span>
                        </li>
                        <li>
                            <span class="nombre">Autor: </span>
                            <span class="dato"><?php echo $photographer ?></span>
                        </li> 
                    </ul>
                </div>
                <div class="botones">
                    <button>Me gusta <box-icon name='like'></box-icon></button> 
                    <button onclick="downloadImage('<?php echo $src ?>', '<?php echo $nombre ?>')" >Descargar <box-icon name='download'></button>
                </div>
            </div>
            <h1 id="recomendados">Recomendados</h1>
            <div id="result"></div>
        </div>
    </main>
    @include('layouts.footer')
</body>
</html>