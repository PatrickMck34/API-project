import * as reviewActions from '../../store/reviews'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
function DeleteReview() {
    const history = useHistory()
    const dispatch = useDispatch()
   const reviews = useSelector(state=>state.reviews.allReviews)
   const num = (window.location.href.length - 1)
   const  spotsId = (window.location.href[num])


return(

        dispatch(reviewActions.deleteReviews())

      
    
)


}
export default DeleteReview