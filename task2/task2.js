const inputText = document.getElementsByName('simpleTextInput')
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    // prevent page reload
    event.preventDefault()

    console.log('TASK 2')


    // get input text
    const currentMessage = form.elements['simpleTextInput'].value

    localStorage.setItem('promptResult', currentMessage);

    console.log(`Previous prompt: ${previousMessage}; Current prompt: ${currentMessage}`)

});

// prepare input field
let previousMessage = localStorage.getItem('promptResult')
if (previousMessage === 'null') {
    previousMessage = ''
}
form.elements['simpleTextInput'].value = previousMessage