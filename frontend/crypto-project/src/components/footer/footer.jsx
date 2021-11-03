import React from 'react'
import { BiCopyright } from "react-icons/bi";
import "../footer/footer.scss"

const Footer = () => {
  return (
    <div className ="p-0 d-flex justify-content-start align-items-center">
      <ul className = "footer p-0 m-0 ">
      <BiCopyright/> 
        <li>Salim Abdala </li>
        <li>Isher Sagay </li>
        <li>JRizzle</li>
        <li>Angaar Uriakhil </li>
        <li>Wei-Tong Tang</li>
      </ul>
    </div>
  )
}

export default Footer
