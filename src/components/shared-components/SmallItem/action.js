// Skill
export const addSkill = (skill) => {
    return {
        type: 'ADD_SKILL',
        payload: skill
    }
}

export const deleteSkill = (id) => {
    return {
        type:'DELETE_SKILL',
        payload: id
    }
}

// Language
export const addLang = (lang) => {
    return {
        type: 'ADD_LANG',
        payload: lang
    }
}

export const deleteLang = (id) => {
    return {
        type:'DELETE_LANG',
        payload: id
    }
}

// Interest
export const addInterest = (interest) => {
    return {
        type: 'ADD_INTEREST',
        payload: interest
    }
}

export const deleteInterest = (id) => {
    return {
        type:'DELETE_INTEREST',
        payload: id
    }
}

// Condition
export const addCondition = (condition) => {
    return {
        type: 'ADD_CONDITION',
        payload: condition
    }
}

export const deleteCondition = (id) => {
    return {
        type:'DELETE_CONDITION',
        payload: id
    }
}