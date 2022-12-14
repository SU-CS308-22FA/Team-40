const API_URL = "https://backend308.onrender.com/api/teamcomments"
export async function getTeamCommentsAPI(){
    return fetch(API_URL+'/getteamcomments')
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}

export async function getSingleTeamCommentsAPI(teamid){
    return fetch(API_URL+`/getteamcomments/${teamid}`)
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}

export async function postTeamCommentsAPI(comment){
    return fetch(API_URL+'/postteamcomments',{
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
export async function patchTeamCommentsAPI(id, comtext){
    let todo = {
        _id: id,
        comtext: comtext
    }
    return fetch(API_URL+`/patchteamcomments/${id}`,{
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
export async function deleteTeamCommentsAPI(id){
    return fetch(API_URL+`/deleteteamcomments/${id}`,{
        method: "DELETE"
    })
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}
