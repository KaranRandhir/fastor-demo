import * as actionTypes from './actionTypes'

const initialState = {
    loading:false,
    error:false,
    resturants:[]
    }

    const reducer = (state=initialState,action) => {
        
        switch(action.type){
            case actionTypes.START_FETCHING :
                return {
                    ...state,
                    loading:true
                }
            case actionTypes.FETCH_SUCCESS :
                return {
                        ...state,
                        loading:false,
                        resturants:action.payload
                    }
            case actionTypes.FETCH_FAIL :
                return {
                    ...state,
                    loading:false,
                    error:true
                }

        }
    }

    export default reducer;