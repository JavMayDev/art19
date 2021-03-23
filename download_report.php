<?php
header("Content-type:application/pdf");
header("Content-Disposition:attachment;filename='informe_anual_articulo19.pdf'");
readfile('informe.pdf');
?>
