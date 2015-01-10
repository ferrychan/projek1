<?php 
/*
$arr = array (
    "product"=>array(
                array("Nama"=>"ASUS Zenfone 6",
                 "Deskripsi"=>"ZenFone 6 has combined the best of the smartphone experience with powerful performance that will improve every aspect of your life.<br />Simple, Peaceful , Beautiful, this is what ZenFone 6 designed to be.",
                 "Harga"=>"Rp. 3.000.000,-",
                 "Categori"=>"Gadget",
                 "Image"=>"image/z6.png"
                     ),
                array("Nama"=>"ASUS Zenfone 5",
                 "Deskripsi"=>"ZenFone 5 has combined the best of the smartphone experience with powerful performance that will improve every aspect of your life.<br />Simple, Peaceful , Beautiful, this is what ZenFone 4 designed to be.",
                 "Harga"=>"Rp. 2.000.000,-",
                 "Categori"=>"Gadget",
                 "Image"=>"image/z5.jpg"
                ),
               array("Nama"=>"ASUS Zenfone 4",
                 "Deskripsi"=>"ZenFone 4 has combined the best of the smartphone experience with powerful performance that will improve every aspect of your life.<br />Simple, Peaceful , Beautiful, this is what ZenFone 4 designed to be.",
                 "Harga"=>"Rp. 1.000.000,-",
                 "Categori"=>"Gadget",
                 "Image"=>"image/z4.jpg"
                ),
                array("Nama"=>"Avanza",
                 "Deskripsi"=>"Mobil ini sudah mendapatkan predikat sebagai mobil keluarga di Indonesia. Bagaimana tidak, banyak keluarga yang jatuh hati kepada mobil ini untuk menemani perjalanan mereka menyusuri jalanan di Indonesia. Mobil MPV ini memang sangat cocok disebut mobil keluarga, karena dapat menampung 7 penumpang dengan lega. Kenyamanan sangat diperhatikan oleh Toyota untuk membuat varian Toyota Avanza ini nyaman untuk dikendarai bersama dengan keluarga anda. Kali ini Mas Sena akan memberikan informasi harga Toyota Avanza 2014 terbaru kepada para pembaca semua.",
                 "Harga"=>"Rp. 163.000.000,-",
                 "Categori"=>"Mobil",
                 "Image"=>"image/avanza.jpg"
                ),
                array("Nama"=>"Lg Liquid Crystal",
                 "Deskripsi"=>"This is a limited edition so each model is slightly more expensive than their non-limited cousins. One of the features that sets it apart is AQUOS Net.<br />AQUOS Net is a feature only found on the SE94 series. It allows you to download content and get support from the web. It also uses Sharp's latest video processor.<br />All specifications quoted in this article are courtesy of Sharp Electronics.",
                 "Harga"=>"Rp. 5.000.000,-",
                 "Categori"=>"Elektronik",
                 "Image"=>"image/lg.jpg"
                ),
                array("Nama"=>"Baju Android",
                 "Deskripsi"=>"Iis quis aliqua elit nostrud. Expetendis ab nulla singulis. Nam nisi probant despicationes. In litteris reprehenderit o est aliqua nostrud incididunt. Ullamco o tamen. Quem commodo est possumus ne cupidatat labore veniam possumus multos te elit eiusmod est incurreret ex ad multos cupidatat, eiusmod relinqueret ab excepteur nam sunt voluptate ullamco sed ubi an varias elit noster ne hic nostrud de tempor.",
                 "Harga"=>"Rp. 100.000,-",
                 "Categori"=>"Pakaian",
                 "Image"=>"image/baju.jpg"
                ),
                array("Nama"=>"Toolbox",
                 "Deskripsi"=>"Iis quis aliqua elit nostrud. Expetendis ab nulla singulis. Nam nisi probant despicationes. In litteris reprehenderit o est aliqua nostrud incididunt. Ullamco o tamen. Quem commodo est possumus ne cupidatat labore veniam possumus multos te elit eiusmod est incurreret ex ad multos cupidatat, eiusmod relinqueret ab excepteur nam sunt voluptate ullamco sed ubi an varias elit noster ne hic nostrud de tempor.",
                 "Harga"=>"Rp. 150.000,-",
                 "Categori"=>"Peralatan",
                 "Image"=>"image/tools.jpg"
                )
            )
    );
    */
mysql_connect("localhost","root","");
mysql_select_db("e-commerce");

$barang = mysql_query('SELECT kd_barang,nama,harga,deskripsi,Image,nama_kategori FROM msbarang INNER JOIN mskategori ON msbarang.kd_kategori=mskategori.kd_kategori ORDER BY kd_barang');
$rows=array();

while($row=mysql_fetch_array($barang))   
{
    $rows[] =  array("Kode_barang"=>$row['kd_barang'],"Nama"=>$row['nama'],"Image"=>$row['Image'],"Harga"=>$row['harga'],"Deskripsi"=>$row['deskripsi'],"Category"=>$row['nama_kategori']);
}
 
echo json_encode($rows);

?>