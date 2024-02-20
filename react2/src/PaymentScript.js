const pay = document.getElementById('pay');
const balance = document.getElementById('balance');


pay.addEventListener('click', (e)=>
{balance.innerHTML -= balance.innerHTML>=5? 5 : 0;});