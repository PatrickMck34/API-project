import * as spotActions from '../../store/spots'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
function Delete() {
    const dispatch = useDispatch()
   const spots = useSelector(state=>state.spots)
   const num = (window.location.href.length - 1)
   const  spotsId = (window.location.href[num])


return(
    <div>
        <button onclick={(dispatch(spotActions.deleteSpots(spotsId)),[dispatch])}>

        </button>
    </div>
)


}
export default Delete