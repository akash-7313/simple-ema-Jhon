import React from 'react';
import img from '../../images/giphy.gif'

const PlaceOrder = () => {
    const imgPosition = {
        textAlign: 'center',
        padding:'10px'
    }
    return (
      <div style={imgPosition}>
        <img src={img} alt="" />
      </div>
    );
};

export default PlaceOrder;