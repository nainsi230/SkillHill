import React from 'react';
import './contentSection.css'; 

const ContentSection = ({ heading, para1, para2, imageUrl }) => {
  return (
    <section className="content-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side: Text content */}
          <div className="col-md-6">
            <h2 className="display-3 mb-4">{heading}</h2>
            <p className="lead mb-4">{para1}</p>
            <p className="mb-4">{para2}</p>
          </div>
          
          {/* Right side: Image */}
          <div className="col-md-6">
            <img src={imageUrl} alt="Content" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
