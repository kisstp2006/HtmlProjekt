//A gyors írás játéka (JS kód)
//#region 
//Audió betöltése
const acceptedaudio = new Audio('accepted.wav');
const deniedaudio = new Audio('denied.wav');


const szavak = [
    "apple", "banana", "orange", "grape", "lemon", "cherry", "peach", "pear", "plum", "mango", 
    "watermelon", "melon", "strawberry", "raspberry", "blueberry", "kiwi", "pineapple", "papaya", 
    "coconut", "lime", "avocado", "tomato", "cucumber", "carrot", "potato", "lettuce", "spinach", 
    "onion", "garlic", "broccoli", "cabbage", "pepper", "corn", "peas", "bean", "mushroom", "zucchini", 
    "eggplant", "radish", "celery", "parsley", "basil", "oregano", "thyme", "rosemary", "mint", 
    "ginger", "chili", "rice", "pasta", "bread", "butter", "cheese", "milk", "cream", "yogurt", 
    "egg", "chicken", "beef", "pork", "fish", "shrimp", "lobster", "crab", "tuna", "salmon", 
    "trout", "cod", "octopus", "squid", "mussels", "clams", "scallops", "almond", "cashew", 
    "peanut", "walnut", "hazelnut", "pecan", "pistachio", "pumpkin", "sunflower", "sesame", 
    "flaxseed", "chia", "quinoa", "barley", "wheat", "oats", "rye", "cornmeal", "soy", "tofu", 
    "tempeh", "seitan", "vegan", "vegetarian", "gluten", "protein", "fiber", "vitamin", "mineral", 
    "fat", "calcium", "iron", "zinc", "magnesium", "potassium", "sodium", "sugar", "salt", "pepper", 
    "vinegar", "oil", "honey", "syrup", "chocolate", "candy", "cake", "cookie", "biscuit", "pie", 
    "ice", "cream", "pudding", "jelly", "jam", "sauce", "soup", "stew", "salad", "sandwich", 
    "burger", "pizza", "pasta", "spaghetti", "noodle", "sushi", "taco", "burrito", "wrap", 
    "fries", "chips", "cracker", "toast", "bagel", "croissant", "donut", "waffle", "pancake", 
    "coffee", "tea", "juice", "soda", "water", "wine", "beer", "cocktail", "smoothie"
  ];
var leírtszavak=0;
var helytelenleírtszavak=0;
var elteltido=0;
var lementettidok=0;
var sikeresidok=[];
var atlagidok=0;
const beírtszó = document.getElementById('beírtszó');
const írtszoElem = document.getElementById("írtszo");
const leírtszavaktxt = document.getElementById("leírtszavak");
const szamlalo = document.getElementById("elteltido");
const atlagido = document.getElementById("atlagido");

// Az oldal betöltésekor kiválasztjuk az 1. szót
window.addEventListener('load', function() {
    Szovalaszt();
});

function Szovalaszt() {
    let randomSzo = szavak[Math.floor(Math.random() * szavak.length)];
    írtszoElem.innerHTML = randomSzo;
}
function AtlagSzam(){
    var osszeg=0;
    for(i=0; i<sikeresidok.length;i++){
        osszeg+=sikeresidok[i];
    }
    atlagidok=osszeg/sikeresidok.length;
    atlagido.innerHTML="Átlag idő:"+atlagidok;
}
// Figyeljük, hogy az input mezőnek változik-e a tartalma
beírtszó.addEventListener('change', function() {
    if (beírtszó.value === írtszoElem.innerHTML) {
        console.log("Helyes szó! Új szó kiválasztása...");
        acceptedaudio.play(); //TODO: Kijavítani azt hogy az audió nem mindig játszódik le
        sikeresidok[lementettidok]=elteltido;
        lementettidok++;
        elteltido=-1;
        beírtszó.value = ''; 
        leírtszavak++;
        leírtszavaktxt.innerHTML="Leírt szavak: "+leírtszavak;
        Szovalaszt();
    } else {
        deniedaudio.play(); //TODO: Kijavítani azt hogy az audió nem mindig játszódik le
        console.log("A megadott érték: " + beírtszó.value);
        helytelenleírtszavak++;
    }
});
//Ez egy olyan script amely 1000 tickenként fut le amely pont 1 mpet teszt ki
const intervalId = setInterval(() => {
    AtlagSzam();
    elteltido ++;
    szamlalo.innerHTML="Eltelt idő: "+ elteltido;
  }, 1000);

