const dayStart = '07:30'
const dayEnd = '17:45'

function scheduleMetting(startTime, durationMinutes) {
    const time = startTime.replace(':', '') 
    if (time >= dayStart.replace(':', '') && 
        time + durationMinutes <= dayEnd.replace(':', '')) return console.log('true')
    else return console.log('false')
}

scheduleMetting('17:32', 15)