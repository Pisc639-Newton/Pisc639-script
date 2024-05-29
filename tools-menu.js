function dragElement(elmnt) { elmnt.onmousedown = function(e) { e = e || window.event; var pos3 = e.clientX, pos4 = e.clientY, parent = elmnt.parentElement; document.onmousemove = function(e) { e = e || window.event; var newTop = parent.offsetTop - (pos4 - (pos4 = e.clientY)), newLeft = parent.offsetLeft - (pos3 - (pos3 = e.clientX)); parent.style.top = newTop + "px"; parent.style.left = newLeft + "px"; localStorage.setItem("top", newTop); localStorage.setItem(elmnt.id + 'left', newLeft); }; document.onmouseup = function() { document.onmouseup = document.onmousemove = null; }; }; }
let tab = document.createElement("div")
let title = document.createElement("div")
let toggle = document.createElement("div")
let last = document.createElement("div")
let last_txt = document.createElement("a")
let title_txt = document.createElement("a")
let toggle_txt = document.createElement("a")
let toggle_btn = document.createElement("Button")
let activated = false
title_txt.innerText = "Hack Tools"
title_txt.style.width = "auto"
title_txt.style.padding = "0px"
title.appendChild(title_txt)
title.style.width = "100%"
title.style.textAlign = "center"
title.style.borderTopLeftRadius = "5px"
title.style.borderTopRightRadius = "5px"
title.style.backgroundColor = "#ddd"
dragElement(title)
tab.appendChild(title)
toggle_txt.innerText = "Disabled"
toggle_txt.style.color = "red"
toggle_txt.style.padding = "10px"
toggle.appendChild(toggle_txt)
toggle_btn.innerText = "Enable"
toggle_btn.style.width = "auto"
toggle_btn.style.borderRadius = "5px"
toggle_btn.setAttribute('onclick','activated = !activated; toggle_btn.innerText = activated ? "Disable" : "Enable"; toggle_txt.innerText = activated ? "Enabled" : "Disabled"; toggle_txt.style.color = activated ? "green" : "red"; localStorage.setItem("activate", localStorage.getItem("activate") == "false");')
toggle.appendChild(toggle_btn)
tab.appendChild(toggle)
localStorage.setItem("activate", localStorage.getItem("activate") == "true");
localStorage.setItem("done", localStorage.getItem("done"));
localStorage.setItem("undone", localStorage.getItem("undone"));
localStorage.setItem("top", localStorage.getItem("top") ? localStorage.getItem("top") : 10);
localStorage.setItem("left", localStorage.getItem("left") ? localStorage.getItem("left") : 10);
if (localStorage.getItem("activate") == "true") {toggle_btn.click(); localStorage.setItem("activate", "true");};
if (window.location.pathname.includes('student-assigned-list')) {localStorage.setItem("done", $('.desktop-screen div').filter(function() {var style = $(this).attr('style');return style && !style.includes('background:') && style.includes('background-color:');}).length);};
if (window.location.pathname.includes('student-assigned-list')) {localStorage.setItem("undone", $('.desktop-screen div').filter(function() {var style = $(this).attr('style');return style && style.includes('background:') && !style.includes('background-color:');}).length);};
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
tab.style.width = "200px"
tab.style.background = "white"
tab.style.border = "2px solid black"
tab.style.borderRadius = "5px"
tab.style.position = "fixed"
tab.style.top = localStorage.getItem("top") + "px"
tab.style.left = localStorage.getItem("left") + "px"
tab.style.zIndex = "9999"
tab.style.alignItems = "center"
document.body.appendChild(tab)
if(localStorage.getItem("activate")=="true"){fetch("https://raw.githubusercontent.com/Pisc639-Newton/Pisc639-script/main/vocabsize.js").then(response => response.text()).then(data => eval(data));}
