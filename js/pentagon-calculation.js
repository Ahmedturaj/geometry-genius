document.getElementById('btn-pentagon').addEventListener('click', function(){
    multiplyByHalf('pentagon-p', 'pentagon-b', 'error5','areaResult5');
});
 
//   {  const pentagonP = document.getElementById('pentagon-p').value;
//     const intPentagonP = parseFloat(pentagonP);
//     const pentagonB = document.getElementById('pentagon-b').value;
//     const intPentagonB = parseFloat(pentagonB);
//     const totalArea = 0.5 * intPentagonP * intPentagonB;
//     const area = parseFloat(totalArea.toFixed(2));
//     if (isNaN(area)) {
//         const errorText = document.getElementById('error5');
//         errorText.style.display = 'block'
//         const areaResult = document.getElementById('areaResult5');
//         areaResult.innerText = '';
//         errorText.innerText = 'Please put a Number'
//     }
//     if (!isNaN(area)) {
//         const errorText = document.getElementById('error5');
//         errorText.style.display = 'none';
//         const areaResult = document.getElementById('areaResult5');
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