import * as spotActions from '../../store/spots'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
function Delete() {
    const dispatch = useDispatch()
   const spots = useSelector(state=>state.spots)

   useEffect(() => {
    dispatch(spotActions.deleteSpots(1))
        }, [dispatch])

return(
    <div>
        <button onclick={(dispatch(spotActions.deleteSpots(5)),[dispatch])}>

        </button>
    </div>
)


}
export default Delete