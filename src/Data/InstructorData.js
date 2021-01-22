const KEYS = {
    instructor: 'instructor',
    instructorId: 'instructorId',
}

export const getDepartment = () => ([
    { id: '1', title: 'BS Computer Science' },
    { id: '2', title: 'BS Information Technology' },
])

export const getPreferredTime = () => ([
    { id: 'Anytime', title: 'Anytime'},
    { id: 'Anytime in the morning', title: 'Anytime in the morning'},
    { id: '7:00-8:30', title: '7:00-8:30'},
    { id: '8:30-10:00', title: '8:30-10:00'},
    { id: '10:00-11:30', title: '10:00-11:30'},
    { id: '11:30-1:00', title: '11:30-1:00'},
    { id: 'Anytime in the afternoon', title: 'Anytime in the afternoon'},
    { id: '1:00-2:30', title: '1:00-2:30'},
    { id: '2:30-4:00', title: '2:30-4:00'},
    { id: '4:00-5:30', title: '4:00-5:30'},
    { id: 'I have time to have classes at night', title: 'I have time to have classes at night'},
])

export function insertInstructor(data) {
    let instructor = getAllInstructor();
    data['id'] = generateInstructorID();
    instructor.push(data);
    localStorage.setItem(KEYS.instructor, JSON.stringify(instructor))
}

export function updateInstructor(data) {
    let instructor = getAllInstructor();
    let recordIndex = instructor.findIndex(x => x.id === data.id);
    instructor[recordIndex] = {...data}
    localStorage.setItem(KEYS.instructor, JSON.stringify(instructor));
}

export function deleteInstructor(id) {
    let instructor = getAllInstructor();
    instructor = instructor.filter(x => x.id !== id)
    localStorage.setItem(KEYS.instructor, JSON.stringify(instructor));
}

export function generateInstructorID() {
    if(localStorage.getItem(KEYS.instructorId) == null) 
        localStorage.setItem(KEYS.instructorId, '0')
    var id = parseInt(localStorage.getItem(KEYS.instructorId))
    localStorage.setItem(KEYS.instructorId, (++id).toString())
    return id;
}

export function getAllInstructor() {
    if(localStorage.getItem(KEYS.instructor) == null) 
        localStorage.setItem(KEYS.instructor, JSON.stringify([]))
    let instructor = JSON.parse(localStorage.getItem(KEYS.instructor));
    
    //map departmentID to department title
    let departments = getDepartment();
    return instructor.map(x => ({
        ...x,
        department: departments[x.departmentId - 1].title
    }))
}