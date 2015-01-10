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
  $.getJSON("data.php",function(data){
   //----------------------------------------------------------------------------------
    document.getElementById("TotalItems").innerHTML =  localStorage.clickcount + " Items";   
   //----------------------------------------------------------------------------------  
      $("#sayhi").text("Welcome "+data.Nama);//append buat nambah data
        var ctr=parseInt(data.Category.length);
        var k = $("#category    ").clone().removeClass('template');
        for(var i=0;i<ctr;i++)
        {
            $("#kategori").append(k);//krn di dalem for jd clone an dr k nya baru lagi
            $("#links",k).attr("href","filter.html?cat="+data.Category[i].Nama);
            $("#isi",k).text(data.Category[i].Nama);
            k=$(k).clone();
        }
    });
    
    var bah = window.location.href;
    var split = bah.split("=");//split[1] akan mendapatkan hasil dari idnya
    
    $.getJSON("product.php",function(data){
    $("#judul").text(data[split[1]].Nama);
  //---------------------------------------------------------------------------------
            var harga = data[split[1]].Harga;
            var rupiah="";
            while(harga.length>3)
            {
            rupiah=rupiah+"."+harga.substr(harga.length-3,harga.length);
            harga = harga.substr(0,harga.length-3);
            }
            rupiah = "Rp. "+harga+rupiah;
  //---------------------------------------------------------------------------------  
    $("#price").text("Harga : "+rupiah);   
    $("#gambar").html("<img src=\""+data[split[1]].Image+"\" width=\"500px\">");
    $("#deskripsi").html(data[split[1]].Deskripsi);
    });
});