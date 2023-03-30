import ApiService from '../ApiService'



export async function GetAccountsServices(data) {
  return ApiService.fetchData({
    url: 'http://127.0.0.1:8000/api/accounts/',
    method: 'GET',
    data
      
    })
}

export async function PostAccountsServices(data) {
  return ApiService.fetchData({
    url: 'http://127.0.0.1:8000/api/accounts/',
    method: 'POST',
    data
    })
}


export async function DeleteAccountsServices(data) {
  return ApiService.fetchData({
    url: 'http://127.0.0.1:8000/api/accounts/',
    method: 'DELETE',
    data
      
    })
}

 
export async function PutAccountsServices(data) {
  return ApiService.fetchData({
    url: 'http://127.0.0.1:8000/api/accounts/',
    method: 'PUT',
    data
      
    })
}

export async function PatchAccountsServices(data) {
  return ApiService.fetchData({
    url: 'http://127.0.0.1:8000/api/accounts/',
    method: 'PATCH',
    data
      
    })
}