
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "e-commerce";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$conn = new mysqli($servername, $username, $password, $dbname);



$kode=json_decode($_POST["kode-barang"]);
$jumlah=json_decode($_POST["jumlah"]);
$banyakdata=$_POST["banyakdata"];
$nama_pelanggan = $_POST['namapelanggan'];
$telp = $_POST['nomor'];
$alamat = $_POST['alamat'];

for ($i = 0; $i < $banyakdata; $i++) {
 $insert ="INSERT INTO `e-commerce`.`trtransaksi` (`kode_transaksi`, `kd_barang`, `jumlah`, `nama_pelanggan`, `telphone`, `alamat`) VALUES (NULL, '$kode[$i]', '$jumlah[$i]', '$nama_pelanggan', '$telp', '$alamat')"; 
if ($conn->query($insert) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $insert . "<br>" . $conn->error;
}
}
$conn->close();
?>
<script>localStorage.clear();localStorage.clickcount=0;</script>