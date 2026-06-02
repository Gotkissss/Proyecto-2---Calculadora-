import type { Meta, StoryObj } from '@storybook/react'
import Display from './Display'

const meta: Meta<typeof Display> = {
  title: 'Components/Display',
  component: Display,
}

export default meta
type Story = StoryObj<typeof Display>

export const Default: Story = {
  args: { value: '0', operation: null },
}

export const WithNumber: Story = {
  args: { value: '12345', operation: null },
}

export const WithOperation: Story = {
  args: { value: '42', operation: '+' },
}

export const Error: Story = {
  args: { value: 'ERROR', operation: null },
}

export const LongNumber: Story = {
  args: { value: '999999999', operation: '*' },
}