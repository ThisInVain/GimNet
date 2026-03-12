self.addEventListener("install",e=>{

e.waitUntil(

caches.open("gimnet").then(cache=>{

return cache.addAll([
"/",
"/index.html",
"/test.html"
])

})

)

})