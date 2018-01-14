var products = ["Sími", "Ananas", "Banani", "Mamma", "Afi"];
var i = 0;
var thing = "veitekki",
    thang = "heh";
for (i = 0; i < products.length; i++) {
    console.log("loop ", i);
    thing = "veitekki" + i;
    thang = products[i];
    var id = document.getElementById(thing);
    id.innerHTML = thang;
