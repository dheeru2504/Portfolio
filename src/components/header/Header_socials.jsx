import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'

const header_socials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/dheeraj-kumar-972aaa215/" target="_blank"><BsLinkedin /></a>  {/*target-blank is  to open the link in new tab*/}
      <a href="https://github.com/Dheeru-k" target="_blank"><FaGithub /></a>
      {/* <a href="https://google.com" target="_blank"><AiFillTwitterCircle/></a> */}
    </div>
  )
}

export default header_socials