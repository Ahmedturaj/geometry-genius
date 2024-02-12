document.getElementById('btn-calculate').addEventListener('click', function () {
    const rectangleWidth = document.getElementById('width');
    const rectangleLength = document.getElementById('length');
    const errorText = document.getElementById('error2');
    const areaResult = document.getElementById('areaResult2');
   commonMultiply(rectangleWidth, rectangleLength, errorText, areaResult);
})

function commonMultiply(p1, p2, p3, p4) {
    const item1 = parseFloat(p1.value);
    const item2 = parseFloat(p2.value);
    const totalArea = item1 * item2;
    const area = parseFloat(totalArea.toFixed(2));
    if (isNaN(area)) {
       return ( p3.style.display = 'block',
       p4.innerText = '',
       p3.innerText = 'Please put a Number');
    }
    if (!isNaN(area)) {
        return(p3.style.display = 'none',
        p4.innerText = area);
    }
}
