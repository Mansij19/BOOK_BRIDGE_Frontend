import CommunityCard from "./components/ResourceCard";

const post = {
  profile: "https://i.pravatar.cc/150?img=3",
  name: "Alex Rivera",
  time: "2 hours ago",
  category: "Mathematics",
  title: "Best resources for mastering Linear Algebra?",
  description:
    "I'm struggling with eigenvalues and eigenvectors. Are there any specific visualizations or textbooks that make these concepts easier to understand?",
  tags: ["calculus", "study-tips"],
  likes: 124,
  comments: 48,
};

function App() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <ResourceCard {...post} />
    </div>
  );
}

export default App;