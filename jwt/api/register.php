<?php
include_once './config/database.php';

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Content-type:application/json");
$fullname = '';
$email = '';
$password = '';
$conn = null;

$databaseService = new DatabaseService();
$conn = $databaseService->getConnection();

$data = json_decode(file_get_contents("php://input"),true);

$fullname = $data['fullname'];
$email = $data['email'];
$password = $data['password'];

$table_name = 'user';

$query = "INSERT INTO " . $table_name . "
                SET fullname = :fullname,
                    email = :email,
                    password1 = :password";

$stmt = $conn->prepare($query);

$stmt->bindParam(':fullname', $fullname);
$stmt->bindParam(':email', $email);

$password_hash = password_hash($password, PASSWORD_BCRYPT);

$stmt->bindParam(':password', $password_hash);
//  $stmt->execute();
if(isset($data['fullname'])){
    if($stmt->execute()){
        // if($stmt->execute()){   
    
         http_response_code(200);
        echo json_encode(array("message" =>"yes"));
    }else{
         http_response_code(400);
    
        echo json_encode(array("message" => "no"));
    }
}

?>