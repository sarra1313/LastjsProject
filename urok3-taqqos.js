// Таккослаш (сравнение) операторлар: =  ==  ===   >  <  <=  >=  !=   !==   &&

// = -- битта тенглик, берилган белгига юклатилади(н-р, а=4), факат узгарувчиларга киймат
//  бериш учун ишлатилинади, нималар дирларни таккослаш учун ишлатиш мумкин эмас
// ====================================================================================


// == -- это 2ое значение -- 
let a = 2;
let b = "2";
//  теперь пишем условие: если а равно b , это пишется (через if) так--
if ( a == b ) {
    console.log("ikkalasi teng");
}
//   теперь пишем часть else

else{
    console.log("teng emas");
}
//  теперь проверяем в терминале , где пишем название нашего файла urok3-..., выйдет
//  результат-- "иккаласи тенг", теперь поставим в згачение b чмсло 22, то получим,
//  "иккаласи тенг эмас, выглядит так:"

let a1 = 2;
let b1 = "22";
if ( a1 == b1 ) {
    console.log("ikkalasi teng");
}
else{
    console.log("teng emas");
}
// ....................................................................................

// === -- это 3-ье значение  --, 3раза равно, если при "==" было спавнение в значении,
// те по цифрам равны, то здесь происходит сравнение в одинаковым типом 
let a3 = 3;
let b3 = "3";
// проверяем 3мя равно. здесь сравнивается типом, те смотрит 1ое значение является number, 
// а 2ой тип string,значит это два разных типа и терминал нам выдаст ошибку, не проверяя 
// их значения
if ( a3 === b3 ) {
    console.log("ikkalasi teng");
}
else{
    console.log("teng emas");
}
//  при проверки нам выдаст "тенг эмас"
//  проверка может быть не только в цифрах, но могут проверятся и типы, н-р--
let a4 = "test";
let b4 = "test";
if ( a4 == b4 ) {
    console.log("ikkalasi teng");
}
else{
    console.log("teng emas");}
    // то здесь a и b равны и значением и типом, и в терминале получим "иккаласи тенг"
    // здесь может стоять любое значание, любой объект,символы, может стоять NaN, undefind,
    //  в общем всё что мы хотим сравнить
    // ююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююю
    
    // >= numberga утказиб таккослайди, >== numberga утказмасдан таккослайди
// ююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююю

// =    -- узгарувчига киймат юклаш
// ==   -- узгарувчиларни типига карамасдан таккослайди, яъни number типига утказиб
//         таккослайди
// ===  -- бу типи билан биргаликда текширади, агар таккослаётган узгарувчилар турли
//         data типларда булса автоматически хато беради, яъни ишламайди, улар
//         "тенг эмас" деб чикади
// >    -- узгарувчиларни факат ундан катталигини текшириб беради, н-р

// 
// 

// Значение   >  , пример:
let a5 = 12;
let b5 = 21;
// расписываем в if условие сравнения-- и получим ответ "kichik"
if( a5 > b5)
{
    console.log("a b dan katta")
}else{
    console.log("kichik");
}
//  при другом условии получим ответ -- "a b dan katta":
let a6 = 12;
let b6 = 11;
if( a6 > b6)
{
    console.log("a b dan katta")
}else{
    console.log("kichik");}
// ..................................................................................

// Значение < --  тоже что и при знаке >,  только наоборот
// юююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююю

// Значение <=
let a7 = 12;
let b7 = 11;
if( a7 <= b7)
{
    console.log("shart togri")
}else
{
    console.log("shart notogri");}
    //  результат -- "shart notogri", потоиу что а7 не меньше b7 и не равно ему, 
    // если а7  и b7 будет равно 12 то выйдет---"shart togri"
    // если а7 будет в кавычках, те "12", то выйдет --"shart togri", потому что здесь
    //  роль переделывания из типа string в цифру играет знак <
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    
    

// Значение >=
let a8 = 12;
let b8 = "12";
if( a8 >= b8)
{
    console.log("shart togri")
}else
{
    console.log("shart notogri");}
    //  если мы поставим значение а8=11, то получим "shart notogri", потому что 
    // 11 не больше 12ти и не равно
// юююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююю


// Значение !=
let a9 = 12;
let b9 = 12;
if( a9 != b9)
// здесь этот знак != значение означает -- не равно, и тогда если цифры одинаковые,
//  то получим результат "shart notogri"
{
    console.log("shart togri")
}else
{
    console.log("shart notogri");}
    // но если поставим разные цифры, то получим результат "shart togri"--
let c = 12;
let d = 11;
if( c != d)
// здесь этот знак != значение означает -- не равно, и тогда если цифры одинаковые,
//  то получим результат "shart notogri"
{
    console.log("shart togri")
}else
{
    console.log("shart notogri");}
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.

// Значение !==
let c1 = 11;
let d1 = "11";
if( c1 !== d1)
// здесь этот знак !== , проверяет с типом тоже, значение означает -- не равно, и тогда
//  если цифры одинаковые, но по типу они не равны  то получим результат "shart togri",
// так как по условию !== мы проверяем неправильность значений, а правильное значение получаем 
// "shart notogri"
{
    console.log("shart togri")
}else
{
    console.log("shart notogri");}

// ЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮ

// Значение  && -- бу "ва" оперетори деб аталади, яъни бу бир неча операторларни 
// бирга ёзса булади
// && -- бу биринчи келган falsy value (фалси валей)ни кидиради ва шуни чикаради:
// агар кийматлар орасида falsy value (фалси валей) булмаса охирги кийматни олади

// ЮЮЮЮЮЮЮЮЮЮ       ПРИМЕР     ЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮЮ

// а сон берилади, агар у 100га тенг булса энг юкори балл
// агар 85 дан катта 100дан

