
document.getElementById('textedit').innerText = 'AMAZON PRODUCTS ITEMS';
document.getElementById('textedit').style.color = 'green';
document.getElementById('imgchnge').src = '../src/assets/tops1.webp';
document.write('<h1>JavaScript Concepts:</h1>');
console.log('h1');
document.write('Hai Myscript I Feel Happy Learning');

document.write('<p>Hai and Hellow world,WELCOME 2024</p>');
document.write(Date());
document.write('<p>Have a nice day</p>');
val1 = 10;
val2 = 15;
result = 0;
function ArthematicOperator() {
    
    result = val1 + val2;
    console.log('adition result', 'result');
    result = val1 - val2;
    console.log('subration result', 'result');
    result = val1 * val2;
    console.log('multiplication result', 'result');
    result = val1 / val2;
    console.log('divition result', 'result');
}
function ArthematicOperator (){
    document.getElementById('btn').style.color='blue';
}
function changeColor() {
    document.getElementById('btn').style.color = 'red';
}
function changeImage() {
    document.getElementById('imgchnge').src = '../src/assets/tops2.webp';
}
function changeImageMouseout() {
    document.getElementById('imgchnge').src = '../src/assets/tops1.webp';
}
function changeColor() {
    document.getElementById('btn').style.backgroundColor = 'deeppink';
}
