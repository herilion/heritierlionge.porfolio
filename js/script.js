// typing animation
var typed = new Typed('.typing', {
    strings: ["", "SoftWare Engineer", "FullStack web developper", "From Goma, DRC"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

// management aside
const allSection=document.querySelectorAll(".section");
const totalSection=allSection.length;
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length;
    
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', (event) => {
        event.preventDefault();
        for(let j=0;j<totalNavList;j++){
            navList[j].querySelector("a").classList.remove("active");
        }
        a.classList.add("active");
        showSection(a.getAttribute("href"));
    });
}
const showSection = (element) => {
    
    // for(let i=0; i<totalSection; i++){
    //     allSection[i].classList.remove("active");
    // }
    // const target = element.getAttribute("href").split("#")[1];
    // document.querySelector("#" + target).classList.add("active");
}



