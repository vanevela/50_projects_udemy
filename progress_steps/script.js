// create variables to access elements in the DOM
const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

// variable to keep track on progress bar
let currentActive = 1

// add event listener to next button
next.addEventListener('click',() => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})
// add event listener to prev button
prev.addEventListener('click',() => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})
// function to update the progress bar
function update(){
    circles.forEach((circle,idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
    
    if (currentActive === 1) {
        prev.disabled = true
    }else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}