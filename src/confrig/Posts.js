import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Buttons from '../comp/Buttons'
import { Delete, Gets, Post, Put, Puts } from '../comp/DataHandle'


const Posts = () => {
  const [isLoading, setLoading] = useState(false)
  const [openButton, setButtonOpen] = useState(true)

  const [data, setData] = useState([])

  const getDataaa = () => {
  // Put   200 means Success
  //   Puts('posts', '1', JSON.stringify({
  //   id: 1,
  //   title: 'foo',
  //   body: 'bar',
  //   userId: 1,
  //   }) ).then((succ) => console.log(succ)
  //       // setData([...succ.data])
  //       // setLoading(false)
  //     )
  //     .catch((err) => console.log(err))

  //       // Gets('posts').then((suc) => console.log(suc)).catch((res) => console.log(res))
  // }
  // Post   201 means Success
  // Post('posts', JSON.stringify({
  //   title: 'foo',
  //   body: 'bar',
  //   userId: 1,
  //   }) ).then((succ) => console.log(succ)
  //       // setData([...succ.data])
  //       // setLoading(false)
  //     )
  //     .catch((err) => console.log(err))

  //       // Gets('posts').then((suc) => console.log(suc)).catch((res) => console.log(res))
  
  // Delete('posts','1',JSON.stringify({
  //      title: 'foo',
  //   body: 'bar',
  //   userId: 1,
  // })).then((succ) => console.log(succ)) 
  // .catch( (err) => console.log(err))
  }

  useEffect(() => {
    getDataaa()
  }, [])

  return (
    <div>
      <Box>
      <Buttons innerChl={  <TextField  />} dataSend={(e) => setButtonOpen(false)} opens={openButton}>+</Buttons> 
      {isLoading ? (
        <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831' alt="loader" />
        ) : data && data.lenght < 1 ? (<h1>No data found ...</h1>)
        : (data && data.length > 0 ? (data.map((x, i) => {
          return (
            <div key={i}>
              <h1>{x.title}</h1>
              <p>{x.body}</p>
            </div>
          )
        })) : null)}

        </Box>
    </div>
  )
}

export default Posts
