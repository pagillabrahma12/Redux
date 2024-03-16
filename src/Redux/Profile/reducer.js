



const initialState={
    name:"Pagilla Brahma"
}
  export  const ProfileReducer=(state=initialState,action)=>{
        switch(action.type){
            case "CHANGE_NAME":
                return{...state,name:"hello"}
                default:
                    return state
        }
    }