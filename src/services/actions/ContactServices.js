import ApiService from '../ApiService'



export async function GetContactServices(data) {
  return ApiService.fetchData({
    url: 'http://127.0.0.1:8000/api/contacts/',
    method: 'GET',
    data
      
    })
}

export async function PostContactServices(data) {
  return ApiService.fetchData({
    url: 'http://127.0.0.1:8000/api/contacts/',
    method: 'POST',
    data
    })
}


export async function DeleteContactServices(data) {
  return ApiService.fetchData({
    url: 'http://127.0.0.1:8000/api/contacts/',
    method: 'DELETE',
    data
      
    })
}

 
export async function PutContactServices(data) {
  return ApiService.fetchData({
    url: 'http://127.0.0.1:8000/api/contacts/',
    method: 'PUT',
    data
      
    })
}

export async function PatchContactServices(data) {
  return ApiService.fetchData({
    url: 'http://127.0.0.1:8000/api/contacts/',
    method: 'PATCH',
    data
      
    })
}