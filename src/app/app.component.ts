import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PostActions from './post.actions';
import {Post} from './post.model';
interface AppState{
  message :string;
}
interface AppState{
    post:Post
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message$ : Observable<string>;
   post$:Observable<Post> | undefined;
   text:String | undefined;
  constructor(private store: Store<AppState>)
  {
    this.message$ =this.store.select('message');
    this.post$=this.store.select('post')
  }
  spanishMessage(){
    this.store.dispatch({type:'SPANISH'})
  }
  frenchMessage(){
    this.store.dispatch({type:'FRENCH'})
  }
  // editText(){
  //   this.store.dispatch(new PostActions.EditText(this.text));
  // }
  Upvote(){
    this.store.dispatch(new PostActions.Upvote());
  }
  Downvote(){
    this.store.dispatch(new PostActions.DownVote());
  }

}
