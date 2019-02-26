a = document.getElementById("slot1");
b = document.getElementById("slot2");
c = document.getElementById("slot3");
mySound = document.getElementById('you-win');

function nextImage(el){
if (el.src.match("cherry_slot.PNG")){
el.src = "lemon_slot.PNG";
} else if (el.src.match("lemon_slot.PNG")){
el.src = "orange_slot.PNG";
} else if (el.src.match("orange_slot.PNG")){
el.src = "cherry_slot.PNG";
} else {
}
}

function nextImage2(el){
if (el.src.match("lemon_slot.PNG")){
el.src = "bar_slot.PNG";
} else if (el.src.match("bar_slot.PNG")){
el.src = "cherry_slot.PNG";
} else if (el.src.match("cherry_slot.PNG")){
el.src = "lemon_slot.PNG";
} else {
}
}

function nextImage3(el){
if (el.src.match("orange_slot.PNG")){
el.src = "cherry_slot.PNG";
} else if (el.src.match("cherry_slot.PNG")){
el.src = "seven_slot.PNG";
} else if (el.src.match("seven_slot.PNG")){
el.src = "watermelon_slot.PNG";
}else if (el.src.match("watermelon_slot.PNG")){
el.src = "orange_slot.PNG";
} else {
}
}



function checkColors(el){
if (a.src.match("cherry_slot.PNG") && b.src.match("cherry_slot.PNG") && c.src.match("cherry_slot.PNG")){
mySound.play();
a.classList.add("opaque");
b.classList.add("opaque");
c.classList.add("opaque");
} else {
}
}
