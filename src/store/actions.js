import * as actionTypes from './actionTypes'
import axios from 'axios'
const startFetching = () => {
    return {
        type:actionTypes.START_FETCHING
    }
}

const fetchSuccess = (resturants) => {
    return {
        type:actionTypes.FETCH_SUCCESS,
        payload:resturants
    }
}

const fetchFail = () => {
    return {
        type:actionTypes.FETCH_FAIL
    }
}



export const fetchResturants = () => {
    return dispatch=>{
        dispatch(startFetching());
        axios.get('https://staging.fastor.in:8090/v1/m/restaurant?city_id=118&&',{
        headers:{'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjUiLCJlbWFpbCI6Ijk4MTg5Nzk1NDVAZmFzdG9yLmluIiwicGhvbmUiOiI5ODE4OTc5NTQ1IiwiZGlhbF9jb2RlIjoiKzkxIiwibGFzdF9wYXNzd29yZF91cGRhdGUiOiIyMDIwLTA5LTMwVDA1OjM4OjM3LjAwMFoiLCJpYXQiOjE2MDE0NDQzMjUsImV4cCI6MTYwODcwMTkyNX0.NQao3G9ADJOOMFSQQ-uPM37QuFzLy6WbBlOL5K3cTHg`}})
        .then(res =>{
            console.log(res.data)
            dispatch(fetchSuccess(res.data))
        })
        .catch(error => {
            console.log(error);
            
           dispatch(fetchFail(error))
        })
    }
}