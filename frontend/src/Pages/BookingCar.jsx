import React,{useEffect} from 'react'
import DefaultLayout from '../Components/DefaultLayout'
import {useSelector,useDispatch} from 'react-redux'
import {getAllCars} from '../Redux/actions/carsActions'
import { checkUser } from '../Redux/actions/userAction'
function BookingCar() {
    const {cars} = useSelector(state => state.carsReducers)
    const {loading} = useSelector(state => state.AlertReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkUser())
       dispatch(getAllCars())
    }, [])
    return (
       <DefaultLayout>
            ghcjh                     
       </DefaultLayout>
    )
}

export default BookingCar
