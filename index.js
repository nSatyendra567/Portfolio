document.getElementById("aboutfun").addEventListener("click", () => {
    window.scrollTo(0, 670)
    document.querySelector(".nav-ele").classList.remove("flex");
    document.querySelector(".leftyy").classList.remove("none")
  })

function gotopp() {
  window.scrollTo(0,1280)
  document.querySelector(".nav-ele").classList.remove("flex");
  document.querySelector(".leftyy").classList.remove("none")
}
function gotocc() {
  window.scrollTo(0, 20000)
  document.querySelector(".nav-ele").classList.remove("flex");
  document.querySelector(".leftyy").classList.remove("none")
}


document.querySelector(".leftyy").addEventListener("click", function () {
  console.log("working");
  let nav = document.querySelector(".nav-ele")
  nav.classList.add("flex");
  document.querySelector(".leftyy").classList.add("none")
})
document.querySelector(".arrow").addEventListener("click", function () {
  console.log("working");
  let nav = document.querySelector(".nav-ele")
  nav.classList.add("flex-remove");
  setTimeout(() => {
    nav.classList.remove("flex-remove");
    document.querySelector(".leftyy").classList.remove("none")
    nav.classList.remove("flex");
    
  }, 500);
    // nav.classList.remove("flex-remove");
    
  

})


// loder

function lodingfun() {
  document.getElementById("loader").style.display="none";
  document.getElementById("nav").classList.add("fade-in-text");
  document.getElementById("lamp").classList.add("fade-in-text");
  document.getElementById("line").classList.add("fade-in-text");
  document.getElementById("geine").classList.add("fade-in-text3");
  document.getElementById("geine-mes").classList.add("fade-in-text3");
  document.getElementById("link-massagee").classList.add("fade-in-text2");
  document.getElementById("main-cont").classList.add("fade-in-text2");
  document.getElementById("main-p").classList.add("fade-in-text2");
  document.getElementById("wish-mes").classList.add("fade-in-text2");
  document.getElementById("smoke").classList.add("fade-in-text2");
  setTimeout(() => {
    document.getElementById("wish-mes").classList.remove("fade-in-text2");
    document.getElementById("link-massagee").classList.remove("fade-in-text2");
    
  }, 1000);
  setTimeout(() => {
    document.getElementById("geine-mes").classList.remove("fade-in-text3");
  }, 3000);
  document.getElementById("icon").classList.add("fade-in-text");

}
