// typing animation
var typed = new Typed('.typing', {
    strings: ["", "SoftWare Engineer", "FullStack web developper", "From Goma, DRC"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

// aside
const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', () => {
        for(let j=0;j<totalNavList;j++){
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add('active');
    })
};
