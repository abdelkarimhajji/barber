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
let comnt1 = "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Donec placerat, orci vel consequat mattis, sapien lacus pretium mi, sed lacinia dolor nibh non mi."
let comnt2 = "tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Donec placerat, orci vel consequat mattis, sapien lacus pretium mi, sed lacinia dolor nibh non mi."
let comnt3 = "Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Donec placerat, orci vel consequat mattis, sapien lacus pretium mi, sed lacinia dolor nibh non mi."
function fadeOut() {
  const circle = document.querySelector('.circle');
  circle.style.opacity = 0; // set opacity to 0 to start the fade out animation
  setTimeout(() => {
    circle.style.display = 'none'; // hide the element after the animation completes
  }, 1000); // wait 1 second (1000 milliseconds) for the animation to complete
}
let coment = document.getElementsByClassName("coment")[0]
let nameComntes = document.getElementsByClassName("nameComntes")[0]
let img = document.getElementById('img')
const array = [comnt1, comnt2, comnt3]
const array2 = ["Cassie Carleton", "Coby Sue", "Stefanie Rashfod"]
const array3 = ["../imgs/cassie.jpeg","../imgs/stefani.jpeg","../imgs/coby.jpeg"]
let i = 0;
let j = 0
function change(par) {
  if (par == "left")
  {
    if (i >= 2)
      i = 2
    else
      i++;
    coment.innerHTML = array[i]
    nameComntes.innerHTML  = array2[i]
    img.src = array3[i]
  }
  if (par == "right")
  {
    if (i <= 0)
    {
      i = 0
    }
    else
      i--
    coment.innerHTML = array[i]
    nameComntes.innerHTML  = array2[i]
    img.src = array3[i]
  }
  // j++
  // if (j < 3)
  //   setTimeout(change("left"), 1000)
  // else
  //   setTimeout(change("right"), 1000)
}
// setTimeout(change("left"), 1000)

// finish slide 