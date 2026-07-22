import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';

const CommunityCard = ({
  profile,
  name,
  time,
  category,
  title,
  description,
  tags,
  likes,
  comments,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">
              {time} in{" "}
              <span className="font-medium text-gray-600">{category}</span>
            </p>
          </div>
        </div>

        <button>
          <MoreVertIcon className="text-gray-500" />
        </button>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

        <p className="text-gray-600 mt-2 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex gap-6 text-gray-600">
          <div className="flex items-center gap-1">
            <ThumbUpOffAltIcon fontSize="small" />
            {likes}
          </div>

          <div className="flex items-center gap-1">
            <ChatBubbleOutlineIcon fontSize="small" />
            {comments}
          </div>
        </div>

        <button className="text-blue-600 font-semibold hover:underline">
          Read thread →
        </button>
      </div>
    </div>
  );
};

export default CommunityCard;