import axios from 'axios'
import { GET_LEADS } from './type'

//GET LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
        .then(response => {
            dispatch({
                type: GET_LEADS,
                payload: response.data
            })
        })
        .catch(error => console(error)) 
}