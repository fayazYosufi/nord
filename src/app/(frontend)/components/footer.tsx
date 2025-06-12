import React from 'react'
import Logo from './miniComponents/Logo'

const Footer = () => {
  const theme = {colorMain:'#003669', coloraccent:'rgb(37 105 156)', bgColorMain:'rgb(242 242 242)', bgcolorFooter:'rgb(6 60 111)'}

  return (
    <div className='cWhite mb_p1 mb_gap2' style={{backgroundColor:theme.bgcolorFooter, minHeight:'300px', padding:'4rem 6rem 1rem 6rem'}}>
      <div className='dFlex jcsb mb_flexCol cols gap2' >
        <div className="mb_dFlex mb_jcc"><Logo /></div>

          <div className='dFlex jcsb w70 tb_w100 mb_flexColRev'>
            <div className='dFlex jcsb mb_flexCol col3 tb_w100 gap4 mb_tac mb_gap1'>
              <div className='fsMd'>contact</div>
              <div className='dGrid'>
                <div className="jklj">
                  <div className='oneLine hoverOpcity m5'>Phone : +49 (0)40 - 207 693 22</div>
                  <div className='oneLine hoverOpcity m5'>FAX : +49 (0)40 - 207 693 23</div>
                  <div className='oneLine hoverOpcity m5'>Email : info@seo-nord.com</div>
                </div>

                <div className="mb_tac">
                  <div className='oneLine hoverOpcity m5'>Telgram</div>
                  <div className='oneLine hoverOpcity m5'>Whatsaap</div>
                  <div className="dFlex jcc gap1_5" style={{fontSize:'1.25rem', marginTop:'2rem'}}>
                    <div><i className="fa fa-brands fa-linkedin fa-lg"></i></div>
                    <div><i className="fa fa-brands fa-x-twitter fa-lg"></i></div>
                    <div><i className="fa fa-brands fa-facebook fa-lg"></i></div>
                    <div><i className="fa fa-brands fa-square-instagram fa-lg"></i></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col3 mb_tac'>
              <div className='hoverOpcity m5'>Jobs/Vacancies</div>
              <div className='hoverOpcity m5'>Certification from SEO Nord</div>
              <div className='hoverOpcity m5'>Range of services</div>
              <div className='hoverOpcity m5'>Terms and Conditions</div>
              <div className='hoverOpcity m5'>Privacy Policy</div>
              <div className='hoverOpcity m5'>imprint</div>
              <div className='hoverOpcity m5'>Pursue</div>
              
            </div>
          </div>

      </div>

      <div className='dFlex jcsa ' style={{position:'relative', margin:'5rem auto 1rem', color: `${theme.coloraccent} !important` }}>
        <div>@ Cppy 2025</div>
        <div>Privacy</div>
      </div>
    </div>
  )
}

export default Footer