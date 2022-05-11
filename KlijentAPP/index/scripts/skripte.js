function Validacija() {
    let vrstaOglasa = document.getElementById("vrstaoglasa").value;
    let opisOglasa = document.getElementById("opisoglasa").value.length;
    let Cena=document.getElementById("cena").value
    let o1=document.getElementById("oznaka1").value
    let patern="/\S+@\S+\.\S+/"
    let e1=document.getElementById("unosmail1").value
    let e2=document.getElementById("unosmail2").value
    let e3=document.getElementById("unosmail3").value
    let tipE1=document.getElementById("tipmaila1").value
    let tipE2=document.getElementById("tipmaila2").value
    let tipE3=document.getElementById("tipmaila3").value
    if(e1.length==0 || tipE1==0){
        alert("Morate uneti email i izabrati tip za prvi email.")
        return false
    }
    if(!(patern.test(e1))){
        alert("Niste uneli odgovarajući prvi email.")
        return false
    }
    if(e1.length>0 && e2.length==0 && tipE2==0){
        alert("Morate uneti email i izabrati tip za drugi email.")
        return false
    }
    if(!(patern.test(e2))){
        alert("Niste uneli odgovarajući treći email.")
        return false
    }
    if(e1.length>0 && e2.length>0 && e3.length>0 && tipE3==0){
        alert("Morate uneti email i izabrati tip za treći email.")
        return false
    }
    if(!(patern.test(e3))){
        alert("Niste uneli odgovarajući treći email.")
        return false
    }
}
$(document).ready(function(){
    $("#mail2").hide()
    $("#mail3").hide()
    $("#obrisimail2").hide()
    $("#obrisimail3").hide()
    $(".form-control.oznaka").hide()
    $(".obrisi").hide()
    $(".dodaj").hide()
});
$("#dodajmail2").click(function(){
    $("#mail2").show()
    $("#dodajmail2").hide()
    $("#obrisimail2").show()
});
$("#dodajmail3").click(function(){
    $("#mail3").show()
    $("#dodajmail3").hide()
    $("#obrisimail2").hide()
    $("#obrisimail3").show()
});
$("#obrisimail2").click(function(){
    $("#mail2").hide()
    $("#dodajmail2").show()
    $("#obrisimail2").hide()
    $("#unosmail2").val("")
    $("#tipmaila2").val("0").change();
});
$("#obrisimail3").click(function(){
    $("#mail3").hide()
    $("#dodajmail3").show()
    $("#obrisimail2").show()
    $("#obrisimail3").hide()
    $("#unosmail3").val("")
    $("#tipmaila3").val("0").change();
});
$("#dodajoznaku2").click(function(){
    $("#dodajoznaku2").hide()
    $("#oznaka2").show()
    $("#dodajoznaku3").show()
    $("#obrisioznaku2").show()
})
$("#dodajoznaku3").click(function(){
    $("#dodajoznaku3").hide()
    $("#oznaka3").show()
    $("#dodajoznaku4").show()
    $("#obrisioznaku3").show()
    $("#obrisioznaku2").hide()
})
$("#dodajoznaku4").click(function(){
    $("#dodajoznaku4").hide()
    $("#oznaka4").show()
    $("#dodajoznaku5").show()
    $("#obrisioznaku4").show()
    $("#obrisioznaku3").hide()
})
$("#dodajoznaku5").click(function(){
    $("#dodajoznaku5").hide()
    $("#oznaka5").show()
    $("#dodajoznaku6").show()
    $("#obrisioznaku5").show()
    $("#obrisioznaku4").hide()
})
$("#dodajoznaku6").click(function(){
    $("#dodajoznaku6").hide()
    $("#oznaka6").show()
    $("#obrisioznaku6").show()
    $("#obrisioznaku5").hide()
})
$("#obrisioznaku2").click(function(){
    $("#oznaka2").hide()
    $("#oznaka2").val("")
    $("#dodajoznaku3").hide()
    $("#obrisioznaku2").hide()
    $("#dodajoznaku2").show()
})
$("#obrisioznaku3").click(function(){
    $("#oznaka3").hide()
    $("#oznaka3").val("")
    $("#dodajoznaku4").hide()
    $("#obrisioznaku3").hide()
    $("#dodajoznaku3").show()
    $("#obrisioznaku2").show()
})
$("#obrisioznaku4").click(function(){
    $("#oznaka4").hide()
    $("#oznaka4").val("")
    $("#dodajoznaku5").hide()
    $("#obrisioznaku4").hide()
    $("#dodajoznaku4").show()
    $("#obrisioznaku3").show()
})
$("#obrisioznaku5").click(function(){
    $("#oznaka5").hide()
    $("#oznaka5").val("")
    $("#dodajoznaku6").hide()
    $("#obrisioznaku5").hide()
    $("#dodajoznaku5").show()
    $("#obrisioznaku4").show()
})
$("#obrisioznaku6").click(function(){
    $("#oznaka6").hide()
    $("#oznaka6").val("")
    $("#obrisioznaku6").hide()
    $("#dodajoznaku6").show()
    $("#obrisioznaku5").show()
})