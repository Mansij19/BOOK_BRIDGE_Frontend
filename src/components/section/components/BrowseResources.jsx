import React from "react";
import ResourceCard from "../../UI/ResourceCard";
import { resources } from "../../../constants/BrowserData";
const BrowseResources = () => {
  return (
    <div className="flex w-full items-center">
      <div className="flex flex-wrap gap-4 w-full items-center">
        {resources.map((resource, index) => (
          <ResourceCard
            width={"w-80"}
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

export default BrowseResources;
