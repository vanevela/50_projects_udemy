const boxes = document.querySelectorAll('.box')
// add action when scrolling the page
window.addEventListener('scroll',checkBoxes )
// call the function to show the initial content
checkBoxes()
// function to add  content while scrolling
function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4 
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}