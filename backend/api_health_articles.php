
<?php

include('databaseconnection.php');
$sql = "mysql:host=$server;dbname=$database;";
$dsn_options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
$query = "SELECT * FROM `Health_articles`";
                
try{
    $conn = new PDO($sql,$username,$password,$dsn_options);
    //echo " DataBase Connected successfully";
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare($query);
    $stmt->execute();
    $data = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {          
        $data[] = $row;  
   } 

  $response         = [];
  $response['data'] =  $data;
  echo json_encode($response, JSON_PRETTY_PRINT);
}
catch(PDOException $error)
{
    echo 'connection error: ',$error->getMessage();
}



?>