import ApiService from './ApiService'



export async function ApiContactServices(data) {
  return ApiService.fetchData({
    url: 'http://127.0.0.1:8000/api/accounts',
    method: 'post',
    data
      
    })
}

export default ApiContactServices
