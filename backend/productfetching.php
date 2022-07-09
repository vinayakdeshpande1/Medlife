
<?php

include('databaseconnection.php');
$sql = "mysql:host=$server;dbname=$database;";
$dsn_options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
$query = "SELECT * FROM `medlife_products_data_base`";

try{
    $conn = new PDO($sql,$username,$password,$dsn_options);
    echo " DataBase Connected successfully";
    

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare($query);
    // EXECUTING THE QUERY
    $stmt->execute();

    $r = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    // FETCHING DATA FROM DATABASE
    $result = $stmt->fetchAll();
    // OUTPUT DATA OF EACH ROW
    foreach ($result as $row) 
    {
        echo "<br> <h3> Product id - <h1\>". $row["Product_ID"] ."<br> ";
    
        echo "<br> <b> Product id - <b\>". $row["Product_Name"];
        echo "<br> <b> Product price - <b\>". $row["Product_Price"];
        echo "<br> <b> Product mrp - <b\>". $row["Product_MRP"];
        echo "<br> <b> Product discount - <b\>". $row["Product_Discount"];
        echo "<br> <b> Product card details - <b\>". $row["Product_card_details"];
        echo "<br> <b> Product details - <b\>". $row["Product_details"];
        echo "<br> <b> Product categories - <b\>". $row["Product_categories"];
        echo "<br> <b> Product image - <b\>". $row["Product_Image"];

    }
}
catch(PDOException $error)
{
    echo 'connection error: ',$error->getMessage();
}



?>