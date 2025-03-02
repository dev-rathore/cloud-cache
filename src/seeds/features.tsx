import {
  BarChart3,
  CloudCog,
  Database,
  HeadphonesIcon,
  MonitorSmartphone,
  TrendingUp,
} from "lucide-react";

export const features = [
  {
    name: "Salesforce Consulting",
    description:
      "Expert guidance to maximize your Salesforce investment and align it with your business goals.",
    icon: <BarChart3 className="text-primary" />,
  },
  {
    name: "Salesforce Implementation",
    description:
      "End-to-end implementation services tailored to your specific business requirements.",
    icon: <Database className="text-gray-400" />,
  },
  {
    name: "Salesforce Support",
    description:
      "24/7 support to ensure your Salesforce instance runs smoothly and efficiently",
    icon: <HeadphonesIcon className="text-green-500" />,
  },
  {
    name: "Integration Services",
    description:
      "Seamless integration of Salesforce with your existing systems and third-party applications.",
    icon: <TrendingUp className="text-purple-500" />,
  },
  {
    name: "Custom Development",
    description:
      "Tailor-made solutions to address unique business challenges and requirements.",
    icon: <MonitorSmartphone className="text-orange-500" />,
  },
  {
    name: "Managed Services Packages",
    description:
      "Comprehensive packages to manage and optimize your Salesforce environment.",
    icon: <CloudCog className="text-blue-500" />,
  },
];
