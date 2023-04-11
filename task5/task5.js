function getGreeting(hour) {


    let greeting = ''
    if (hour < 12) {
        greeting = 'Good morning!'
    } else if (hour < 18) {
        greeting = 'Good afternoon'
    } else {
        greeting = 'Good evening'
    }

    return greeting
}


function has24HoursPassed(prev, curr) {
    if (isNaN(prev)) {
        return true
    }
    return curr - prev >= 24 ? true : false
}


function task5() {

    // check last visit time
    const d = new Date();
    let currentHour = d.getHours();


    const lastVisitTime = localStorage.getItem('lastVisitTime')
    if (!has24HoursPassed(parseInt(lastVisitTime), currentHour)) {
        console.log('24 hours has not passed yet.')
        return
    }

    // show greeting
    const greeting = getGreeting(currentHour)
    alert(greeting)
    // save visit time
    localStorage.setItem('lastVisitTime', currentHour)
}


task5()