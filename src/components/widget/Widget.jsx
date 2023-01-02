import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({type}) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch(type){
    case "user":
      data={
        title:"USERS",
        isMonoey:false,
        link:"see all users",
        icon: <PersonOutlineOutlinedIcon className='icon' style={{color:"crimson", backgroundColor:"rgba(255,0,0,0.2)",}}/>,
      };
      break;
    case "order":
      data={
        title:"ORDERS",
        isMonoey:false,
        link:"see all orders",
        icon: <ShoppingCartOutlinedIcon className='icon' style={{color:"orange", backgroundColor:"rgba(255,0,0,0.2)",}}/>,
      };
      break;
    case "earning":
      data={
        title:"EARNINGS",
        isMonoey:true,
        link:"view net earnings",
        icon: <PaidOutlinedIcon className='icon' style={{color:"green", backgroundColor:"rgba(0,128,0,0.2)",}}/>,
      };
      break;
    case "balance":
      data={
        title:"BALANCE",
        isMonoey:true,
        link:"see all users",
        icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{color:"purple", backgroundColor:"rgba(128,0,0128,0.2)",}}/>,
      };
      break;
      default:
        break;
  }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMonoey && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon/>
            {diff}%
        </div>
        {data.icon }
      </div>
    </div>
  )
}

export default Widget
