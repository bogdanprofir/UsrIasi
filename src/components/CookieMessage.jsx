
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import WelcomeMessage from './WelcomeMessage';

const CookieMessage = () => {
  const [cookies, setCookie] = useCookies(['TrafficCookie']);
  const [showMessage, setShowMessage] = useState(!cookies.TrafficCookie);

  const handleAccept = () => {
    setCookie('TrafficCookie', 'accepted', { path: '/' });
    setShowMessage(false);
  };

  const handleDecline = () => {
    setCookie('TrafficCookie', 'declined', { path: '/' });
    setShowMessage(false);
  };

  return (
    showMessage && (
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#002A59] text-white text-center">
        <WelcomeMessage onAccept={handleAccept} onDecline={handleDecline} />
      </div>
    )
  );
};

export default CookieMessage;
