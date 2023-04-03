// typing animation
var typed = new Typed('.typing', {
    strings: ["", "SoftWare Engineer", "FullStack web developper", "From Goma, DRC"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});
// aside

// const nav = document.querySelector('.nav'),
//     navList = nav.querySelectorAll('li'),
//     totalNavList = navList.length;
// for (let i = 0; i < totalNavList; i++) {
//     const a = navList[i].querySelector('a');
//     a.addEventListener('click', () => {
//         this.classList.add('active');
//     })
// }
const hcol=document.querySelector('.nav li');
hcol.addEventListerner('click',()=>{
    hcol.style.color='red';
    alert('Heritier LIONGE')
});