import React from 'react'
import ResourceCard from '../../UI/ResourceCard';
import physicsbook from "../../../assets/pysicsbook.jpg";
const BrowseResources = () => {
     const resources = [
        {
          image: physicsbook,
          subject: "Physics",
          name: "Fundamentals of Physics",
          author: "H.C. Verma • IIT Delhi",
          rating: 4.9,
          requestLink: "/request/fundamentals-of-physics",
          
        },
     {
          image: physicsbook,
          subject: "Physics",
          name: "Fundamentals of Physics",
          author: "H.C. Verma • IIT Delhi",
          rating: 4.9,
          requestLink: "/request/fundamentals-of-physics",
          
        },
     {
          image: physicsbook,
          subject: "Physics",
          name: "Fundamentals of Physics",
          author: "H.C. Verma • IIT Delhi",
          rating: 4.9,
          requestLink: "/request/fundamentals-of-physics",
          
        },
     {
          image: physicsbook,
          subject: "Physics",
          name: "Fundamentals of Physics",
          author: "H.C. Verma • IIT Delhi",
          rating: 4.9,
          requestLink: "/request/fundamentals-of-physics",
          
        },
     {
          image: physicsbook,
          subject: "Physics",
          name: "Fundamentals of Physics",
          author: "H.C. Verma • IIT Delhi",
          rating: 4.9,
          requestLink: "/request/fundamentals-of-physics",
          
        },
     {
          image: physicsbook,
          subject: "Physics",
          name: "Fundamentals of Physics",
          author: "H.C. Verma • IIT Delhi",
          rating: 4.9,
          requestLink: "/request/fundamentals-of-physics",
          
        }]
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 justify-around">
        <div className="w-full flex items-center justify-around max-w-4/5">
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
  )
}

export default BrowseResources