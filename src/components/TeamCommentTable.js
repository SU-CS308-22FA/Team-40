import React from 'react'
function TeamCommentTable(props) {
const { comments, onDelete, userid } = props
return (
<div className="App mt-5">
   <table className="table table-striped">
      <thead>
         <tr>
            <th scope="col">Username</th>
            <th scope="col">Comment</th>
            <th scope="col">Delete</th>
         </tr>
      </thead>
      <tbody>
         {
         comments.map(comment => {
         return (
            
         <tr key={comment._id}>
            <td>{comment.username}</td>
            <td>{comment.comtext}</td>
            <td>
            { comment.userid === userid ? 
                <button className='btn btn-danger' disabled={comment.userid !== userid}
                onClick={() => onDelete(comment._id)}>Delete</button>
                : null 
            }
               
            </td>
         </tr>
         )
         })
         }
      </tbody>
   </table>
</div>
)
}
export default TeamCommentTable