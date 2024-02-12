document.getElementById('btn-ellipse').addEventListener('click', function () {
    const ellipseA = document.getElementById('ellipse-a').value;
    const intEllipseA = parseFloat(ellipseA);
    const ellipseB = document.getElementById('ellipse-b').value;
    const intEllipseB = parseFloat(ellipseB);
    const totalArea = 3.1416 * intEllipseA * intEllipseB;
    const area =parseFloat(totalArea.toFixed(2));
    
    if (isNaN(area)) {
        const errorText = document.getElementById('error6');
        errorText.style.display = 'block'
        const areaResult = document.getElementById('areaResult6');
        areaResult.innerText = '';
        errorText.innerText = 'Please put a Number'
    }
    if (!isNaN(area)) {
        const errorText = document.getElementById('error6');
        errorText.style.display = 'none';
        const areaResult = document.getElementById('areaResult6');
        areaResult.innerText = area;
    }
})