//#endregion
// Pénznem konvertáló kód (JS)
//#region 

const hufinput = document.getElementById("Huf");
const euroinput = document.getElementById("Euro");
const atvaltas= 401.35;


hufinput.addEventListener('change', function() {
    HufToEuro();
});
euroinput.addEventListener('change', function() {
    EuroToHuf();
});
function HufToEuro(){
    euroinput.value=hufinput.value/atvaltas;
}
function EuroToHuf(){
    hufinput.value=euroinput.value*atvaltas;
}
//#endregion
//Random szám kitaláló 
//#region 
const segitsegtxt= document.getElementById("segítseg");
const nehezmodchxbox = document.getElementById("nehézmód");
const mininput= document.getElementById("min");
const maxinput= document.getElementById("max");
const nehezmodecheckbox = document.getElementById("nehézmód");
const tippinput= document.getElementById("tipp");
var randomszam=0;
var randomszamminimum=0;
var randomszammaximum=0;
window.addEventListener('load', function() {
    MinÉsMaxGen()
    mininput.value=1;
    maxinput.value=100;
    segitsegtxt.innerHTML="Az adott szám "+mininput.value+ "és"+maxinput.value+"között van";
});
mininput.addEventListener('change', function() {
    if(mininput.value>=maxinput.value){
        console.log("minimput nagyobb mint a maxinput");
        mininput.value=1;
        maxinput.value=100;
        deniedaudio.play(); //TODO: Kijavítani azt hogy az audió nem mindig játszódik le
    }
    segitsegtxt.innerHTML="Az adott szám "+mininput.value+ " és "+maxinput.value+" között van";
    MinÉsMaxGen();
});
maxinput.addEventListener('change', function() {
    console.log("maxinput5");
    if(mininput.value>=maxinput.value ){
        console.log("minimput nagyobb mint a maxinput");
        mininput.value=1;
        maxinput.value=100;
        deniedaudio.play(); //TODO: Kijavítani azt hogy az audió nem mindig játszódik le
    }
    segitsegtxt.innerHTML="Az adott szám "+mininput.value+ " és "+maxinput.value+" között van";
    MinÉsMaxGen();
});

function MinÉsMaxGen(){
    tippinput.value=null;
    if(nehezmodecheckbox.checked){
        console.log("Nehéz mód szám generálása");
        randomszam = Math.floor(Math.random() * (149 - 0 + 1) ) + 0;
        console.log("A szam:"+ randomszam );
    }
    else{
        console.log("Szám generálása");
        randomszam = Math.floor(Math.random() * (149 - 0 + 1) ) + 0;
        console.log("A szam:"+ randomszam );
    }
}
tippinput.addEventListener('change', function() {
    if(tippinput.value==randomszam){
        console.log("Helyes szam");
        MinÉsMaxGen(); 
    }
    else{
        MinÉsMaxGen();
        console.log("Helytelen szam");
    }
});

nehezmodecheckbox.addEventListener('change', function() {
    mininput.disabled= nehezmodchxbox.checked;
    maxinput.disabled= nehezmodchxbox.checked;
});
//#endregion
//3. gomb nyomás számláló 
//#region 
let szamok = 0;

function nyomasszamlalo() {
    szamok++;
  document.getElementById("szamol").innerHTML = "Klikkek száma: " + szamok;
}
//#endregion