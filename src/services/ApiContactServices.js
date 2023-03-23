import React from 'react'
import ApiService from './ApiService'



export async function ApiContactServices(data) {
  return ApiService.fetchData({
    url: 'http://localhost:8000/api/contacts/',
    method: 'post',
    data
      
    })
}

export default ApiContactServices
