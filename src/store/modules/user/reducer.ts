import {Reducer} from 'redux'
import { ActionTypes, User } from "./types";
import producer from 'immer'

const INITIAL_STATE: User = {
  name: '',
  email:''
}

 const user: Reducer<User> = (state = INITIAL_STATE, action)=> {
  return producer(state, draft=> {
    switch(action.type){
      case ActionTypes.addUserCredentials: {
        
        const {user} = action.payload;

        draft.email = user.email;
        draft.name = user.name

        break;
      }
      default: {
        return draft
      }
    }
  })
}

export default user;