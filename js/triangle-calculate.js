function triangleCalculate() {
    const base = document.getElementById('base').value;
    const intBase = parseFloat(base);
    const height = document.getElementById('height').value;
    const intHeight = parseFloat(height);
    const area = 0.5 * intBase * intHeight;
    console.log(area);
    if (isNaN(area)) {
        const errorText = document.getElementById('error');
        errorText.style.display='block'
        errorText.innerText = 'Please put a Number'
    }
    if (!isNaN(area)) {
        const errorText = document.getElementById('error');
        errorText.style.display='none';
        const areaResult = document.getElementById('areaResult');
        areaResult.innerText = area;
    }

}