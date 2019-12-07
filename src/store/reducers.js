import { combineReducers } from 'redux'
import { educationReducer, workReducer, licenseReducer} from '../components/shared-components/LargeItem/reducer'
import { skillReducer, langReducer, interestReducer, conditionReducer} from '../components/shared-components/SmallItem/reducer'


export default combineReducers({
    educations: educationReducer,
    works: workReducer,
    licenses: licenseReducer,
    skills: skillReducer,
    langs: langReducer,
    interests: interestReducer,
    conditions: conditionReducer
});