import * as PostActions from './post.actions';
import {Post} from './post.model';
import {Action} from '@ngrx/store'
//default app state
const defaultState:Post={
    text:"hello , i am default post",
    likes:0
}
//helper function to create new state objects
const newState=(state:any,newData:any)=>{
    return Object.assign({},state,newData)
}

export function postReducer(state:Post=defaultState,action:Action)
{
    switch(action.type)
    {
        case PostActions.EDIT_TEXT:
            return newState(state,{text:state.text})
        case PostActions.UPVOTE:
            return newState(state,{likes:state.likes+1})
        case PostActions.DOWNVOTE:
            return newState(state,{likes:state.likes-1})
        default:
            return state;
    }
}