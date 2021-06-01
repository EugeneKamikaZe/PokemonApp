import React from 'react';
import {Story, Meta} from '@storybook/react';

import Heading, {HeadingProps} from "../components/Heading";

export default {
    title: 'Example/Typography',
    component: Heading,
    argTypes: {
        size: {
            defaultValue: 'm',
            options: ['xl', 'l', 'm', 's', 'xs'],
            control: {type: 'select'}
        },
    }
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Headings = Template.bind({})
Headings.args = {
    children: 'Heading',
    size: 'xl',
}
