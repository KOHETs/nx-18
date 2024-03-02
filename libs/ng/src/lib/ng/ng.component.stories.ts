import type { Meta, StoryObj } from '@storybook/angular';
import { NgComponent } from './ng.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NgComponent> = {
  component: NgComponent,
  title: 'NgComponent',
};
export default meta;
type Story = StoryObj<NgComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ng works!/gi)).toBeTruthy();
  },
};
