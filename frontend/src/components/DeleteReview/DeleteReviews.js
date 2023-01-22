import * as reviewActions from '../../store/reviews'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function DeleteReview(revId) {
    const history = useHistory()
    const dispatch = useDispatch()
   const reviews = useSelector(state=>state.reviews)
   const num = (window.location.href.length - 1)
   const  spotsId = (window.location.href[num])
    
    
   dispatch(reviewActions.deleteReviews(revId))
   history.push(`/spots/${spotsId}`)
        
    }

export default DeleteReview