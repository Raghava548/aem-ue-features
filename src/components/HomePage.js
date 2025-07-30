import React from "react";
import NYLLayout from "./NYLLayout";
import NYLHero from "./NYLHero";
import NYLSection from './NYLSection';
import NYLColumns from './NYLColumns';
import NYLCard from './NYLCard';
import piggybackImage from "../images/piggyback_ride.png";
import heartIcon from "../images/heart.svg";
import targetIcon from "../images/target.svg";
import plantIcon from "../images/plant.svg";

const HomePage = () => {
  return (
    <NYLLayout>
      <NYLHero
        title="Welcome to New York Life"
        description="For over 175 years, we've been helping families and businesses protect their financial futures. Learn how we can help you."
        backgroundImage={piggybackImage}
        ctaText="Learn More"
        ctaUrl="/about"
      />
      <NYLSection backgroundColor="gray" sectionId="features">
        <NYLColumns
          columnId="feature-cards"
          gapSize="large"
          columns={[
            <NYLCard
              cardId="card1"
              title="Life Insurance"
              description="Protect your family's future with our comprehensive life insurance options."
              image={heartIcon}
              imageAlt="Heart icon representing life insurance protection"
              ctaText="Learn More"
              ctaUrl="/insurance"
            />,
            <NYLCard
              cardId="card2"
              title="Investments"
              description="Grow your wealth with our expert investment strategies."
              image={targetIcon}
              imageAlt="Target icon representing investment goals"
              ctaText="Explore Options"
              ctaUrl="/investments"
              variant="featured"
            />,
            <NYLCard
              cardId="card3"
              title="Retirement"
              description="Plan for a secure retirement with our retirement solutions."
              image={plantIcon}
              imageAlt="Plant icon representing growth and retirement planning"
              ctaText="Start Planning"
              ctaUrl="/retirement"
              variant="outline"
            />,
          ]}
        />
      </NYLSection>
      {/* Add more content sections here */}
    </NYLLayout>
  );
};

export default HomePage;
