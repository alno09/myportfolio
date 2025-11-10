import React from 'react'

const Button = ({ text, className }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const link = document.createElement('a');
                            link.href = '/cv/Alno_Sabetha_CV.pdf';
                            link.download = 'Alno_Sabetha_CV.pdf';
                            link.click();
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;