function clickCounter(id) {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } 
       document.getElementById("TotalItems").innerHTML =  localStorage.clickcount + " Items";
    
    localStorage.setItem(localStorage.clickcount-1,id);
 
}
function reset() {
     if (confirm('Anda Yakin ?')) {
     localStorage.clear();
     localStorage.clickcount=0;
     document.getElementById("TotalItems").innerHTML =  localStorage.clickcount + " Items";
    // Save it!
     } else { 
    // Do nothing!
     }
        } 
      

$(document).ready(function(){
    /*
$("body").fadeOut();
$("body").fadeIn();
    
    $.get("readme.txt",function(data){ // AJAX 
    $("body").text(data);
    });
    $.getJSON("data.json",function(data){
    $("body").append("<div>"+data.Nama+"</div>");//append buat nambah data
    $("body").append("<div>"+data.Lokasi+"</div>");                            //JSON
    $("body").append("<div>"+data.Telepon+"</div>");
    });
    */  
    if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
    }
    localStorage.clickcount-=1;
    document.getElementById("TotalItems").innerHTML =  localStorage.clickcount + " Items";
   
    $.getJSON("data.php",function(data){
    $("#sayhi").text("Welcome "+data.Nama);//append buat nambah data
        var ctr=parseInt(data.Category.length);
        var k = $("#category").clone().removeClass('template');
        for(var i=0;i<ctr;i++)
        {
            $("#kategori").append(k);//krn di dalem for jd clone an dr k nya baru lagi
            $("#links",k).attr("href","filter.html?cat="+data.Category[i].Nama);
            $("#isi",k).text(data.Category[i].Nama);
            k=$(k).clone();
        }
    });
    
    $.getJSON("product.php",function(data){
    var pjg=parseInt(data.length);
    var kode ;
    var a = $("#produk-list").clone().removeClass('template');
        for(var i=0;i<pjg;i++)
        {
            $("#content").append(a);//krn di dalem for jd clone an dr k nya baru lagi
            $("#link",a).attr("href","product.html?id="+i);
            $(".buy",a).attr("klik",data[i].Kode_barang); 
            $(".buy",a).click(function(){
                clickCounter($(this).attr("klik"));
              }); 
            $(".nama",a).text(data[i].Nama);//,a[i] untuk menunjukkan bahwa yg keganti adalah class nama pas a ke i
           //-------Fungsi Merubah Angka menjadi rupiah-------------- 
            var harga = data[i].Harga;
            var rupiah="";
            while(harga.length>3)
            {
            rupiah=rupiah+"."+harga.substr(harga.length-3,harga.length);
            harga = harga.substr(0,harga.length-3);
            }
            rupiah = "Rp. "+harga+rupiah;
            $(".harga",a).text(rupiah);
            //--------------------------------------------------------
            a=$(a).clone();
        }
    });
});