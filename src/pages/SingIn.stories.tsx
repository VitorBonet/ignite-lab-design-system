import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest'
import { rest } from 'msw';
import { SingIn } from './SingIn';

export default {
  title: 'Pages/Sing in',
  component: SingIn,
  args: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (erq, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'contact@vbsoftbr.com')
    userEvent.type(canvas.getByPlaceholderText('*******'), '12345678')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      expect(canvas.getByText('Login realizado')).toBeInTheDocument()
    });    
  }
}