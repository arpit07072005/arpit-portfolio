import React, { useState } from 'react';
import styles from '../css/Projects.module.css';
import { FaHeartbeat, FaArrowRight, FaRobot, FaShoppingCart, FaBitcoin, FaNodeJs, FaReact } from "react-icons/fa";
import { CiDatabase, CiMail } from "react-icons/ci";
import { SiRazorpay } from "react-icons/si";
import { ImCross } from "react-icons/im";
function Projects() {

  const [careconnect, setCareconnect] = useState(false);
  const [ai,setAi]= useState(false);
  const [ecommerce,setEcommerce]= useState(false);
  const [crypto,setCrypto]= useState(false);

  const handlecareconnect = () => {
    setCareconnect(false);
  }
   const handleai = () => {
    setAi(false);
  }
  const handleecommerce = () => {
    setEcommerce(false);
  }
  const handlecrypto = () => {
    setCrypto(false);
  }
  console.log(careconnect);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Featured Projects</div>
      <p className={styles.para}>
        A collection of my recent work. Hover to explore tech stack, click for details.
      </p>

      <div className={styles.box_container}>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.front}>
              <FaHeartbeat size={25} color="#ff4d4d" />
              <h3 className={styles.head}>CareConnect</h3>
              <p>Seamless healthcare and on-demand care services at your doorstep.</p>
              <div className={styles.show}>  <h6>View Details  </h6><FaArrowRight size={12} /></div>
            </div>
            <div className={styles.back}>
              <h3> Tech Stack</h3>
              <div className={styles.containericon}>
                <div className={styles.tech}> <FaReact />React</div>
                <div className={styles.tech}><CiDatabase strokeWidth='1px' />MongoDB</div>
                <div className={styles.tech}><FaNodeJs />Express</div>
                <div className={styles.tech}><SiRazorpay />Razorpay</div>
                <div className={styles.tech}><CiMail />NodeMailer</div>
              </div>
              <div className={styles.links}>
                <a href="" className={styles.link}>website</a>
                <div className={styles.more} onClick={() => setCareconnect(true)}>Click for more<FaArrowRight size={12} /></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.front}>
              <FaRobot size={25} color="#4b6cb7" />
              <h3 className={styles.head}>AI Interview</h3>
              <p>Practice and prepare for interviews with intelligent, real-time feedback.</p>
              <div className={styles.show}>  <h6>View Details  </h6><FaArrowRight size={12} /></div>
            </div>
            <div className={styles.back}>
              <h3> Tech Stack</h3>
              <div className={styles.containericon}>
                <div className={styles.tech}> <FaReact />React</div>
                <div className={styles.tech}><CiDatabase strokeWidth='1px' />MongoDB</div>
                <div className={styles.tech}><FaNodeJs />Express</div>
                <div className={styles.tech}><SiRazorpay />Razorpay</div>
                <div className={styles.tech}><CiMail />NodeMailer</div>
              </div>
              <div className={styles.links}>
                <a href="" className={styles.link}>website</a>
                <div className={styles.more} onClick={() => setAi(true)}>Click for more<FaArrowRight size={12} /></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.front}>
              <FaShoppingCart size={25} color="#ff6f61" />
              <h3 className={styles.head}>E-Commerce</h3>
              <p> Seamless, secure, and personalized online shopping at your fingertips.</p>
              <div className={styles.show}>  <h6>View Details  </h6><FaArrowRight size={12} /></div>
            </div>
            <div className={styles.back}>
              <h3> Tech Stack</h3>
              <div className={styles.containericon}>
                <div className={styles.tech}> <FaReact />React</div>
                <div className={styles.tech}><CiDatabase strokeWidth='1px' />MongoDB</div>
                <div className={styles.tech}><FaNodeJs />Express</div>
                <div className={styles.tech}><SiRazorpay />Razorpay</div>
                <div className={styles.tech}><CiMail />NodeMailer</div>
              </div>
              <div className={styles.links}>
                <a href="" className={styles.link}>website</a>
                <div className={styles.more}onClick={() => setEcommerce(true)}>Click for more<FaArrowRight size={12} /></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.front}>
              <FaBitcoin size={25} color="#f7931a" />
              <h3 className={styles.head}>Crypto Currency</h3>
              <p>Real-time cryptocurrency prices and interactive market charts at a glance.</p>
              <div className={styles.show}>  <h6>View Details  </h6><FaArrowRight size={12} /></div>
            </div>
            <div className={styles.back}>
              <h3> Tech Stack</h3>
              <div className={styles.containericon}>
                <div className={styles.tech}> <FaReact />React</div>
                <div className={styles.tech}><CiDatabase strokeWidth='1px' />MongoDB</div>
                <div className={styles.tech}><FaNodeJs />Express</div>
                <div className={styles.tech}><SiRazorpay />Razorpay</div>
                <div className={styles.tech}><CiMail />NodeMailer</div>
              </div>
              <div className={styles.links}>
                <a href="" className={styles.link}>website</a>
                <div className={styles.more}onClick={() => setCrypto(true)}>Click for more<FaArrowRight size={12} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {(careconnect) && (
        <div className={styles.popup}>
          <div className={styles.innerpopup}>
            <div className={styles.popheading}>
              <h3 className={styles.pophead}>CareConnect</h3>
              <ImCross onClick={handlecareconnect} className={styles.cut} />
            </div>
            <p className={styles.poppara}>Caregiver booking platform with secure payments, Aadhaar verification, and real-time messaging</p>
            <h3 className={styles.pophead}>Description</h3>
            <p className={styles.poppara}>A full-stack caregiver booking platform enabling patients and elderly individuals to request professional caregivers for hospital visits, home assistance, or daily care needs. Features include caregiver identity verification with Aadhaar upload, secure Razorpay payments, and booking confirmations via Nodemailer messaging.</p>
            <h3 className={styles.pophead}>Tech Stack</h3>
            <div className={styles.containericon}>
              <div className={styles.Tech}> <FaReact />React</div>
              <div className={styles.Tech}><CiDatabase strokeWidth='1px' />MongoDB</div>
              <div className={styles.Tech}><FaNodeJs />Express</div>
              <div className={styles.Tech}><SiRazorpay />Razorpay</div>
              <div className={styles.Tech}><CiMail />NodeMailer</div>
            </div>
            <h3 className={styles.pophead}>Key Highlights</h3>
            <ul>
              <li className={styles.pophead}>Built caregiver registration & booking system with Aadhaar-based document upload and validation</li>
              <li className={styles.pophead}>Integrated Razorpay payment gateway for secure and seamless caregiver service payments</li>
              <li className={styles.pophead}>Implemented Nodemailer-based email system for booking confirmations, status updates, and notifications</li>
              <li className={styles.pophead}>Optimized Node.js backend with secure APIs, validation, and error handling for reliable booking flow</li>
            </ul>
          </div>
        </div>
      )}
       {(ai) && (
        <div className={styles.popup}>
          <div className={styles.innerpopup}>
            <div className={styles.popheading}>
              <h3 className={styles.pophead}>AI Interview System</h3>
              <ImCross onClick={handleai} className={styles.cut} />
            </div>
            <p className={styles.poppara}>Voice-based AI interview platform with OpenAI Gemini, speech recognition, and real-time interaction</p>
            <h3 className={styles.pophead}>Description</h3>
            <p className={styles.poppara}>An interactive AI-powered interview platform where candidates can practice interviews through real-time voice interaction. The system leverages OpenAI Gemini for generating intelligent interview questions and evaluating answers, while Vapi AI and browser voice recognition ensure smooth voice-based communication.</p>
            <h3 className={styles.pophead}>Tech Stack</h3>
            <div className={styles.containericon}>
              <div className={styles.Tech}> <FaReact />React</div>
              <div className={styles.Tech}><CiDatabase strokeWidth='1px' />MongoDB</div>
              <div className={styles.Tech}><FaNodeJs />Express</div>
              <div className={styles.Tech}><SiRazorpay />Vapi ai</div>
              <div className={styles.Tech}><CiMail />open ai gimini</div>
            </div>
            <h3 className={styles.pophead}>Key Highlights</h3>
            <ul>
              <li className={styles.pophead}>Built voice-based interview system where candidates speak answers and receive AI-driven feedback/questions in real time</li>
              <li className={styles.pophead}>Integrated OpenAI Gemini to generate domain-specific interview questions dynamically</li>
              <li className={styles.pophead}>Optimized Node.js backend for handling AI requests, session management, and secure API calls</li>
              <li className={styles.pophead}>Implemented Vapi AI + Web Speech API for accurate voice recognition and text-to-speech responses</li>
            </ul>
          </div>
        </div>
      )}
      {(ecommerce) && (
        <div className={styles.popup}>
          <div className={styles.innerpopup}>
            <div className={styles.popheading}>
              <h3 className={styles.pophead}>E-Commerce Store</h3>
              <ImCross onClick={handleecommerce} className={styles.cut} />
            </div>
            <p className={styles.poppara}>Full-stack e-commerce platform with product catalog, cart, and Razorpay integration</p>
            <h3 className={styles.pophead}>Description</h3>
            <p className={styles.poppara}>An interactive AI-powered interview platform where candidates can practice interviews through real-time voice interaction. The system leverages OpenAI Gemini for generating intelligent interview questions and evaluating answers, while Vapi AI and browser voice recognition ensure smooth voice-based communication.</p>
            <h3 className={styles.pophead}>Tech Stack</h3>
            <div className={styles.containericon}>
              <div className={styles.Tech}> <FaReact />React</div>
              <div className={styles.Tech}><CiDatabase strokeWidth='1px' />MongoDB</div>
              <div className={styles.Tech}><FaNodeJs />Express</div>
              <div className={styles.Tech}><SiRazorpay />Razorpay</div>
              <div className={styles.Tech}><CiMail />DummyJSON API</div>
            </div>
            <h3 className={styles.pophead}>Key Highlights</h3>
            <ul>
              <li className={styles.pophead}>Integrated DummyJSON API to dynamically fetch products, categories, and cart data for a realistic store experience</li>
              <li className={styles.pophead}>Implemented cart management system with add/remove/update quantity functionality and price calculation</li>
              <li className={styles.pophead}>Integrated Razorpay payment gateway for secure checkout and order completion</li>
              <li className={styles.pophead}>Optimized backend with Node.js for managing checkout, payment verification, and error handling</li>
            </ul>
          </div>
        </div>
      )}
      {(crypto) && (
        <div className={styles.popup}>
          <div className={styles.innerpopup}>
            <div className={styles.popheading}>
              <h3 className={styles.pophead}>Crypto Currency Tracker</h3>
              <ImCross onClick={handlecrypto} className={styles.cut} />
            </div>
            <p className={styles.poppara}>Real-time cryptocurrency tracking platform with live charts and price analytics</p>
            <h3 className={styles.pophead}>Description</h3>
            <p className={styles.poppara}>A cryptocurrency tracking platform that provides live market data for multiple currencies using the CoinGecko API. The system allows users to track price changes, view currency-specific details, and analyze trends with interactive graphs and charts.</p>
            <h3 className={styles.pophead}>Tech Stack</h3>
            <div className={styles.containericon}>
              <div className={styles.Tech}> <FaReact />React</div>
              <div className={styles.Tech}><CiDatabase strokeWidth='1px' />MongoDB</div>
              <div className={styles.Tech}><FaNodeJs />Express</div>
              <div className={styles.Tech}><SiRazorpay />CoinGecko API</div>
              <div className={styles.Tech}><CiMail />chart.js</div>
            </div>
            <h3 className={styles.pophead}>Key Highlights</h3>
            <ul>
              <li className={styles.pophead}>Integrated CoinGecko API to fetch real-time cryptocurrency prices, market cap, and historical data</li>
              <li className={styles.pophead}>Built interactive charts and graphs for tracking price trends of multiple currencies</li>
              <li className={styles.pophead}>Designed a clean, responsive UI with CSS for better accessibility and usability</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
