
//БИРИНЧИ ТАПШЫРМА 1.1
let myMessage = "Hello World, This is my fist message";
document.write(myMessage + "<br>");


//ЭКИНЧИ ТАПШЫРМА 1.2

let text = "Саламатсызбы , Кандайсыз";
document.write(`<p>${text}</p>`);
text = "Саламатчылык, Жакшы , Рахмат";
document.write(`<p>${text}</p>`)

//УЧУНЧУ ТАПШЫРМА 1.3
let myName = "Omurbek";
let myEmail = "omurbek.melisbekov.kk@gmail.com";
document.write("My name is: " + myName + "<br>" + "My email address: " + myEmail);

//ТОРТУНЧУ ТАПШЫРМА 1.4


let souvenir = prompt("Канча сувенир алдыныз ?");
let unnesseryThings = prompt("Канча безделушка алдыныз ?");

const TOTAL_SUM = souvenir * 75 + unnesseryThings * 112;

document.write(`<h2>Баардык салмагы : ${TOTAL_SUM} гр</h2>`);


//БЕШИНЧИ ТАПШЫРМА 1.4

let num1 = prompt("Сан жазыныз");
let num2 = prompt("Экинчи санды жазыныз");

document.write(`<h3>Сумма a и b: ${Number(num1) + Number(num2)}</h3>`);
document.write(`<h3>Разница между: ${Number(num1) - Number(num2)}</h3>`);
document.write(`<h3>Произведение a и b: ${Number(num1) * Number(num2)}</h3>`);
document.write(`<h3>Частное от деления a на b: ${Number(num1) / Number(num2)}</h3>`);
document.write(`<h3>Остаток от деления a на b: ${Number(num1) % Number(num2)}</h3>`);
document.write(`<h3>Результат возведения числа a в степень b: ${Number(num1) ** Number(num2)}</h3>`);
