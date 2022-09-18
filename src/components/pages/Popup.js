import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default () => (
  <Popup trigger={<button>Click Here</button>} position="right center">
    <div>This Offer Only For You</div>
  </Popup>
);