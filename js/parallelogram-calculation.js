document.getElementById('btn-parallelogram').addEventListener('click',function(){
    const parallelogramBase= document.getElementById('parallelogram-base').value;
    const parallelogramBaseInt = parseFloat(parallelogramBase);
    const parallelogramHeight= document.getElementById('parallelogram-height').value;
    const parallelogramHeightInt = parseFloat(parallelogramHeight);
    const area = parallelogramBaseInt * parallelogramHeightInt;
    if(isNaN(area)){
        const errorText = document.getElementById('error3');
        errorText.style.display='block'
        const areaResult = document.getElementById('areaResult3');
        areaResult.innerText = '';
        errorText.innerText = 'Please put a Number'
    }
    if(!isNaN(area)){
        const errorText = document.getElementById('error3');
        errorText.style.display='none';
        const areaResult = document.getElementById('areaResult3');
        areaResult.innerText = area;
    }
});