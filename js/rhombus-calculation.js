document.getElementById('btn-rhombus').addEventListener('click', function () {
    const rhombusD1 = document.getElementById('rhombus-d1').value;
    const intRhombusD1 = parseFloat(rhombusD1);
    const rhombusD2 = document.getElementById('rhombus-d2').value;
    const intRhombusD2 = parseFloat(rhombusD2);
    const area = 0.5 * intRhombusD1 * intRhombusD2;
    console.log(area);
    if (isNaN(area)) {
        const errorText = document.getElementById('error4');
        errorText.style.display = 'block'
        const areaResult = document.getElementById('areaResult4');
        areaResult.innerText = '';
        errorText.innerText = 'Please put a Number'
    }
    if (!isNaN(area)) {
        const errorText = document.getElementById('error4');
        errorText.style.display = 'none';
        const areaResult = document.getElementById('areaResult4');
        areaResult.innerText = area;
    }
})