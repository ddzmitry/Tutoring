import {SAVE_COMMENT,REMOVE_COMMENT} from './types'

export function saveComment(coment=''){
        return {
           type : SAVE_COMMENT,
           payload : coment
        }
}



export function removeComment(id){

        return {
           type : REMOVE_COMMENT,
           payload : id
        }
        
}