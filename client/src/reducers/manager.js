import { GET_INDIVIDUAL_DATA } from "../constants/actionTypes";

const reducer = (data = [], action) => {
    switch(action.type){
        case GET_INDIVIDUAL_DATA:
            return action.payload;
        default:
            return data;
    }
};

export default reducer;