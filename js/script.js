// typing animation
var typed = new Typed('.typing', {
    strings: ["", "Software Engineer", "FullStack web developer", "From Goma, DRC"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  
  // management aside ok
  const allSection = document.querySelectorAll(".section");
  const totalSection = allSection.length;
  const nav = document.querySelector(".nav");
  const navList = nav.querySelectorAll('li');
  const totalNavList = navList.length;
  
  for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', (event) => {
      event.preventDefault();
      for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
      }
      for (let j = 0; j < totalNavList;j++) {
        if(navList[j].querySelector("a").classList.contains("active")){
          allSection[j].classList.add("back-section");
        }
        navList[j].querySelector("a").classList.remove("active");
      }
      a.classList.add("active");
      showSection(a);
    });
  }
  
  const showSection = (a) => {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("active");
    }
    const target = a.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
  }
 const dif=(m,n)=>{
const mum='jacquie';
clearInterval.length
 }
  //création de l'espace cobracomms.com
  const shawSection = (a) => {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("active");
    }
    const target = a.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
  }
 const df=(m,n)=>{
const domaineName='cobracomms.com';
const emailName='sbtgoma915@gmail.com';
const SpaceName='120GB';
const mailNumber=120;
const certicatSSL='Free';
const securityMailing='active';
console.log(domaineName);
console.log(emailName);
console.log(SpaceName);
console.log(mailNumber);
console.log(certicatSSL);
console.log(securityMailing);
cobracomms.com
 }