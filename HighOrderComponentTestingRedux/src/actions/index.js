import {CHANGE_AUTH} from './types';

export function authenicate (isLoggedIn){
   
        return{
            type: CHANGE_AUTH,
            payload: isLoggedIn
        };
}