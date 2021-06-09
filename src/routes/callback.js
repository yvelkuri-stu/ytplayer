
const secret = import.meta.env.VITE_CLIENT_SECRET; 
const client = import.meta.env.VITE_CLIENT_ID; 
const target = 'https://github.com/login/oauth/authorize'


export async function get(request){
    const session=123;
    const code = request.query.get('code')
    return{
        body:'received code'+code
        
    }
}