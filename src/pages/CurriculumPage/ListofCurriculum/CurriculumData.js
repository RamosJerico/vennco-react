const KEYS = {
    subject: 'subject',
    subjectId: 'subjectId',
}

export const getYearLevel = () => ([
    { id: 'BSCS 1', title: 'BSCS 1' },
    { id: 'BSIT 1', title: 'BSIT 1' },
    { id: 'BSCS 2', title: 'BSCS 2' },
    { id: 'BSIT 2', title: 'BSIT 2' },
    { id: 'BSCS 3', title: 'BSCS 3' },
    { id: 'BSIT 3', title: 'BSIT 3' },
    { id: 'BSCS 4', title: 'BSCS 4' },
    { id: 'BSIT 4', title: 'BSIT 4' },
])
export const getDepartment = () => ([
    { id: 'BS Computer Science', title: 'BS Computer Science' },
    { id: 'BS Information Technology', title: 'BS Information Technology' },
])

export function insertSubject(data) {
    let subject = getAllSubject();
    data['id'] = generateSubjectID();
    subject.push(data);
    localStorage.setItem(KEYS.subject, JSON.stringify(subject))
}

export function updateSubject(data) {
    let subject = getAllSubject();
    let recordIndex = subject.findIndex(x => x.id === data.id);
    subject[recordIndex] = {...data}
    localStorage.setItem(KEYS.subject, JSON.stringify(subject));
}

export function deleteSubject(id) {
    let subject = getAllSubject();
    subject = subject.filter(x => x.id !== id)
    localStorage.setItem(KEYS.subject, JSON.stringify(subject));
}

export function generateSubjectID() {
    if(localStorage.getItem(KEYS.subjectId) == null) 
        localStorage.setItem(KEYS.subjectId, '0')
    var id = parseInt(localStorage.getItem(KEYS.subjectId))
    localStorage.setItem(KEYS.subjectId, (++id).toString())
    return id;
}

export function getAllSubject() {
    if(localStorage.getItem(KEYS.subject) == null) 
        localStorage.setItem(KEYS.subject, JSON.stringify([]))
    let subject = JSON.parse(localStorage.getItem(KEYS.subject));

    let yearLevels = getYearLevel();
    return subject.map(x => ({
        ...x,
    }))
}