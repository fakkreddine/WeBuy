import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  coun:0,
  user:[],
  st:[],
  
  
}

export const cartslice = createSlice({
  name: 'cartslice',
  initialState,
  reducers: {
    add: (state,action) => {
      //
      state.value.push(action.payload)
    },
    del: (state,action ) => {
      //
      state.value = state.value.filter((item,index)=> {
        return index!== action.payload
    })
    
    }, sum: (state,action) => {
     
        state.coun+=action.payload
     
      //
      
    },
    moin: (state,action) => {
      //
      state.coun-=action.payload
    },
    update: (state,action) => {
      //
      state.value.forEach(element => {
        if (element[0].id==action.payload[0]) {
          element[1]=action.payload[1]
        }
      });
    },
    inti: (state) => {
      //
      state.coun=0;
      state.value=[]
    },
    add_user: (state,action) => {
      
        state.user.push(action.payload)
      
      
    
      
    },
    add_st: (state,action) => {
      
      state.st.push(action.payload)
    
    
  
    
  }
    
    
  },
})

// Action creators are generated for each case reducer function
export const {add,del,init,sum,moin,update,add_user,add_st,} = cartslice.actions

export default cartslice.reducer