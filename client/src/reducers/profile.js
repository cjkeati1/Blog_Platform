import {
   GET_PROFILE,
   CLEAR_PROFILE,
   PROFILE_ERROR, FOLLOW_USER
} from '../actions/types'

const initialState = {
   profile: null,
   loading: true,
   error: {}
};

export default function (state = initialState, action) {
   const {type, payload} = action;

   switch (type) {
      case GET_PROFILE:
         return {
            ...state,
            profile: payload,
            loading: false
         };
      case FOLLOW_USER:
         return {
            ...state,
            profile: {
               ...state.profile,
               user: {
                  ...state.profile.user,
                  followers: payload
               }
            },
            loading: false
         };
      case PROFILE_ERROR:
         return {
            ...state,
            error: payload,
            loading: false,
            profile: null
         };
      // case CLEAR_PROFILE:
      //    return {
      //       ...state,
      //       profile: null,
      //       loading: false
      //    };
      default:
         return state
   }
}
