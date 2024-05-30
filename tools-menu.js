function dragElement(elmnt) { elmnt.onmousedown = function(e) { e = e || window.event; var pos3 = e.clientX, pos4 = e.clientY, parent = elmnt.parentElement; document.onmousemove = function(e) { e = e || window.event; var newTop = parent.offsetTop - (pos4 - (pos4 = e.clientY)), newLeft = parent.offsetLeft - (pos3 - (pos3 = e.clientX)); parent.style.top = newTop + "px"; parent.style.left = newLeft + "px"; localStorage.setItem("top", newTop); localStorage.setItem(elmnt.id + 'left', newLeft); }; document.onmouseup = function() { document.onmouseup = document.onmousemove = null; }; }; }
let tab = document.createElement("div")
let title = document.createElement("div")
let toggle = document.createElement("div")
let stop = document.createElement("div")
let step = document.createElement("div")
let last = document.createElement("div")
let last_txt = document.createElement("a")
let title_txt = document.createElement("a")
let toggle_txt = document.createElement("a")
let toggle_btn = document.createElement("Button")
let stop_btn = document.createElement("Button")
let step_btn = document.createElement("Button")
// var activated = false
title_txt.innerText = "Hack Tools"
title_txt.style.width = "100%"
title_txt.style.padding = "0px"
title.appendChild(title_txt)
title.style.width = "100%"
title.style.textAlign = "center"
title.style.display = "flex"
title.style.alignItems = "center"
title.style.borderBottomWidth = "2px"
title.style.borderBottomColor = "black"
title.style.borderTopLeftRadius = "5px"
title.style.borderTopRightRadius = "5px"
title.style.backgroundColor = "#ddd"
title.style.cursor = "grab"
dragElement(title)
tab.appendChild(title)
toggle_txt.innerText = "Done All: Disabled"
toggle_txt.style.color = "red"
toggle_txt.style.padding = "10px"
toggle_txt.style.alignSelf = "center"
toggle_txt.id = "toggle_txt"
toggle.appendChild(toggle_txt)
toggle_btn.innerText = "Enable"
toggle_btn.style.width = "auto"
toggle_btn.style.borderBottomWidth = "0"
toggle_btn.id = "toggle_btn"
//toggle_btn.setAttribute('onclick',' localStorage.setItem("activate", localStorage.getItem("activate") == "false"); document.getElementById("toggle_btn").innerText = (localStorage.getItem("activate") == "true") ? "Disable" : "Enable"; toggle_txt.innerText = (localStorage.getItem("activate") == "true") ? "Done All: Enabled" : "Done All: Disabled"; toggle_txt.style.color = (localStorage.getItem("activate") == "true") ? "green" : "red"; check();')
toggle_btn.addEventListener("click", function() {
    //let tb = 
    localStorage.setItem("activate", localStorage.getItem("activate") == "false"); $("#toggle_btn")[0].innerText = (localStorage.getItem("activate") == "true") ? "Disable" : "Enable"; $("#toggle_txt")[0].innerText = (localStorage.getItem("activate") == "true") ? "Done All: Enabled" : "Done All: Disabled"; $("#toggle_txt")[0].style.color = (localStorage.getItem("activate") == "true") ? "green" : "red"; check();
})
toggle.appendChild(toggle_btn)
tab.appendChild(toggle)
step_btn.innerText = "Step"
step_btn.style.color = "green"
step_btn.style.width = "100%"
step_btn.style.height = "min-content"
step_btn.style.borderLeftWidth = "0"
step_btn.style.borderRightWidth = "0"
step_btn.style.borderBottomWidth = "0"
//step_btn.setAttribute('onclick', 'run();')
step_btn.addEventListener("click", run)
step_btn.style.margin = "auto"
step.appendChild(step_btn)
step.style.width = "100%"
step.style.alignItems = "center"
step.style.display = "flex"
tab.appendChild(step)
stop_btn.innerText = "Stop Script"
stop_btn.style.color = "red"
stop_btn.style.width = "100%"
stop_btn.style.height = "min-content"
stop_btn.style.borderLeftWidth = "0"
stop_btn.style.borderRightWidth = "0"
//stop_btn.setAttribute('onclick','localStorage.getItem("activate")=="true" ? document.getElementById("toggle_btn").click() : null;')
stop_btn.addEventListener("click", function() {if (localStorage.getItem("activate") == "true") {localStorage.setItem("activate", "false");};})
stop_btn.style.margin = "auto"
stop.appendChild(stop_btn)
stop.style.width = "100%"
stop.style.alignItems = "center"
stop.style.display = "flex"
tab.appendChild(stop)
localStorage.setItem("activate", localStorage.getItem("activate") == "true");
localStorage.setItem("done", localStorage.getItem("done"));
localStorage.setItem("undone", localStorage.getItem("undone"));
localStorage.setItem("top", localStorage.getItem("top") ? localStorage.getItem("top") : 10);
localStorage.setItem("left", localStorage.getItem("left") ? localStorage.getItem("left") : 10);
last_txt.innerHTML = `<a style="color: green;">Done</a>: ${localStorage.getItem("done")}<br><a style="color: red;">Undone:</a> ${localStorage.getItem("undone")}`
last.appendChild(last_txt)
last.style.width = "100%"
last.style.textAlign = "center"
last.style.borderBottomLeftRadius = "5px"
last.style.borderBottomRightRadius = "5px"
last.style.backgroundColor = "#ddd"
tab.appendChild(last)
tab.getElementsByTagName("br").style = "display: none;"
tab.id = "hack-tools"
tab.style.width = "250px"
tab.style.background = "white"
tab.style.border = "2px solid black"
tab.style.borderRadius = "5px"
tab.style.position = "fixed"
tab.style.top = localStorage.getItem("top") + "px"
tab.style.left = localStorage.getItem("left") + "px"
tab.style.zIndex = "999999"
tab.style.alignItems = "center"
document.body.appendChild(tab)
function run() {fetch("https://raw.githubusercontent.com/Pisc639-Newton/Pisc639-script/main/vocabsize.js").then(response => response.text()).then(data => eval(data));};
//https://raw.githubusercontent.com/Pisc639-Newton/Pisc639-script/main/vocabsize.js
//fetch("https://raw.githubusercontent.com/Pisc639-Newton/Pisc639-script/main/vocabsize.js").then(response => response.text()).then(data => eval(data));
function check() {if(localStorage.getItem("activate")==="true"&&!tab.matches(":hover")){run();}};
function change(to) {$("#toggle_btn")[0].innerText = to ? "Disable" : "Enable"; $("#toggle_txt")[0].innerText = to ? "Done All: Enabled" : "Done All: Disabled"; $("#toggle_txt")[0].style.color = to ? "green" : "red";};
if(!window.location.pathname.includes('student-assigned-list')) {run();};
if (localStorage.getItem("activate") == "true") {change(true); localStorage.setItem("activate", "true");};
if (window.location.pathname.includes('student-assigned-list')) {localStorage.setItem("done", $('.desktop-screen div').filter(function() {var style = $(this).attr('style');return style && !style.includes('background:') && style.includes('background-color:');}).length);};
if (window.location.pathname.includes('student-assigned-list')) {localStorage.setItem("undone", $('.desktop-screen div').filter(function() {var style = $(this).attr('style');return style && style.includes('background:') && !style.includes('background-color:');}).length);};
