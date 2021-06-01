import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, {ButtonProps, ButtonColor, ButtonSize} from "../components/Button";

export default {
  title: 'Example/Buttons',
  component: Button,
  argTypes: {
    buttonSize: {
      options: ['big', 'normal', 'small'],
      control: {type: 'radio'}
    },
    buttonColor: {
      options: ['green', 'yellow', 'lightblue'],
      control: {type: 'radio'}
    }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  children: 'pokemon type',
  buttonSize: ButtonSize.normal,
  buttonColor: ButtonColor.lightblue,
};

export const Normal = Template.bind({});
Normal.args = {
  children: 'Click me',
  buttonSize: ButtonSize.normal,
  buttonColor: ButtonColor.yellow,
};