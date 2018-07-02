import FoodReducer from './food-reducer';
import UserReducer from './users-reducer';
import ActiveFoodReducer from './active-food-reducer';

import { combineReducers } from "redux";

// Chua tat ca cac state cua chuong trinh
const allReducers = combineReducers({
    foods: FoodReducer,
    users : UserReducer,
    activeFood : ActiveFoodReducer
})

export default allReducers;