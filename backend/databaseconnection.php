<?php
//$servername = "mysql.hostinger.com";
//$servername = "in-mum-web678.main-hosting.eu";
//$servername = "localhost";
$username = "u812410177_medcliffeDb";
$server = "sql678.main-hosting.eu";
$password = "^s8fuG*=N*Y";
$database = "u812410177_medcliffeDb";
$sql = "mysql:host=$server;dbname=$database;";
$dsn_options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];

try{
    $mb_Db_connection = new PDO($sql,$username,$password,$dsn_options);
    echo "Connected succefully";
}
catch(PDOException $error)
{
    echo 'connection error: ',$error->getMessage();
}