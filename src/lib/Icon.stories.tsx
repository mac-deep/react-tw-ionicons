import React from 'react'
import AccessibilityIcon, { AccessbilityIconProps } from './components/AccessibilityIcon'
import { objectValuesToControls } from './storybook-utils'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AccessibilityIcon> = {
  title: 'Icons/AccessibilityIcon',
  component: AccessibilityIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: objectValuesToControls({ filled: 'filled', sharp: 'sharp', outline: 'outline' }),
  },
}
export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof AccessibilityIcon> = (args: AccessbilityIconProps) => <AccessibilityIcon {...args} />

export const Filled = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  variant: 'filled',
}

export const Sharp = Template.bind({})
Sharp.args = {
  variant: 'sharp',
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
}
