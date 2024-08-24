let btn = document.getElementById("button")
let Input = document.getElementById("Search_Input")
let container = document.getElementById("container")


function getdata(moviename) {
    fetch(`https://www.omdbapi.com/?apikey=9d27501&type=movie&s=${moviename}`)
        .then(function (res) {
            return res.json()
        }).then(function (res) {
            console.log(res.Search)
            shodwdata(res.Search)
        }).catch(function (err) {
            console.log(err)
        })
}

function shodwdata(data) {

    container.innerHTML = ""
    data.forEach(ele => {
        console.log(ele)
        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = ele.Poster

        let p1 = document.createElement("p")
        p1.innerHTML = ele.Title

        let p2 = document.createElement("p")
        p2.innerHTML = ele.Year

        let p3 = document.createElement("p")
        p3.innerHTML = ele.imdbId

        let p4 = document.createElement("p")
        p4.innerHTML = ele.Type

        div.append(image, p1, p2, p3, p4)

        container.append(div)

    });
}

btn.addEventListener("click", function (event) {
    event.preventDefault()
    let value = Input.value
    getdata(value)
})
