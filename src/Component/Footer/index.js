import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
        <div className='name text-white'>
            Berkay Nayman
        </div>
        <div className="social-media-accounts">
            <a className='text-white' href='https://www.linkedin.com/in/berkay-nayman/' alt='Berkay Nayman Linkedin Accouns Adress' rel="noreferrer" target={'_blank'}>Linkedin</a>
            <a className='text-white' href='https://github.com/berkaynayman' alt='Berkay Nayman Github Accouns Adress' rel="noreferrer" target={'_blank'}>Github</a>
        </div>
    </footer>
  )
}

export default Footer