var laDivision = document.getElementById("testDom");

laDivision.innerHTML = "Hello World";

width = getComputedStyle(testDom).width;
height = getComputedStyle(testDom).height;
console.log(width, height);




function testClic() {
    testDom.style.backgroundColor = 'grey';
    testDom.style.width = '500px';
    testDom.style.height = '500px';
}

function testOver() {
    testDom.style.backgroundColor = 'pink';
    testDom.style.width = '250px';
    testDom.style.height = '250px';

    // return false;


}