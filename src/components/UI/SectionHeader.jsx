import React from "react";

const SectionHeader = ({ title, description, position="center" }) => {
  return (
    <div className={`w-full flex gap-2 flex-col items-${position}`}>
      <p className="text-4xl font-weight-medium">{title}</p>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default SectionHeader;
