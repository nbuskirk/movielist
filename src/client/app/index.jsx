import React from 'react'
import {render} from 'react-dom'
import movieData from 'json!../../data/movie_metadata.json'
import theaterData from 'json!../../data/theater_showtimes.json'
import styles from './styles.less'
import TheaterList from './theaterList.jsx' 

/* Render the application to the page node */
var appNode = document.getElementById('app-root')
render(<div><TheaterList theaterData={theaterData} movieData={movieData} /> </div>, appNode)
