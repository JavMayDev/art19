<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="responsive.css">

    <!-- modules -->
    <script src="modules/anime.min.js"></script>
    <script src="modules/blotter.min.js"></script>
    <script src="modules/rollingDistortMaterial.js"></script>
</head>
<body>
    <div id="loading" style="font-family: 'Bronxos'; font-size: 50px;">
	<img style="left: 50%; top: 50%; transform: translate(-50%, -50%); position: absolute" src="images/loading.gif"/>
	<span style="bottom: 0px; position: absolute; font-family: Bronxos">.</span>
	<span style="bottom: 0px; position: absolute; font-family: 'Degular'">.</span>
	<span style="bottom: 0px; position: absolute; font-family: Manrope">.</span>
    </div>
    
    <div id="header">
	<a href="#"><img src="images/download_icon.png" alt=""> <span style="padding: 10px">DESACARGA EL INFORME</span></a>
	<div class="push"></div>
	<div>
	    <span>comunicacion@article19.org</span>
	    <div style="display: flex; flex-direction: row">
		<div class="push"></div>
		<div id="nav-icon">
		    <span></span>
		    <span></span>
		    <span></span>
		    <span></span>
		</div>
	    </div>
	</div>
    </div>

    <div id="fullscreen-menu">
	<ul>
	    <li><span>Inicio</span></li>
	    <li><span>01 / El control informativo</span></li>
	    <li><span>02 / La desigualdad y la pandemia</span></li>
	    <li><span>03 / Violencia contra la prensa</span></li>
	    <li><span>04 / La regulacion del internet</span></li>
	    <li><span>05 / El desmantelamiento de instituciones</span></li>
	    <li><span>06 / La negaci&oacute;n del presente</span></li>
	</ul>
    </div>    

    <?php
    include('sections/cover/cover.php');
    include('sections/introduction.php');

    include('sections/sec00/sec00.php');
    include('sections/sec01/sec01.php');
    include('sections/sec02/sec02.php');
    include('sections/sec03/sec03.php');
    include('sections/sec04/sec04.php');
    include('sections/sec05/sec05.php');
    include('sections/sec06/sec06.php');

     /* include('sections/sec06/sec06.php'); */
     ?>

     <img class="page-arrow" id="nextpage" src="images/arrow.svg" alt="">
     <img class="page-arrow" id="prevpage" src="images/arrow.svg" alt="">

     <ul id="menu">
	 <li>00</li>
	 <li>01</li>
	 <li>02</li>
	 <li>03</li>
	 <li>04</li>
	 <li>05</li>
	 <li>06</li>
    </ul>


    <script src="loadingPage.js"></script>
    <script src="index.js"></script>
    <script src="setCurrent.js"></script>
    <script src="blotterMaterial.js"></script>
    <script src="changePage.js"></script>
    <script src="nav.js"></script>
    <script src="makeChart.js"></script>
</body>
</html>
