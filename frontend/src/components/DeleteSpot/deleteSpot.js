import * as spotActions from '../../store/spots'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Delete() {
    const history = useHistory()
    const dispatch = useDispatch()
   const spots = useSelector(state=>state.spots)
   const num = (window.location.href.length - 1)
   const  spotsId = (window.location.href[num])

   return dispatch(spotActions.deleteSpots(spotsId)).then(history.push('/'))
}

export default Delete