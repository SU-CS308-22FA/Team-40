const API_URL = "https://backend308.onrender.com/api/playercomments"
export async function getPlayerCommentsAPI(){
    return fetch(API_URL+'/getplayercomments')
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}

export async function getSinglePlayerCommentsAPI(playerid){
    return fetch(API_URL+`/getplayercomments/${playerid}`)
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}

export async function postPlayerCommentsAPI(comment){
    return fetch(API_URL+'/postplayercomments',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
    .then(resp => {
        return resp.json()
    })
    .then(data => data)
    .catch(e => console.log(e))
}
export async function patchPlayerCommentsAPI(id, comtext){
    let todo = {
        _id: id,
        comtext: comtext
    }
    return fetch(API_URL+`/patchplayercomments/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    })
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}
export async function deletePlayerCommentsAPI(id){
    return fetch(API_URL+`/deleteplayercomments/${id}`,{
        method: "DELETE"
    })
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}
