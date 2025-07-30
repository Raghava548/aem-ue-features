import React from 'react';
import NYLLayout from './NYLLayout';
import NYLHeader from './NYLHeader';

const AboutPage = () => {
  return (
    <NYLLayout>
      <NYLHeader 
        content={
          <>
            <h1>About New York Life</h1>
            <p>Since 1845, we've been helping people build better futures. Learn about our history, our mission, and our commitment to you.</p>
          </>
        }
      />
      {/* Add more content sections here */}
    </NYLLayout>
  );
};

export default AboutPage;
