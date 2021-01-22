const KEYS = {
    schedule: 'schedule',
    scheduleId: 'scheduleId',
}
export const getInstructor = () => ([
    { id: '1', title: 'Jerico James A Ramos'},
    { id: '2', title: 'Mark Joshua T Bernardino'},
    { id: '3', title: 'Ronie Anthony G Berondo'},
    { id: '4', title: 'Ronald M Arcilla'},
    { id: '5', title: 'Joshua F Rellosa'},
    { id: '6', title: 'Reiner E Acedo'},
    { id: '7', title: 'Jheo N Jimenez'},
])

export const getMyRoom = () => ([
    { id: 'CPADS 1', title: 'CPADS 1' },
    { id: 'CPADS 2', title: 'CPADS 2' },
    { id: 'CPADS 3', title: 'CPADS 3' },
    { id: 'CPADS 4', title: 'CPADS 4' },
    { id: 'CPADS 5', title: 'CPADS 5' },
    { id: 'ICS COM-LAB', title: 'ICS COM-LAB' }
])

export function insertSchedule(data) {
    let schedule = getAllSchedule();
    data['id'] = generateScheduleID();
    schedule.push(data);
    localStorage.setItem(KEYS.schedule, JSON.stringify(schedule));
}

export function updateSchedule(data) {
    let schedule = getAllSchedule();
    let recordIndex = schedule.findIndex( x => x.id === data.id);
    schedule[recordIndex] = {...data}
    localStorage.setItem(KEYS.schedule, JSON.stringify(schedule));
}

export function deleteSchedule(id) {
    let schedule = getAllSchedule();
    schedule = schedule.filter(x => x.id !== id)
    localStorage.setItem(KEYS.schedule, JSON.stringify(schedule));
}

export function generateScheduleID() {
    if(localStorage.getItem(KEYS.scheduleId) == null) 
        localStorage.setItem(KEYS.scheduleId, '0')
    var id = parseInt(localStorage.getItem(KEYS.scheduleId))
    localStorage.setItem(KEYS.scheduleId, (++id).toString())
    return id;
}

export function getAllSchedule() {
    if(localStorage.getItem(KEYS.schedule) == null) 
        localStorage.setItem(KEYS.schedule, JSON.stringify([]))
    let schedule = JSON.parse(localStorage.getItem(KEYS.schedule));

    let instructors = getInstructor();
    return schedule.map(x => ({
        ...x,
        instructor: instructors[x.instructorId - 1].title
    }))
}