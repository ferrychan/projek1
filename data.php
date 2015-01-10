<?php
mysql_connect("localhost","root","");
mysql_select_db("e-commerce");

$kategori = mysql_query('SELECT * FROM `mskategori` ORDER BY kd_kategori');
$rows=array();

while($row=mysql_fetch_array($kategori))   
{
    $rows[] = array("Nama"=>$row['nama_kategori']);
}

$data = array("Nama"=>"Ferry Chandra","Category"=>$rows);
echo json_encode($data);
?>