import { Flex, Heading } from "@radix-ui/themes";
import "./App.css";
import SubscriptionCard from "./components/SubscriptionCard";

export interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  buttonStyle: "soft" | "solid";
  features: string[];
  bg: string;
  featured: boolean;
  darkMode: boolean;
}
function App() {
  const options: PricingCardProps[] = [
    {
      name: "Basic",
      description: "Learn the basics of Frontend Development",
      price: "Free",
      buttonStyle: "soft",
      features: ["Basic Courses", "General Knowledge", "Community Support"],
      bg: "bg-white",
      featured: false,
      darkMode: false,
    },
    {
      name: "Learner",
      description: "Learn the basics of Frontend Development",
      price: "$15",
      buttonStyle: "solid",
      features: ["Basic Courses", "General Knowledge", "Community Support"],
      bg: "bg-gray-700",
      featured: true,
      darkMode: true,
    },
  ];
  return (
    <>
      <Flex
        minHeight="100vh"
        className="p-5 "
        justify="center"
        align="center"
        direction="column"
      >
        <Heading size="8" className="text-center mb-8">
          Become a member of the best
          <br /> learning community
        </Heading>
        <Flex gap="5">
          {options.map((card) => (
            <SubscriptionCard options={card} />
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export default App;
