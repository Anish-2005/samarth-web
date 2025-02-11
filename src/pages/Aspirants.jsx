import React from 'react';
import PropTypes from 'prop-types';
import "../scss/component/aspirants.scss"
import img from "../assets/images/background/reddot.png"
import thumbnail1 from "../assets/images/thumbnail/video1.jpg"
import PageTitle from '../components/pagetitle/PageTitle';

function Aspirants(props) {
    return (
        <div className='wrapper'>
            <PageTitle title='For Aspirants' desc="Your Preparation Zone" />
            <div className="block-text center">
                <h3 className='heading'>Upcoming Exams</h3>

                <div className='topic' >
                    <div className="Upcoming_exams"><img className='reddot' src={img} alt="dot" />
                        3 Feb 2024 - GATE - Gratitide Aptitude Test In Engineering
                    </div>
                    <div className="Upcoming_exams"><img className='reddot' src={img} alt="dot" />
                        26 May 2024 - UPSC (prelims) - Union Public Service Commission
                    </div>
                    <div className="Upcoming_exams"><img className='reddot' src={img} alt="dot" />
                        20 Sept 2024 - UPSC (mains) - Union Public Service Commission
                    </div>
                    <div className="Upcoming_exams"><img className='reddot' src={img} alt="dot" />
                        June 2024 - WBCS - West Bengal Public Service Commission
                    </div>
                </div>

            </div>

            <div className="block-text center">
                <h3 className="heading"  >Video Resources</h3>
                <div className='topic'>
                    <div className=" videos ">
                        <div className="video-container">
                            <div className="video-box"><a target='_blank' href="https://youtu.be/f3BPJxJ3JwE?si=SRhuBDIx52nhvEM1">
                                <img className='video-box' src={thumbnail1} alt="1" /></a>
                            </div>
                            <div className="video-title"><a target='_blank' href='https://youtu.be/f3BPJxJ3JwE?si=SRhuBDIx52nhvEM1'>
                                <p>How to fill OMR Sheet in Mock Test & Prelims Exams | Drishti IAS</p>
                            </a>
                            </div>
                        </div>
                        <div className="video-container">
                            <div className="video-box">
                                <img className='video-box' src={thumbnail1} alt="1" />

                            </div>
                            <div className="video-title">
                                <p>Video Title</p>
                            </div>
                        </div>
                        <div className="video-container">
                            <div className="video-box">

                            </div>
                            <div className="video-title">
                                <p>Video Title</p>
                            </div>
                        </div>
                        <div className="video-container">
                            <div className="video-box">

                            </div>
                            <div className="video-title">
                                <p>Video Title</p>
                            </div>
                        </div>
                        <div className="video-container">
                            <div className="video-box">

                            </div>
                            <div className="video-title">
                                <p>Video Title</p>
                            </div>
                        </div>
                        <div className="video-container">
                            <div className="video-box">

                            </div>
                            <div className="video-title">
                                <p>Video Title</p>
                            </div>
                        </div>
                        <div className="video-container">
                            <div className="video-box">

                            </div>
                            <div className="video-title">
                                <p>Video Title</p>
                            </div>
                        </div>
                        <div className="video-container">
                            <div className="video-box">

                            </div>
                            <div className="video-title">
                                <p>Video Title</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="block-text center">
                  <h3 className="heading"  >Channels To Follow</h3>
                  <div class="channel-section">
                     <div class="channel-container">
                         <img class="channel-box" /> 
                           <div class="channel-name">
                             <p>Channel Name</p>
                           </div>
                     </div>
                     <div class="channel-container">
                         <img class="channel-box" /> 
                            <div class="channel-name">
                              <p>Channel Name</p>
                            </div>
                     </div>
                       
                     <div class="channel-container">
                         <img class="channel-box" /> 
                           <div class="channel-name">
                              <p>Channel Name</p>
                          </div>
                     </div>
                    
                     <div class="channel-container">
                         <img class="channel-box" /> 
                            <div class="channel-name">
                              <p>Channel Name</p>
                           </div>
                     </div>   

                     <div class="channel-container">
                         <img class="channel-box" /> 
                           <div class="channel-name">
                              <p>Channel Name</p>
                         </div>
                     </div>

                     <div class="channel-container">
                         <img class="channel-box" /> 
                           <div class="channel-name">
                              <p>Channel Name</p>
                         </div>
                     </div>
                  </div>
             </div>
             <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
             <div className="block-text center">
                  <h3 className="heading"  >Official Websites</h3>
                  <div class="website-section">
                     <div class="website-container">
                         <img class="website-box"/>  
                           <div className="website-name">
                             <p>Website Name</p>
                           </div>
                        </div>
                        
                       
                     <div class="website-container">
                         <img class="website-box" />
                           <div className="website-name">
                             <p>Website Name</p>
                           </div>
                        </div>
                        
                   
                     <div class="website-container">
                         <img class="website-box" />
                           <div className="website-name">
                             <p>Website Name</p>
                           </div>
                        </div>
                       
                        
                     <div class="website-container">
                         <img class="website-box" />
                           <div className="website-name">
                             <p>Website Name</p>
                           </div>
                        </div>
                </div>
                        
                        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                        </div>
            
            </div>
    );
    
}

export default Aspirants;