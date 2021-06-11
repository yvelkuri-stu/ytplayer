
const client_secret = import.meta.env.VITE_CLIENT_SECRET; 
const client_id = import.meta.env.VITE_CLIENT_ID; 
const token_url = 'https://github.com/login/oauth/access_token'


export async function get(request){
    const session=123;
    const code = request.query.get('code')
    const access_token = await getToken(code);
    //get token from commander
    return{
        body:'received code'+code + 'token::'+access_token
        
    }
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