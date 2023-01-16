export const baseUrl = 'https://sandbox.belvo.com'

export const getToken =()=>{
    let token = ''
    token += localStorage.getItem('username')
    token += ':'
    token += localStorage.getItem('password')
    token = btoa(token)
    return 'Basic '+token
}
