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
    location.reload();
    // Save it!
     }
        } 
function rupiah(angka)
{
    var hrg = angka.toString();
    var rupiah="";
    while(hrg.length>3)
    {
    rupiah = rupiah + "." + hrg.substr(hrg.length-3,hrg.length);
     hrg = hrg.substr(0,hrg.length-3);
    }
    return "Rp. "+hrg+rupiah;
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
        var a = $("#display-produk-list").clone().removeAttr("id").removeClass('template');
        var total =Number(0);
        var count = 0;
        var index=-1;
        var id=0;
        var jumlah_barang =[];
        var nama=[];
        var kd=[];
        var img=[];
        var harga=[];
        for(var j=0;j<localStorage.clickcount;j++) {
            var pjg=parseInt(data.length);
            for (var i = 0; i < pjg; i++) {
                var kode = localStorage.getItem(j);
                if (kode == data[i].Kode_barang)
                {
                    for(var k = 0 ; k < count ; k++)
                    if(kd[k]==kode)
                    index=k;
                    
                    if(index==-1){
                    jumlah_barang[count]=1;
                    nama[count]=data[i].Nama;
                    kd[count]=kode;
                    harga[count]=data[i].Harga;
                    img[count]=data[i].Image;
                    count+=1;}
                    else
                    {jumlah_barang[index]+=1;index=-1}
                    total=total+Number(data[i].Harga);
                }
            }
        }
        
        for(var i = 0 ; i < count ; i++){
                var sub_total = Number(jumlah_barang[i])*Number(harga[i]);
                $("#display-content").append(a);//krn di dalem for jd clone an dr k nya baru lagi
                $(".display-name-produk",a).html("<img src=\""+img[i]+"\"width=\"50px\">");
                $("#nama", a).text(nama[i]);//,a[i] untuk menunjukkan bahwa yg keganti adalah class nama pas a ke i
                $("#nama",a).attr("class","nama("+nama[i]+")");
                $(".Jumlah",a).text(jumlah_barang[i]+" Items ");
                $(".subtotal",a).text(rupiah(sub_total));
               //-------Fungsi Merubah Angka menjadi rupiah-------------- 
                $("#harga",a).text(rupiah(harga[i]));
                //--------------------------------------------------------
                a=$(a).clone();
        }
        var kodebarang=JSON.stringify(kd);
        var jumlah=JSON.stringify(jumlah_barang);
        $(".grandtotal").text(rupiah(total));
        $(".total").text("Total "+localStorage.clickcount + " Items");
        $("#kode").attr("value",kodebarang).removeAttr("id");
        $("#jumlah").attr("value",jumlah).removeAttr("id");
        $("#banyakdata").attr("value",count).removeAttr("id");
    });
    
});