import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from '@mui/material';
import Profile from '../assets/30751.jpg';
import '../styles/main.css';

function Main() {
  return (
    <div className='main'>
        <div className='main_container'>
            <div className='main_content'>
                <div className='text'>
                    <p>Hello Everyone</p>
                    <h1>I'm Pranjal</h1>
                    <p>Full Stack Developer</p>
                </div>
                <div className='icons'>
                    <FacebookIcon className='icon' />
                    <InstagramIcon className='icon' />
                </div>
                <div className='buttons'>
                    <Button>Contact Me</Button>
                    <Button>Hire Me</Button>
                </div>
            </div>
            <div className='main_img'>
                <img src={Profile} alt='profile' />
            </div>
        </div>
    </div>
  )
}

export default Main