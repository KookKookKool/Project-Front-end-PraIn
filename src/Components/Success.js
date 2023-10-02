import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Success.css';

export default function Success() {
  useEffect(() => {
    var countdownElement = document.getElementById('countdown');
    var countdownTime = 15 * 60;

    function updateCountdown() {
      var minutes = Math.floor(countdownTime / 60);
      var seconds = countdownTime % 60;

      countdownElement.innerHTML =
        (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

      countdownTime--;

      if (countdownTime < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = 'Time is up!';
      }
    }

    var countdownInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className='body1'>
      <div>
        <img src="/html1.png" alt="html1" />

        <div className="countdown-button">
          Payment Time Lift
          <div className="countdown-timer" id="countdown">
            15:00
          </div>
        </div>

        <img src="/html2.png" style={{ marginTop: '-2%' }} alt="html2" />

        <img src="/html3.png" style={{ marginTop: '-2%' }} alt="html3" />

        <div style={{ marginTop: '-42px' }}>
          <b>Please scan QR Code with your Mobile by using Mobile Banking Application</b>
          <br />
        </div>
        <div style={{ marginTop: '-56px' }}>
          using the IOS operating system or in-app browsers (such as or Facebook)
          <br />
        </div>
        <div style={{ marginTop: '-112px' }}>
          can utilize screen capture as an alternative to using the save button
          <br />
        </div>
        <div id="TextlowColor" style={{ marginTop: '-128px' }}>
          Wallet does not support the QR Payment
        </div>

        <Link to="/">
          <button id="btn3" type="button" className="btn btn-primary btn-lg" style={{ marginTop: '-48px' }}>
            Save QR Code
          </button>
        </Link>

        <footer>
          <h3 id="TextlowColor">
            <Link to="/">How To Pay</Link>
          </h3>
          <p>
            © PraIn FinTech Co., Ltd. All rights reserved.
            <br />
            Powered by PraIn FinTech Co., Ltd.
          </p>
        </footer>
      </div>
    </div>
  );
}
