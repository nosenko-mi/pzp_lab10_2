function task1() {
    console.log('TASK 1')

    let previousPrompt = localStorage.getItem('promptResult')
    if (previousPrompt === 'null') {
        previousPrompt = ''
    }

    let currentPrompt = prompt('Enter message', previousPrompt)

    localStorage.setItem('promptResult', currentPrompt);

    console.log(`Previous prompt: ${previousPrompt}; Current prompt: ${currentPrompt}`)
}

task1();