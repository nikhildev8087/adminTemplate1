export const userColumn = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230, renderCell:(params) => {
        return (
            <div className="cellWithImg">
                <img src={params.row.img} alt="avatar" className="cellImg" />
                {params.row.username}
            </div>
        )
    }
 },
 {
    field:"email", headerName:"Email", width: 230,
},
 {
    field:"age", headerName:"Age", width: 100,
},
 {
    field:"status", headerName:"Status", width: 160, renderCell:(params)=>{
        return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }
},
]


//temporary data
export const userRow = [
    {
        id:1,
        username:"Snow",
        img:"",
        status:"active",
        email:"1snow@gmail.com",
        age:35,
    },
    {
        id:2,
        username:"Lanister",
        img:"",
        status:"pending",
        email:"2snow@gmail.com",
        age:35,
    },
    {
        id:3,
        username:"John Doe",
        img:"",
        status:"passive",
        email:"3snow@gmail.com",
        age:35,
    },
    {
        id:4,
        username:"Robert",
        img:"",
        status:"active",
        email:"4snow@gmail.com",
        age:35,
    },
    {
        id:5,
        username:"Logan",
        img:"",
        status:"pending",
        email:"5snow@gmail.com",
        age:35,
    },
    {
        id:6,
        username:"Morgan",
        img:"",
        status:"active",
        email:"6snow@gmail.com",
        age:35,
    },
    {
        id:7,
        username:"Robin",
        img:"",
        status:"passive",
        email:"7snow@gmail.com",
        age:35,
    },
]