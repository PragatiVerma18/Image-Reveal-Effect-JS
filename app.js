const val=document.querySelector(".image");
document.querySelector('.item1').addEventListener('mouseover', onHover);

function onHover(e)
{
val.style.backgroundImage= "url('https://cdn.dribbble.com/users/674925/screenshots/6561893/thinking_2x.png')";
e.target.style.backgroundColor="#17A589";
}

document.querySelector('.item2').addEventListener('mouseover', onHover1);

function onHover1(e)
{
val.style.backgroundImage= "url('https://cdn.dribbble.com/users/674925/screenshots/5641807/doctor_2x.jpg')";
e.target.style.backgroundColor="#13F070";
}

document.querySelector('.item3').addEventListener('mouseover', onHover2);

function onHover2(e)
{
val.style.backgroundImage= "url('https://cdn.dribbble.com/users/674925/screenshots/6571487/sport_2x.jpg')";
e.target.style.backgroundColor="#8BF1F6";
}

document.querySelector('.item4').addEventListener('mouseover', onHover3);

function onHover3(e)
{
val.style.backgroundImage= "url('https://cdn.dribbble.com/users/674925/screenshots/6603438/s-work2_2x.jpg')";
e.target.style.backgroundColor="#D9A7EC";
}

document.querySelector('.item5').addEventListener('mouseover', onHover4);

function onHover4(e)
{
val.style.backgroundImage= "url('https://cdn.dribbble.com/users/674925/screenshots/6582949/search_2x.jpg')";
e.target.style.backgroundColor="#EFB07C";
}


document.querySelector('.item1').addEventListener('mouseout', noHover);
document.querySelector('.item2').addEventListener('mouseout', noHover);
document.querySelector('.item3').addEventListener('mouseout', noHover);
document.querySelector('.item4').addEventListener('mouseout', noHover);
document.querySelector('.item5').addEventListener('mouseout', noHover);

function noHover(e)
{
val.style.backgroundImage= "url('1.jpg')";
e.target.style.backgroundColor="white";
}
