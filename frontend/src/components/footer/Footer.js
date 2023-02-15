import React from 'react'
import './Footer.css'
// import img2 from '../../../assets/Home/gcard_cc.png'
// import img3 from '../../../assets/Home/gcard_sail.png'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import logo from '../../assets/navbar/lenden_logo.png'


function Footer() {
  return (
    <div className='HFooter'>
      <div className='HP_u'>
        <div className='HP_u_1'>
          <img src={logo} alt='logo' className='logo_img'></img>
        </div>
        <div className='HP_u_2'>
          <div className='HP_u_21'>
            {/* Learn More */}
          </div>
          <div className='HP_u_22'>
            {/* <li><a>About Us</a></li>
            <li><a>Projects & events</a></li>
            <li><a>How to donate</a></li>
            <li><a>Donor's report</a></li>
            <li><a>Privacy Policy</a></li>
            <li><a>FAQs</a></li> */}
            {/* <li><a>Contact Us</a></li> */}
          </div>
        </div>
        <div className='HP_u_3'>
          <div className='HP_u_3a'>
            Contact Us
          </div>
          <div className='HP_u_3b'>
            <div className='HP_u_3aba'>
              <div className='HP_u_3abaa'>Call Us: </div> 123-456-7890
            </div>
            <div className='HP_u_3abb'>
              <div className='HP_u_3abba'>Email us: </div>  <a href="mailto: siang@iitg.ac.in">siang@iitg.ac.in</a>
            </div>
          </div>
          <div className='HP_u_3c'>
            <div className='HP_u_3ba'>
              {/* Social */}
            </div>
            <div className='HP_u_3d'>
              {/* <a href="https://m.facebook.com/100063674245618/" target="_blank"><img src={fa} /></a>
              <a href="https://instagram.com/sail_iitg?igshid=YmMyMTA2M2Y=" target="_blank"><img src={insta} /></a>
              <a href="https://twitter.com/sail_iitg" target="_blank"><img src={tw} /></a>
              <a href="https://www.youtube.com/c/IITGuwahatiSAIL" target="_blank"><img src={yt} /></a> */}
            </div>
          </div>
        </div>
        <div className='HP_u_4'>
            <div className='HP_u_4a'>
                Social
            </div>
            <div className='HP_u_4b'>
              <a href="https://www.instagram.com/365_shades_of_siang/"><BsFacebook className='logo_socio'/></a>
              <a href="https://www.instagram.com/365_shades_of_siang/"><AiFillInstagram className='logo_socio'/></a>
              <a href="https://www.instagram.com/365_shades_of_siang/"><AiFillTwitterCircle className='logo_socio'/></a>
            </div>
        </div>
      </div>
      <hr />
      <div className='HP_d'>
        <div className='HP_d1'>
          <div className='HP_d_sail'>
            <div>
              An initiative by
            </div>
            {/* <img className='HP_d_sail' src={img3} /> */}
          </div>
          <div className='HP_d_cc'>
            <div>
              Designed and Developed by
            </div>
            <div className="HP-image-cont">
                {/* <img className='HP_d_cc' src={img2} />
                <img className='HP_d_sail' src={img3} /> */}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer