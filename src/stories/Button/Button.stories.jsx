import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      control: {type: 'text'}
    },
    type: {
      control: {type: 'select'}
    },
    progression: {
      control: {type: 'select'}
    }
  }
};

const Template = (args) => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
  primary: true,
  label: 'Button',
  type: 'button',
  disabled: false,
  size: 'medium',
  progression: 'normal'
};

