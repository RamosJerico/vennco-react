const KEYS = {
    classroom: 'classroom',
    classroomId: 'classroomId',
}

export const getDepartment = () => ([
    { id: '1', title: 'BS Computer Science' },
    { id: '2', title: 'BS Information Technology' }
])

export function insertClassroom(data) {
    let classroom = getAllClassroom();
    data['id'] = generateClassroomID();
    classroom.push(data);
    localStorage.setItem(KEYS.classroom, JSON.stringify(classroom))
}

export function updateClassroom(data) {
    let classroom = getAllClassroom();
    let recordIndex = classroom.findIndex(x => x.id === data.id);
    classroom[recordIndex] = {...data}
    localStorage.setItem(KEYS.classroom, JSON.stringify(classroom));
}

export function deleteClassroom(id) {
    let classroom = getAllClassroom();
    classroom = classroom.filter(x => x.id !== id)
    localStorage.setItem(KEYS.classroom, JSON.stringify(classroom));
}

export function generateClassroomID() {
    if(localStorage.getItem(KEYS.classroomId) == null) 
        localStorage.setItem(KEYS.classroomId, '0')
    var id = parseInt(localStorage.getItem(KEYS.classroomId))
    localStorage.setItem(KEYS.classroomId, (++id).toString())
    return id;
}

export function getAllClassroom() {
    if(localStorage.getItem(KEYS.classroom) == null) 
        localStorage.setItem(KEYS.classroom, JSON.stringify([]))
    let classroom = JSON.parse(localStorage.getItem(KEYS.classroom));
    
    //map departmentID to department title
    let departments = getDepartment();
    return classroom.map(x => ({
        ...x,
        department: departments[x.departmentId - 1].title
    }))
}