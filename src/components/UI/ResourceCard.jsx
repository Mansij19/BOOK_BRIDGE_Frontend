import { Star } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const ResourceCard = ({
  image,
  subject,
  name,
  author,
  width,
  rating,
  requestLink,
}) => {
  return (
    <div className={`flex flex-col ${width || "min-w-87.5"} rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300`}>
      {/* Image Section */}
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="space-y-3 p-4">
        {/* Subject */}
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
          {subject}
        </p>

        {/* Book Name */}
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {name}
        </h3>

        {/* Author */}
        <p className="text-sm text-gray-600">{author}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            {rating}
          </div>

          <Link
            to={requestLink}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Request
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
