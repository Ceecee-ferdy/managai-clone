import startupIcon from "../assets/icons/startup.svg";
import financeIcon from "../assets/icons/finance.svg";
import retailIcon from "../assets/icons/retail.svg";
import educationIcon from "../assets/icons/education.svg";
import marketingIcon from "../assets/icons/marketing.svg";
import governmentIcon from "../assets/icons/government.svg";

export const userTypes = [
  {
    id: crypto.randomUUID(),
    number: "001",
    icon: startupIcon,
    title: "Startups",
    description: "With AI-driven insights, startups can optimize operations, prioritize tasks, and ensure team alignment—leading to faster growth and success."
  },
  {
    id: crypto.randomUUID(),
    number: "002",
    icon: financeIcon,
    title: "Finance & Consulting Firms",
    description: "Enhance goal setting for your client projects, performance tracking, and workflow automation."
  },
  {
    id: crypto.randomUUID(),
    number: "003",
    icon: retailIcon,
    title: "Retail Stores & E-commerce",
    description: "Optimize sales targets, inventory management and customer engagement."
  },
  {
    id: crypto.randomUUID(),
    number: "004",
    icon: educationIcon,
    title: "Educational Sector",
    description: "Monitor course progress tracking, course creators progress, and business growth for edu-tech platforms."
  },
  {
    id: crypto.randomUUID(),
    number: "005",  
    icon: marketingIcon,
    title: "Marketing Agencies",
    description: "Aligns campaign goals, team collaboration, and performance analytics."
  },
  {
    id: crypto.randomUUID(),
    number: "006",
    icon: governmentIcon,
    title: "Government Sector",
    description: "Work with smarter governance, better decision-making, and improved public service delivery."
  }
]