import { combineReducers } from 'redux'
import caption from './caption'
import task from './task'


export default combineReducers({
task:task,caption:caption
})