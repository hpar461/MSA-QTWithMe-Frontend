import { Story, Meta } from "@storybook/react";
import QTCard, { IQTCard } from "./QTCard";

export default {
  title: "UI Components/QTCard",
  component: QTCard,
} as Meta;

const Template: Story<IQTCard> = (args) => (
  <QTCard
    heading={args.heading}
    subheading={args.subheading}
    content={args.content}
  />
);

export const RandomQT = Template.bind({});
RandomQT.args = {
  heading: "John 12:1-12:2",
  subheading: `hyungsangpark, ${new Date(Date.now()).toLocaleString("en-NZ")}`,
  content: "Genesis and the other “books of Moses” (Exodus, Leviticus, Numbers and Deuteronomy) " + 
    "introduce the continuous story of Israel running through the first quarter of the Bible." +
    "Genesis is traditionally attributed to Moses, the one who led the people of Israel out of Egypt.",
};
