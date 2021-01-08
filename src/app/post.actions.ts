import {Action} from '@ngrx/store';
export const EDIT_TEXT='[Post] Edit';
export const UPVOTE='[Post] Upvote';
export const DOWNVOTE='[Post] Downvote';
export const RESET='[Post] Reset';



export class EditText implements Action{
    readonly type=EDIT_TEXT;
    constructor(public payload:string){}
}
export class Upvote implements Action{
    readonly  type= UPVOTE;
    constructor(){}
}

export class DownVote implements Action{
    readonly type=DOWNVOTE;
    constructor(){}
}
export class Reset implements Action{
    readonly type=RESET;
    constructor(){}
}

export type All=
Upvote | EditText | DownVote | Reset
