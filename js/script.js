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
const act=document.querySelector('.act');
act.addEventListener('click',()=>{
    act.style.color='red';
    alert('attention')
})