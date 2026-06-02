import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: { onClick: () => {} },
}

export default meta
type Story = StoryObj<typeof Button>

export const Number: Story = {
  args: { label: '5', variant: 'number' },
}

export const Operator: Story = {
  args: { label: '+', variant: 'operator' },
}

export const Equal: Story = {
  args: { label: '=', variant: 'equal' },
}

export const Clear: Story = {
  args: { label: 'C', variant: 'clear' },
}

export const Sign: Story = {
  args: { label: '+/-', variant: 'sign' },
}
