const album = document.querySelector(".album")
const loadImages = async () => {
    var html = ``
    await fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => {
            data.map(_data => {
                console.log(data)
                html += `
                
            <div class="profile"><img src="image.JPG" alt="">
            <p class="name">${_data.title}</p>
            <p>ID - <b>${_data.id}</b></p>
            <button id="button1">Book me</button>
            <button id="button2">View profile</button>
            </div>
      `
            })
            album.innerHTML = html
        })
}
loadImages()

