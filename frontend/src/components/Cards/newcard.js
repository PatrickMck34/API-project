import { csrfFetch } from '../../store/csrf'
import React from 'react'
import './Card.css' 
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import * as spotsActions from "../../store/spots"
import { useState , useEffect} from 'react'

function Card(id) {

    const dispatch=useDispatch()
    const spot = useSelector(state=> state.spots.singleSpot)
    const spots = useSelector(state=> state.spots.allSpots)
    
}