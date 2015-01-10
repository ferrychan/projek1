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
    document.getElementById("TotalItems").innerHTML =  localStorage.clickcount + " Items";
    
    
    var cat = window.location.href;
    var split = cat.split("=");//split[1] akan mendapatkan hasil dari idnya
    
    $.getJSON("product.php",function(data){
        
        var a = $("#produk-list").clone().removeClass('template');
        var pjg=parseInt(data.length);
        for(var i=0;i<pjg;i++)
        {
            if(data[i].Category==split[1])
               {
                    $("#content").append(a);//kalau bner baru di masukin
                    $("#link",a).attr("href","product.html?id="+i);
                    $(".buy",a).attr("klik",data[i].Kode_barang); 
                    $(".buy",a).click(function(){
                        clickCounter($(this).attr("klik"));
                    }); 
                    $(".nama",a).text(data[i].Nama);//,a[i] untuk menunjukkan bahwa yg keganti adalah class nama pas a ke i
                    var harga = data[i].Harga;
                    var rupiah="";
                    while(harga.length>3)
                    {
                    rupiah=rupiah+"."+harga.substr(harga.length-3,harga.length);
                    harga = harga.substr(0,harga.length-3);
                    }
                    rupiah = "Rp. "+harga+rupiah;
                    $(".harga",a).text(rupiah);
                    }
            a=$(a).clone();//krn tiap perulangan harus di clone terus biar nga ada yg kosong
        }
    });
});