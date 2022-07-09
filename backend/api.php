<?php
require_once __DIR__ . '/databaseconnection.php';
class API{
    function Select(){
        $sql = "mysql:host=$server;dbname=$database;";
        $dsn_options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
        $users=array();
        $query = "SELECT * FROM `medlife_products_data_base`";
        $query->execute();

        try{
         while($OutputData=$data->fetch(PDO::FETCH_ASSOC)){
            $users[$OutputData['id']]=array(
                 'Product id'  =>       $OutputData["Product_Name"],
                 'Product price' =>      $OutputData["Product_Price"],
                 'Product mrp'   =>      $OutputData["Product_MRP"],
                 'Product discount' =>   $OutputData["Product_Discount"],
                 'Product card details' =>  $OutputData["Product_card_details"],
                 'Product details'     =>    $OutputData["Product_details"],
                 'Product categories'  =>     $OutputData["Product_categories"],
                 'Product image'     =>   $OutputData["Product_Image"]
            );
         }
         return json_encode($users);
            
        }
        catch(PDOException $error)
        {
            echo 'connection error: ',$error->getMessage();
        }
    }
}

$API= new API;
header('Content-Type : application/json');
echo $API->Select();

?>