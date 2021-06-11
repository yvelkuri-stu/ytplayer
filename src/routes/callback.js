
const client_secret = import.meta.env.VITE_CLIENT_SECRET; 
const client_id = import.meta.env.VITE_CLIENT_ID; 
const token_url = 'https://github.com/login/oauth/access_token'
const user_url = 'https://api.github.com/user'


export async function get(request){
    const session=123;
    const code = request.query.get('code')
    const access_token = await getToken(code);
    const user = await getUser(access_token);
    //get token from commander
    return{
        body:JSON.stringify(user, null, 2)
        
    }
}

function getUser(access_token){
    return fetch(user_url,{
        headers:{
            accept: 'application/json',
            authorization: `Bearer ${access_token}`
        }
    }).then(r => r.json());
}
function getToken(code){

    return fetch(`${token_url}`,{
        method:'POST',
        headers:{
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({
            client_id,
            client_secret,
            code

        })
    }).then(r => r.json()).then(r => r.access_token);
}