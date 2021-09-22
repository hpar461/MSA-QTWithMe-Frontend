import { Story, Meta } from "@storybook/react";
import PassageInput, { IPassageInput } from "./PassageInput";

export default {
  title: "UI Components/PassageInput",
  component: PassageInput,
} as Meta;

const Template: Story<IPassageInput> = (args) => <PassageInput onClick={args.onClick}/>;

export const PopupSelectWithAlert = Template.bind({});
PopupSelectWithAlert.args = {
  onClick: (p: string) => {alert(p)},
};