<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");

require("./index.php");

// print_r($_POST);
$postdata=file_get_contents("php://input");

/* print_r($postdata);
 echo $postdata;*/

if(isset($postdata)&& !empty($postdata)){
    $request=json_decode($postdata);
    $email=$request->email;
    $password=$request->password;
    $hash_password=md5($password);

    //select query

    $sql="SELECT * FROM  user WHERE password='$hash_password' AND email='$email'";
    $result=mysqli_query($connection,$sql);
    print_r($result);
    if(mysqli_num_rows($result)==1)
    {
        http_response_code(201);
     // success";
    }
    else
    {
         echo "UserName Or Password Invalid";
       // error - http_response_code(422);
    }
}
?>