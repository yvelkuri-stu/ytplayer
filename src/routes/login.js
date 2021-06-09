
const secret = import.meta.env.VITE_CLIENT_SECRET; 
const client = import.meta.env.VITE_CLIENT_ID; 
const target = 'https://github.com/login/oauth/authorize'


export async function get(request){
    const session=123;
    return{
        status:302,
        headers:{
            location:`${target}?client_id=${client}&state=${session}`
        }
    }
}