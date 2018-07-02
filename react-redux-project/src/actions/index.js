//Action creator
import { SELECT_FOOD } from './actionType';


// chua tat ca cac action cua chuong trinh
export const selectFood = (food) => {
    console.log(`You clicked a food with name = ${food.name}`);
    return {
        type : 'SELECT_FOOD',
        payload : food
    }
}