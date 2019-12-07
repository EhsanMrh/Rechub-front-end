export const educationReducer = (educations = [], action) => {
    switch(action.type) {
        case 'ADD_EDU' :
            return [...educations, action.payload]
        case 'DELETE_EDU' :
            return educations.filter(edu => edu.id !== action.payload)
        default:
            return educations 
    }
}

export const workReducer = (works = [], action) => {
    switch(action.type) {
        case 'ADD_WORK' :
            return [...works, action.payload]
        case 'DELETE_WORK' :
            return works.filter(work => work.id !== action.payload)
        default:
            return works 
    }
}

export const licenseReducer = (licenses = [], action) => {
    switch(action.type) {
        case 'ADD_LICENSE' :
            return [...licenses, action.payload]
        case 'DELETE_LICENSE' :
            return licenses.filter(license => license.id !== action.payload)
        default:
            return licenses 
    }
}