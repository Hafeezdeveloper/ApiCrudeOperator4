
import axios from 'axios'
import React from 'react'

const dataHandle = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

const Gets = (endpoint) =>{
        return dataHandle.get(endpoint)
}


const Post = (endpoint,body) =>{
    return dataHandle.post(`${endpoint}`,body)
}

const Puts = (endpoint,id,body) =>{
    return dataHandle.put(`${endpoint}/${id}`,body)
}

const Delete = (endpoint,id,body) =>{
    return dataHandle.put(`${endpoint}/${id}`,body)
}

export {Gets,Post,Puts,Delete }
