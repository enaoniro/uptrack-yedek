
//puser auth0 dan gelen user bilgileri
//bu bilgi buradan backende userroutera gonderiliyor.
async function checkAuthenticatedUser(pUser){
    console.log(pUser)
    
    const response = await fetch('http://localhost:3001/api/v1/users/check', {
        method: 'post',
        body: JSON.stringify(pUser),
        headers: { "Content-Type": "application/json" }
    })
    
    return  response.json();
     
}

export {checkAuthenticatedUser}