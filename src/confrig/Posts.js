import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Buttons from '../comp/Buttons'
import { Delete, Gets, Post, Put, Puts } from '../comp/DataHandle'


const Posts = () => {
  // const [isLoading, setLoading] = useState(false)
  var [openButton, setButtonOpen] = useState(false)
  var [opens, setOpens] = useState(false)
  
  
 
  
  
  var setButtonOpen = (e)=>{
    if(e === true){
      setOpens(true)
    }else{
      setOpens(false)
    }
   
  }
  
  return (
    <div>
      <Box>
    <Buttons opens={opens} setButtonOpen={setButtonOpen}>+</Buttons> 




      {/* <Buttons  dataSend={(e) => console.log(e)} opens={openButton} >+</Buttons>  */}
      {/* {isLoading ? (
        <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831' alt="loader" />
        ) : data && data.lenght < 1 ? (<h1>No data found ...</h1>)
        : (data && data.length > 0 ? (data.map((x, i) => {
          return (
            <div key={i}>
              <h1>{x.title}</h1>
              <p>{x.body}</p>
            </div>
          )
        })) : null)} */}

        </Box>
    </div>
  )
}

export default Posts
