<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="style.css">

    <!-- modules -->
    <script src="modules/anime.min.js"></script>
    <script src="modules/blotter.min.js"></script>
    <script src="modules/rollingDistortMaterial.js"></script>
</head>
<body>

    <div id="loading" style="font-family: 'Bronxos'; font-size: 50px;">
	<span style="left: 50%; top: 50%; transform: translate(-50%, -50%); position: absolute">Cargando...</span>
    </div>

    <?php
    include('sections/cover/cover.php');
    include('sections/sec00/sec00.php');
    include('sections/sec01/sec01.php');
    include('sections/sec03/sec03.php');
    include('sections/sec04/sec04.php');
    include('sections/sec05/sec05.php');

     /* include('sections/sec06/sec06.php'); */
     ?>

     <img class="page-arrow" id="nextpage" src="images/arrow.svg" alt="">
     <img class="page-arrow" id="prevpage" src="images/arrow.svg" alt="">

     <ul id="menu"></ul>


    <script src="loadingPage.js"></script>
    <script src="index.js"></script>
    <script src="setCurrent.js"></script>
    <script src="blotterMaterial.js"></script>
    <script src="changePage.js"></script>
</body>
</html>
