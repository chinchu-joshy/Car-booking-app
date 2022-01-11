import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { carsReducers } from './reducers/carsReducers';
import { AlertReducer } from './reducers/AlertsReducer';
import { usersReducer } from './reducers/UserReducer';
const composeEnhancers = composeWithDevTools({

});
const rootReducer=combineReducers({
carsReducers,
AlertReducer,
usersReducer



})
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)

  )
);
export default store;