 let togglebtn = document.querySelector(".darkmodeTogglerBtn");
 let isDarkMode =false;
 let heading =document.querySelector(".container h2");
 togglebtn.addEventListener("click",darkmode);

 function darkmode() {
   let body = document.querySelector("body");
   let sunIcon =document.querySelector(".darkmodeTogglerBtn .sun");
   body.classList.toggle("darkmode");
   isDarkMode =!isDarkMode;
   if (isDarkMode== true){
    heading.innerHTML ="Dark Mode";
    sunIcon.style.marginTop = "-100%";
   } else{
    heading.innerHTML ="Light Mode";
    sunIcon.style.marginTop ="0px";
   }

 }