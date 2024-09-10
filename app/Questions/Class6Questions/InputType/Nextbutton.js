import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

const Nextbutton = ({ handleGotit, seconds }) => {
  const [countdown, setCountdown] = useState(seconds);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      handleGotit(); 
    }
  }, [countdown, handleGotit]);

  return (
    <Button
      variant="contained"
      onClick={handleGotit}
      style={{
        backgroundColor: countdown < 5 ? 'rgb(244, 67, 54)' : 'rgb(66, 165, 245)',
        color: 'black'
      }}
    >
      Next ({countdown})
    </Button>
  );
};

export default Nextbutton;
