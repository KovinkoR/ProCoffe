import React from 'react';

import './style.css';

function GoogleAuth() {
  return (
    <>
      <a href="http://localhost:3001/google">
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" />
          </div>
          <p className="btn-text">Go with Google</p>
        </div>
      </a>
    </>
  );
}

export default GoogleAuth;
