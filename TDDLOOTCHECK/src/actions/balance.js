
import * as constans from './constants';

export function setBalance(balance = 0){
    return {
        type: constans.SET_BALANCE,
         balance
    }
}
export function deposit(deposit){
    return {
        type: constans.DEPOSIT,
            deposit
    }
}

export function withdraw(withdraw){
    return {
        type : constans.WITHDRAW,
        withdraw
    }
}