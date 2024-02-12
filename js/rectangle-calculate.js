document.getElementById('btn-calculate').addEventListener('click',function(){
    const rectangleWidth= document.getElementById('width').value;
    const rectangleWidthInt = parseFloat(rectangleWidth);
    const rectangleLength = document.getElementById('length').value;
    const rectangleLengthInt = parseFloat(rectangleLength);
    const area = rectangleWidthInt * rectangleLengthInt;
    if(isNaN(area)){
        const errorText = document.getElementById('error2');
        errorText.style.display='block'
        const areaResult = document.getElementById('areaResult2');
        areaResult.innerText = '';
        errorText.innerText = 'Please put a Number'
    }
    if(!isNaN(area)){
        const errorText = document.getElementById('error2');
        errorText.style.display='none';
        const areaResult = document.getElementById('areaResult2');
        areaResult.innerText = area;
    }
})