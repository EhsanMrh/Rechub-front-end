export const addEdu = (edu) => {
    return {
        type: 'ADD_EDU',
        payload: edu
    }
}

export const deleteEdu = (id) => {
    return {
        type: 'DELETE_EDU',
        payload: id
    }
}

export const addWork = (work) => {
    return {
        type: 'ADD_WORK',
        payload: work
    }
}

export const deleteWork = (id) => {
    return {
        type: 'DELETE_WORK',
        payload: id
    }
}

export const addLicense = (license) => {
    return {
        type: 'ADD_LICENSE',
        payload: license
    }
}

export const deleteLicense = (id) => {
    return {
        type: 'DELETE_LICENSE',
        payload: id
    }
}
