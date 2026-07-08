import React from "react";
import SectionHeader from "../../UI/SectionHeader";
import ResourceCard from "../../UI/ResourceCard";
import physicsbook from "../../../assets/pysicsbook.jpg";

const FeaturedResources = () => {
  return (
    <div className="w-full gap-5 flex flex-col items-center">
      <SectionHeader
        title={"Featured Resources"}
        description={
          "Handpicked top rated resources trending across campuses this week"
        }
      />
      <div className="w-full flex items-center justify-around max-w-4/5">
        <ResourceCard
          image={physicsbook}
          subject="Physics"
          name="Fundamentals of Physics"
          author="H.C. Verma • IIT Delhi"
          rating={4.9}
          requestLink="/request/fundamentals-of-physics"
          featuredLabel="Featured Textbook"
          verified
        />
      </div>
    </div>
  );
};

export default FeaturedResources;
