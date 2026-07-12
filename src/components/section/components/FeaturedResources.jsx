import React from "react";
import SectionHeader from "../../UI/SectionHeader";
import ResourceCard from "../../UI/ResourceCard";
import physicsbook from "../../../assets/pysicsbook.jpg";
import EcoBook from "../../../assets/ecobook.jpg";
import Maths from "../../../assets/mathsformula.jpg";
import DSA from "../../../assets/dsabook.jpg";
const FeaturedResources = () => {
  const resources = [
    {
      image: physicsbook,
      subject: "Physics",
      name: "Fundamentals of Physics",
      author: "H.C. Verma • IIT Delhi",
      rating: 4.9,
      requestLink: "/request/fundamentals-of-physics",
      // featuredLabel: "Featured Textbook",
      // verified: true,
    },
    {
      image: EcoBook,
      subject: "ECONOMICS",
      name: "Mordern Microeconomics",
      author: "A. Koutsoyiannis • SRCC",
      rating: 4.7,
      requestLink: "/request/introduction-to-environmental-science",
    },
    {
      image: Maths,
      subject: "Mathematics",
      name: "Calculus III : Full Notes",
      author: "Shared by Sarah M. • MIT",
      rating: 5.0,
      requestLink: "/request/mathematical-formulas",
    },
    {
      image: DSA,
      subject: "Computer Science",
      name: "Data Structures and Algo",
      author: "Narsimha Karumanchi",
      rating: 4.8,
      requestLink: "/request/fundamentals-of-physics",
      // featuredLabel: "Featured Textbook",
      // verified: true,
    },
  ];
  return (
    <div className="w-full gap-5 flex flex-col items-center">
      <SectionHeader
        title={"Featured Resources"}
        description={
          "Handpicked top rated resources trending across campuses this week"
        }
      />
      <div className="w-full flex items-center justify-around max-w-4/5 gap-10">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            image={resource.image}
            subject={resource.subject}
            name={resource.name}
            author={resource.author}
            rating={resource.rating}
            requestLink={resource.requestLink}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedResources;
