const KEYS = {
    myschedule: 'myschedule',
    myscheduleId: 'myscheduleId',
}

export const getClass = () => ([
    { id: '1', title: 'BSCS 1A' },
    { id: '2', title: 'BSCS 1B' },
    { id: '3', title: 'BSIT 1A' },
    { id: '4', title: 'BSIT 1B' },
    { id: '5', title: 'BSCS 2A' },
    { id: '6', title: 'BSCS 2B' },
    { id: '7', title: 'BSIT 2A' },
    { id: '8', title: 'BSIT 2B' },
    { id: '9', title: 'BSCS 3A' },
    { id: '10', title: 'BSCS 3B' },
    { id: '11', title: 'BSIT 3A' },
    { id: '12', title: 'BSIT 3B' },
    { id: '13', title: 'BSCS 4' },
    { id: '14', title: 'BSIT 4' },
])

export const getRoom = () => ([
    { id: 'CPADS 1', title: 'CPADS 1' },
    { id: 'CPADS 2', title: 'CPADS 2' },
    { id: 'CPADS 3', title: 'CPADS 3' },
    { id: 'CPADS 4', title: 'CPADS 4' },
    { id: 'CPADS 5', title: 'CPADS 5' },
    { id: 'ICS COM-LAB', title: 'ICS COM-LAB' },
])

export function insertMyschedule(data) {
    let myschedule = getAllMyschedule();
    data['id'] = generateMyscheduleID();
    myschedule.push(data);
    localStorage.setItem(KEYS.myschedule, JSON.stringify(myschedule))
}

export function updateMyschedule(data) {
    let myschedule = getAllMyschedule();
    let recordIndex = myschedule.findIndex(x => x.id === data.id);
    myschedule[recordIndex] = {...data}
    localStorage.setItem(KEYS.myschedule, JSON.stringify(myschedule));
}

export function deleteMyschedule(id) {
    let myschedule = getAllMyschedule();
    myschedule = myschedule.filter(x => x.id !== id)
    localStorage.setItem(KEYS.myschedule, JSON.stringify(myschedule));
}

export function generateMyscheduleID() {
    if(localStorage.getItem(KEYS.myscheduleId) == null) 
        localStorage.setItem(KEYS.myscheduleId, '0')
    var id = parseInt(localStorage.getItem(KEYS.myscheduleId))
    localStorage.setItem(KEYS.myscheduleId, (++id).toString())
    return id;
}

export function getAllMyschedule() {
    if(localStorage.getItem(KEYS.myschedule) == null) 
        localStorage.setItem(KEYS.myschedule, JSON.stringify([]))
    let myschedule = JSON.parse(localStorage.getItem(KEYS.myschedule));
    
    //map id to title
    let classes = getClass();
    return myschedule.map(x => ({
        ...x,
        class: classes[x.classId - 1].title
    }))
}