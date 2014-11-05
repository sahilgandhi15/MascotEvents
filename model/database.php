<?php
class Database {
	
    private static $dsn = 'mysql:host=localhost;dbname=mascotevents';
    private static $username = 'root';
    private static $password = '';
    private static $db;

    
    private function __construct() {}

    //return reference to pdo object
    public static function getDB () {
    	
        if (!isset(self::$db)) {
            try {
                self::$db = new PDO(self::$dsn,
                                     self::$username,
                                     self::$password);
            } catch (PDOException $e) {
                $error_message = $e->getMessage();
                include('../error/error.php');
                exit();
            }
        }
        return self::$db;
    }
}