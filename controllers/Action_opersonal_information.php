<?php

//action.php
session_start();
require_once('../db/db_connect.php');
$connect = db_conn();

if(isset($_POST["action"]))
{
	if($_POST["action"] == "update")
	{
		$query = "
		UPDATE outsources 
		SET name = '".$_POST["name"]."', 
		email = '".$_POST["email"]."',
		website = '".$_POST["website"]."'
		where id = ".$_SESSION['id'].";";
		$statement = $connect->prepare($query);
		$statement->execute();

		$query1 = "
		UPDATE users 
		SET password = '".$_POST["password"]."', 
		email = '".$_POST["email"]."'
		where id = ".$_SESSION['u_id'].";";
		$statement1 = $connect->prepare($query1);
		$statement1->execute();
		
		echo true;
	}
}
?>