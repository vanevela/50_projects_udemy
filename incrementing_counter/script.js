// Get elements -> counters
const counters = document.querySelectorAll('.counter')

// iterate over nodelist to increment the innertext until reach the data-target
counters.forEach((counter) => {
    counter.innerText= '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target/800

        if (c < target ) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1);
        }else{
            counter.innerText = target
        }
    }
    updateCounter()
})