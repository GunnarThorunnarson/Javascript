//Verk2

/*
  1. ECMAScript er grunnur fyrir mörg scipt tungumál t.d. javascript.    
  2. Þýðandinn lagar litlar villur sem þú gerir og reynir að giska og laga forritið þitt.
  3. þau gegna bæði sama hlutverki en tvöfold er betri utan um strengi.
  4.Null: Null er þegar value er tóm eða er ekki til. Null þýðir í rauninni ekki neitt.
    Undefined: Undefined þýðir að það er búið að lýsa breytu en gildi hennar hefur ekki verið skilgreint.
  5.==: Þetta er notað til að til að athuga ef eitthvað er jafnt einhverju öðru, þetta er ekki strict.
    ===: Þetta er notað til að til að athuga hvort eitthvað sé jafnt við eitthvað annað. Þetta er strict.
  6. var er eins og Global breytur en let eins og local.
  8. "use strict" setur forritið í strict mode og þá geturu t.d. ekki notað undecaled variables. Þetta kom með ECMAScript  version 5.
  9. Javascript er með host sem endurraðar kóðanum í þýðandanum sem setur breytur og föll efst.
  10. svarið er 8 útaf þegar aðgerð er skilgreind tvisvar þá overrunnar seinna gildið yfir fyrra.
  11. þýðandinn hjálpar þér og setur sjálfkrafa var fyrir framan en í staðinn tekur það auka tíma og getur hægt á síðunni.
  12. þetta er einnnota function sem birtir "hello World" en það er ekki hægt að nota einnota function aftur því það er ekki með neitt nafn.
  13. JavaScript notar tvö scopes: global eða local. Breytu sem er notuð utan function er global breyta og gildi hennar er aðgengilegt og breytanlegt í gegnum forritið. Breytu sem er notuð innan function er local og eru bara aðgengilegar í kóða sem er í sama function.
  14. "call stack" er viðbót sem þýðandinn notar og skipurleggur allar aðferðir og heldur utan um hvaða aðferð er að keyra.
*/
  

//6 kóði.

if(true){
    var x = 5;//get ennþá kallað á þessa breytu
console.log(x);//útkoma = 5

//prófum núna let

if(true){
    let x = 5;//get ekki kallað á þessa breytu fyrir utan  if setninguna
}
console.log(x);//undefined

    
    
    
//7.
    
//standard function
function a(){}

//breyta sem er function
var b = function(){}

//arrow function
//tekur tölurnar í hornklofanum og margfaldar með 2
[1, 2, 3].map(x => x * 2);
    