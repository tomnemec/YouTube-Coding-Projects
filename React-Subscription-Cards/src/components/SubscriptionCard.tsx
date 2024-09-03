import {
  Badge,
  Button,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import { PricingCardProps } from "../App";
import { IoCheckmark } from "react-icons/io5";
interface Props {
  options: PricingCardProps;
}
const SubscriptionCard = ({ options }: Props) => {
  return (
    <Flex
      direction="column"
      width="300px"
      className={`${options.bg} ${
        options.darkMode ? "text-white" : "text-black"
      } shadow-md rounded-md py-16 px-5 relative`}
    >
      {options.featured ? (
        <Badge
          className="absolute right-7 -top-2"
          variant="solid"
          color="green"
          size="3"
        >
          Most Popular
        </Badge>
      ) : null}
      <Heading size="6">{options.name}</Heading>
      <Text
        className={`${options.bg} ${
          options.darkMode ? "text-gray-300" : "text-gray-500"
        }`}
      >
        {options.description}
      </Text>
      <Separator size="4" className="mt-5" />
      <Flex direction="column">
        <Heading className="my-3" weight="medium">
          {options.price}
        </Heading>
        <Button variant={options.buttonStyle}>Get Started</Button>
        <Heading className="mt-8" size="3" weight="medium">
          What is included?
        </Heading>
        <ul>
          {options.features.map((feature) => (
            <li className="flex align-middle gap-1">
              <IoCheckmark className=" mt-1" color="green" />
              <Text
                className={`${options.bg} ${
                  options.darkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {feature}
              </Text>
            </li>
          ))}
        </ul>
      </Flex>
    </Flex>
  );
};

export default SubscriptionCard;
