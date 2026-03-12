/* GIMNET PERFORMANCE PATCH */

document.addEventListener("DOMContentLoaded",()=>{

/* FAST TABS */

const tabs=document.querySelectorAll(".tab")
const buttons=document.querySelectorAll("[data-tab]")

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

const target=btn.dataset.tab

tabs.forEach(t=>{
t.style.display="none"
})

const tab=document.getElementById(target)

if(tab) tab.style.display="block"

})

})

})

/* SPLASH OPTIMIZATION */

window.addEventListener("load",()=>{

const splash=document.getElementById("splash")

if(!splash) return

requestAnimationFrame(()=>{

setTimeout(()=>{

splash.style.opacity="0"

setTimeout(()=>{
splash.remove()
},300)

},500)

})

})

/* SCHEDULE PERFORMANCE */

window.loadScheduleFast=function(data,container){

const frag=document.createDocumentFragment()

data.forEach(l=>{

const el=document.createElement("div")

el.className="lesson"

el.innerHTML=
`<b>${l.lesson}</b><br>
${l.teacher} • ${l.room}`

frag.appendChild(el)

})

container.innerHTML=""
container.appendChild(frag)

}

/* THEME SWITCH FAST */

window.toggleThemeFast=function(){

document.body.classList.toggle("dark")

}

/* SERVICE WORKER */

if("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js")

}