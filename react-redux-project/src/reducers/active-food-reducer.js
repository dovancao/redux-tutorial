import { SELECT_FOOD } from '../actions/actionType';

export default ( state = {}, action) => {
    switch(action.type) {
        case SELECT_FOOD :
            return action.payload;
            default :
                return {};
    }
    return {};
}