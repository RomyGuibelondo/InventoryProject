import React from 'react'
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid'


function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
        return (
          <div className='userListUser'>
            <img src={params.row.avatar} alt=""/>
            {params.row.username}
          </div>
        )
    } },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 145,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },

  ];
  
  const rows = [
    { id: 1, username: 'Snow', email: 'Jon@gmail.com', status:"active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=" },
    { id: 2, username: 'Lannister', email: 'Cersei@gmail.com', status:"active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=" },
    { id: 3, username: 'Lannister', email: 'Jaime@gmail.com', status:"active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=" },
    { id: 4, username: 'Stark', email: 'Arya@gmail.com', status:"active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=" },
    { id: 5, username: 'Targaryen', email: 'Daenerys@gmail.com', status:"active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=" },
    { id: 6, username: 'Melisandre', email: 'melisandre@gmail.com', status:"active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=" },
    { id: 7, username: 'Clifford', email: 'Ferrara@gmail.com', status:"active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=" },
    { id: 8, username: 'Frances', email: 'Rossini@gmail.com', status: "active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="},
    { id: 9, username: 'Roxie', email: 'Harvey@gmail.com', status:"active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="},
    { id: 10, username: 'Snow', email: 'Jon@gmail.com', status: "active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="},
    { id: 11, username: 'Lannister', email: 'Cersei@gmail.com', status: "active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="},
    { id: 12, username: 'Lannister', email: 'Jaime@gmail.com', status: "active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="},
    { id: 13, username: 'Stark', email: 'Arya@gmail.com', status:"active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="},
    { id: 14, username: 'Targaryen', email: 'Daenerys@gmail.com', status:"active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=" },
    { id: 15, username: 'Melisandre', email: 'melisadre@gmail.com', status:"active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=" },
    { id: 16, username: 'Clifford', email: 'Ferrara@gmail.com', status:"active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="},
    { id: 17, username: 'Frances', email: 'Rossini@gmail.com', status:"active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="},
    { id: 18, username: 'Roxie', email: 'Harvey@gmail.com', status:"active", transaction:"$123.00", avatar:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="},
  ];
  return (
    <div className='userList'>
      <DataGrid
        rows={rows}
        columns={columns}
        pstatusSize={10}
        rowsPerPstatusOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList