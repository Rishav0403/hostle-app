import { GET_USER_DATA, UPDATE_MEAL_DATA } from "../constants/actionTypes";

const reducer = (data = {}, action) => {
    switch(action.type){
        case UPDATE_MEAL_DATA:
            return action.payload;
        case GET_USER_DATA:
            return action.payload;
        default:
            return data;
    }
};

export default reducer;