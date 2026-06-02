import type { Meta, StoryObj } from '@storybook/react'
import Keyboard from './Keyboard'

const meta: Meta<typeof Keyboard> = {
  title: 'Components/Keyboard',
  component: Keyboard,
  args: {
    onDigit: () => {},
    onOperation: () => {},
    onEqual: () => {},
    onClear: () => {},
    onDecimal: () => {},
    onSign: () => {},
  },
}

export default meta
type Story = StoryObj<typeof Keyboard>

export const Default: Story = {}
