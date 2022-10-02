// les données mt3na lehna
// ne5ethha mel counter slice w nmodifiha
import { createSlice } from "@reduxjs/toolkit";
export const todoslice = createSlice({
  //  name
  name: "todo",
  initialState: [
    { title: "Read Work Emails", id: "1", isDone: true },
    { title: "Draft new website homepage", id: "2", isDone: false },
    { title: "Go to the gym", id: "3", isDone: false },
  ],
  // initialState, n7oto fiha donnees n7eb 3lihom  howa array of objects
  reducers: {
    //fassa5t el fwessto
    // el reducer tel9a fih les fonctions
    addTodo: (state, action) => {
      //create object todo
      const newTodo = { title: action.payload, id: 5, isDone: false };
      // add object to the liste  of objects in the state
      state.push(newTodo);
    },
     deletetodo :(state, action) => {
      const sts = state.filter((t) => t.id !== action.payload)
      return sts ;
     },

     edittodo :(state, action) => {
      const index = state.findIndex((e)=> e.id===action.payload)
      state[index].title=prompt('test');
      
     },

     toggleTodo: (state, action) => {
      return state.map((e)=>
      {if (e.id===action.payload){
        return{...e,isDone:!e.isDone}}
        else
        {return e}
    })
     
  },

},
});


// Action creators are generated for each case reducer function
export const { addTodo, deletetodo ,edittodo,toggleTodo} = todoslice.actions;
export default todoslice.reducer

