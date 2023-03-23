let under_nav = document.getElementsByClassName("under_nav")[0]
let nav = document.getElementById('nav')
let menu = document.getElementById("menu")
let closse = document.getElementById('close')
let menu_mobile = document.getElementsByClassName("click_nav")[0]
window.addEventListener('scroll', function() {
if (window.pageYOffset === 0)
    nav.style.backgroundColor = "transparent"
    else
    nav.style.backgroundColor = "#060002a2"
});

menu.onclick = function() {
  menu_mobile.style.right = "0px"
};
closse.onclick = function() {
    menu_mobile.style.right = "-300px"
  };

// slide

const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");

myButton.addEventListener("click", () => {
  myText.classList.add("slide-out");
  setTimeout(() => {
    myText.innerHTML = "You clicked the button!";
    myText.classList.remove("slide-out");
  }, 500);
});


// finish slide 