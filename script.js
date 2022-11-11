const musicCard = document.querySelectorAll('.col-12')
console.log(musicCard)

for(m of musicCard){
    m.addEventListener('click', function(){
        window.location.assign("http://127.0.0.1:5500/album.html")
    })
}