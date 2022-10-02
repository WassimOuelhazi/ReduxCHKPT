import { configureStore } from '@reduxjs/toolkit'
import todoslice from './todoslice'



    export default configureStore({ 

  reducer: {todo:todoslice},
})

