import * as types from './../Contants/ActionType'
const initialState = [];
const listChatReducer = (state = initialState, action)=>{
    switch (action.type){
        case types.LIST_MESSAGES:
        const {idReceiver, idSender, text, timeMessage} = action;
        //console.log(action.text)
        return  state.concat([
          {
            idReceiver,
            idSender,
            text,
            timeMessage
          }
        ])
        case types.CLEAR_MESSAGE:
        return [];
          
        // [{idReceiver :'',
        // idSender: '',
        // text: '',
        // timeMessage: ''}]
        default:
          return state;
    }
}
export default listChatReducer;