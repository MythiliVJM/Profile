import React from "react";
import "./progress.css";
// import ProgressBar from './images/progressBar-half.png';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function progress() {
  const percentage = 53;
  return (
    <div>
      <div className="your-profile">
        <div className="profile-heading">
          <h3>Complete Your Profile</h3>
        </div>
        <div className="progress-completion">
          {/* <img className='progressBar-img' src={ProgressBar} alt='progressimg'></img> */}
          <div style={{ width: 110, height: 110 }}>
                  <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
          {/* <CircularProgressbar value={percentage}>
            <div style={{ fontSize: 12, marginTop: -5,}}>
              <strong>73%</strong>completed
            </div>
          </CircularProgressbar> */}
          
          <div className="progress-detail">
            <p>General Information</p>
            <p>Family Information </p>
          </div>
        </div>
      </div>
    </div>
  );
}
