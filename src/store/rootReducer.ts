import { combineReducers } from 'redux'
import userReducer from '@/modules/auth/store/slice'

export const rootReducer = combineReducers({ userReducer })
