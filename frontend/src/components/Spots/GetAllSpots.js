import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux' 
import { getAllSpots } from '../../store/spots'
// import  useFetch from 'react-fetch-hooks'

export default function getAllSpots() {
    useEffect(() => {
        fetch(`https://api/spots`)
          .then(response => response.json())
          .then((usefulData) => {
            console.log(usefulData);
            setLoading(false);
            setData(usefulData);
          })
          .catch((e) => {
            console.error(`An error occurred: ${e}`)
          });
      }, []);

      return (
        <>
          <div className="Spots">
            {loading && <p>Loading...</p>}
            {!loading && <p>Fetched data</p>}
          </div>
        </>
      )
      }
