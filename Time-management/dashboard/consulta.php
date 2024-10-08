<?php
    include 'autentica.php';
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/autenticacao.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="stylesheet" href="dashboard.css">
    <title>Tela dashboard</title>
</head>

<body>
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="insercao.php">Inserção</a>
        <a href="consulta.php">Consulta</a>
        <a href="logout.php">Sair</a>
    </div>

    <span onclick="openNav()"><img src="../img/menu.png" alt="" width="50"></span>

    <div id="main">
        <h1>Painel de Consulta</h1>

        <div class="container">
            <div class="container">
                <h1 class="mt-5">Dashboard de Horas Trabalhadas</h1>
                <canvas id="grafico-horas"></canvas>
            </div>
            <form>
                <h1 id="horas-trabalhadas"></h1>
                <br>
                <h2 id="resultado-mes"></h2>
            </form>
            <br>
            <form>
                <h1>Horas Trabalhadas Esta Semana</h1>
                <br>
                <h2 id="resultado-semanal"></h2>
            </form>
        </div>
    </div>
    <script src="consulta.js"></script>
</body>

</html>