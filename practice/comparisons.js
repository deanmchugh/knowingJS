const dayStart = '07:30'
const dayEnd = '17:45'

function scheduleMetting(startTime, durationMinutes) {
    const time = Number(startTime.replace(':', '')) 
    if (time >= Number(dayStart.replace(':', '')) && 
        time + durationMinutes <= Number(dayEnd.replace(':', ''))) return true
    else return false
}

console.log(scheduleMetting('7:29', 15))