<?php
    include 'autentica.php';
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/autenticacao.css">
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
        <a href="#">Sair</a>
    </div>

    <span onclick="openNav()"><img src="../img/menu.png" alt="" width="50"></span>

    <div id="main">
        <h1>Painel de inserção</h1>
        <div class="container">
            <form action="insercao_horario.php" method="post">
                <label for="data">Data:</label>
                <input type="date" id="data" name="data" required>
                <br><br>
                <label for="entrada">Chegada:</label>
                <input type="time" id="entrada" name="entrada" required>
                <br>
                <label for="inicio_almoco">Início do Almoço:</label>
                <input type="time" id="inicio_almoco" name="inicio_almoco" required>
                <br>
                <label for="fim_almoco">Fim do Almoço:</label>
                <input type="time" id="fim_almoco" name="fim_almoco" required>
                <br>
                <label for="saida">Saída:</label>
                <input type="time" id="saida" name="saida" required>
                <br>
                <input type="button" value="Registrar Horário" class="w-100 mt-4" id="registrar-horario">
            </form>
        </div>
    </div>
    <script src="insercao.js"></script>
</body>

</html>