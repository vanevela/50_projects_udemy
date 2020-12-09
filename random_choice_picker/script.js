const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()
// 
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    if (e.key == 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10);
        randomSelect()
    }
})
// create span tags from textarea inputs
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()!== '').map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement(`span`)
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    });
}
// select random tag
function randomSelect(){
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100); 
    }, times * 100);

}
// select a random element (tag class) from the nodelist 
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}
// Add highlight class to an element
function highlightTag(tag) {
    tag.classList.add('highlight')
}
// remove highlight class from an element
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}