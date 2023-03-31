import React, { useEffect, useState } from 'react'
import './Preloader.css'
import ReactLoading from 'react-loading'

import { Navbar } from '../Navbar/Navbar'

function Preloader() {
  const [data, setData] = useState([])

  const [done, setDone] = useState(undefined)

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())

        .then((json) => {
          setData(json)

          setDone(true)
        })
    }, 2000)
  }, [])

  return (
    <>
      {!done ? (
        <ReactLoading className='loading' type={'bars'} color={'#03fc4e'} height={80} width={80} />
      ) : (
        <Navbar />
      )}
    </>
  )
}
export default Preloader
