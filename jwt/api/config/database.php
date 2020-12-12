<?php
// used to get mysql database connection
class DatabaseService{

    private $db_host = "127.0.0.1";
    private $db_name = "toplearn";
    private $db_user = "root";
    private $db_password = "";
    private $connection;

    public function getConnection(){

        $this->connection = null;

        try{
            $this->connection = new PDO("mysql:host=" . $this->db_host . ";dbname=" . $this->db_name, $this->db_user, $this->db_password);
        }catch(PDOException $exception){
            echo "Connection failed: " . $exception->getMessage();
        }
        // $this->connection = new PDO("mysql:host=" . $this->db_host . ";dbname=" . $this->db_name, $this->db_user, $this->db_password);
  
        return $this->connection;
    }
}
?>