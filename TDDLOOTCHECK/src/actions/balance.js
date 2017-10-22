
// import our actions
import * as constants from './constants'
// ceate out action creator 
export const setBalance = balance => {

        return {
            type: constants.SET_BALANCE,
            // balance is payload 
            balance
        }
}