import React from 'react';
import './TicketBtn.css';

// lib
import { TiTicket } from 'react-icons/ti';


const TicketBtn = () => {
  return (
    <button type='button' className='ticket__btn'>Buy Tickets <TiTicket/></button>
  )
}

export default TicketBtn