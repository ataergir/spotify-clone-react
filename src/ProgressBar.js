import React from 'react'

const ProgressBar = (props) => {
    const { completed } = props;
  
    const containerStyles = {
      height: "5px",
      width: '100%',
      backgroundColor: "#555"
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: "#ccc"
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          
        </div>
      </div>
    );
  };
  
  export default ProgressBar;