export const SET_CATEGORIES = 'SET_CATEGORIES';
export const PICK_CATEGORY = 'PICK_CATEGORY';
export const SET_CLUES = 'SET_CLUES';

//action to set categories
export function setCategories(categories){
    return {
        type: SET_CATEGORIES,
        categories
    }
}

export function pickCategory(category){
    return{
        type:PICK_CATEGORY,
        category
    }
}

export function setClues(clues){
    return{
        type:SET_CLUES,
        clues
    }
}