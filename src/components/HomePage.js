import React from 'react';
import NYLLayout from './NYLLayout';
import NYLHero from './NYLHero';

const HomePage = () => {
  return (
    <NYLLayout>
      <NYLHero
        title="Welcome to New York Life"
        description="For over 175 years, we've been helping families and businesses protect their financial futures. Learn how we can help you."
        backgroundImage="/images/nyl-logo-1.png"
        ctaText="Learn More"
        ctaUrl="/about"
      />
      {/* Add more content sections here */}
    </NYLLayout>
  );
};

export default HomePage;
