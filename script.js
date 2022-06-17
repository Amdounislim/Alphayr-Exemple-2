let hearts = Array.from(document.querySelectorAll('.fa-heart'))

for (let heart of hearts) {
    heart.addEventListener('click', function () {
        // if (heart.style.color === "red") {
        //     heart.style.color = "gray"
        // }
        // else {
        //     heart.style.color = "red"
        // }
        heart.classList.toggle('myClass')
    })
}

let adds = Array.from(document.querySelectorAll('.add'))

// for(let btn of adds){
//     btn.addEventListener('click', function(){
//         btn.nextElementSibling.innerHTML++
//     })
// }

adds.map(el => el.addEventListener("click", function () {
    el.nextElementSibling.innerHTML++
    somme()
}))

let minus = Array.from(document.querySelectorAll('.minus'))
minus.map(el => el.addEventListener("click", function () {
    if (el.previousElementSibling.innerHTML > 0) {
        el.previousElementSibling.innerHTML--
        somme()
    }
}))

let trash = Array.from(document.querySelectorAll('.fa-trash-alt'))
trash.map(el => el.addEventListener("click", function () {
        el.parentNode.remove()
        somme()
}))

function somme(){
    let prices = Array.from(document.querySelectorAll(".price"))
    let qte = Array.from(document.getElementsByClassName('qte'))
    let sum=0
    for(let i=0 ; i<qte.length; i++){
        // sum = sum + (prices[i].innerHTML*qte[i].innerHTML)
        sum += Number(prices[i].innerHTML.slice(1))*qte[i].innerHTML
    }
    return document.getElementById("totalp").innerHTML = `Shopping Bag total : $ ${sum}`
}