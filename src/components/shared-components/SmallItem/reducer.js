export const skillReducer = (skills = [], action) => {
    switch(action.type) {
        case 'ADD_SKILL' :
            return [...skills, action.payload]
        case 'DELETE_SKILL' :
            return skills.filter(skill => skill.id !== action.payload)
        default :
            return skills
    }
}

export const langReducer = (langs = [], action) => {
    switch(action.type) {
        case 'ADD_LANG' :
            return [...langs, action.payload]
        case 'DELETE_LANG' :
            return langs.filter( lang => lang.id !== action.payload)
        default :
            return langs
    }
}

export const interestReducer = (interests = [], action) => {
    switch(action.type) {
        case 'ADD_INTEREST' :
            return [...interests, action.payload]
        case 'DELETE_INTEREST' :
            return interests.filter( interest => interest.id !== action.payload)
        default :
            return interests
    }
}

export const conditionReducer = (conditions = [], action) => {
    switch(action.type) {
        case 'ADD_CONDITION' :
            return [...conditions, action.payload]
        case 'DELETE_CONDITION' :
            return conditions.filter( condition => condition.id !== action.payload)
        default :
            return conditions
    }
}