import IMAGES from "./IMAGES";
import { NavLink } from "react-router-dom";
import './card.css'

const Card = ({ badge, link, TorL }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <strong>{badge}</strong>
          </div>
        </div>
        <div className="front">
          <div className="frontInner">
            <div className="img">
              <img src={TorL == "Train Now!" ? IMAGES.trainerBG : "/Images/card-bg.png" } />
            </div>
            <div className="front-content">
              <div className="description">
                <div className="title">
                  <p>
                    <strong>{badge}</strong>
                  </p>
                  <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns="http://www.w3.org/2000/svg">
                    <g style={{ mixBlendMode: 'normal' }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset="0" strokeDasharray="" strokeMiterlimit="10" strokeLinejoin="miter" strokeLinecap="butt" strokeWidth="1" stroke="none" fillRule="nonzero" fill="#20c997">
                      <g transform="scale(8,8)">
                        <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <NavLink to={link} >
                <div className="w-3/5 m-auto rounded-md text-black bg-cyan-300 text-center">{TorL}</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
