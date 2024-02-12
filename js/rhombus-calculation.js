document.getElementById('btn-rhombus').addEventListener('click', function(){
    multiplyByHalf('rhombus-d1', 'rhombus-d2', 'error4', 'areaResult4');
})

// {
//     const rhombusD1 = document.getElementById('rhombus-d1').value;
//     const intRhombusD1 = parseFloat(rhombusD1);
//     const rhombusD2 = document.getElementById('rhombus-d2').value;
//     const intRhombusD2 = parseFloat(rhombusD2);
//     const totalArea = 0.5 * intRhombusD1 * intRhombusD2;
//     const area =parseFloat(totalArea.toFixed(2));
//     console.log(area);
//     if (isNaN(area)) {
//         const errorText = document.getElementById('error4');
//         errorText.style.display = 'block'
//         const areaResult = document.getElementById('C);
//         areaResult.innerText = '';
//         errorText.innerText = 'Please put a Number'
//     }
//     if (!isNaN(area)) {
//         const errorText = document.getElementById('error4');
//         errorText.style.display = 'none';
//         const areaResult = document.getElementById('areaResult4');
//         areaResult.innerText = area;
//     }
// })

function multiplyByHalf(p1, p2, p3, p4) {
    const item1 = document.getElementById(p1);
    const intItem1 = parseFloat(item1.value)
    const item2 = document.getElementById(p2);
    const intItem2 = parseFloat(item2.value)
    const item3 = document.getElementById(p3);
    const item4 = document.getElementById(p4);
    const totalArea = 0.5 * intItem1 * intItem2;
    const area = parseFloat(totalArea.toFixed(2));
    if (isNaN(area)) {
        return (item3.style.display = 'block',
            item4.innerText = '',
            item3.innerText = 'Please put a Number');
    }
    if (!isNaN(area)) {
        return (item3.style.display = 'none',
            item4.innerText = area);
    }
}