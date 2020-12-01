// get all elements whith panel class
const panels = document.querySelectorAll('.panel')

// iterate over panels array to add an event listener
panels.forEach((panel) => {
    panel.addEventListener('click',() => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// function to remove active class from panel's elements
function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}