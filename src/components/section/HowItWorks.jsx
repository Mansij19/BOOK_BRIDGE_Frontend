
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SectionHeader from "../UI/SectionHeader";

const HowItWorks = () => {
    const steps = [
        {
            icon: <SearchIcon size="large" fontSize="large" />,
            title: "Find",
            description:
                "Use our smart filters to find specific books , notes, pyqs for your exact course and need.",
        },
        {
            icon: <SendIcon size="large" fontSize="large" />,
            title: "Request",
            description:
                "Explore our curated collection of study materials across various subjects and difficulty levels.",
        },
        {
            icon: <ArrowForwardIcon size="large" fontSize="large" />,
            title: "Exchange",
            description:
                "Explore our curated collection of study materials across various subjects and difficulty levels.",
        },
    ];

  return (
    <div className="p-5 w-full flex flex-col gap-10 items-center justify-center">
      <SectionHeader title={"How It Works"} description={"Three simple steps to join and start learning"} />

      <div className="flex justify-between items-center w-full max-w-4/5 px-5">
        {steps.map((step, index) => (
          <div key={index} className=" w-1/4 flex flex-col gap-4 items-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full border-none bg-blue-100 text-blue-800 size-9">
              {step.icon}
            </div>
            <p className="text-2xl font-medium">{step.title}</p>
            <p className="text-center justify-center">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
