import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import LoadingOutlet from './index'

describe('LoadingOutlet', () => {
  it('renders children when not loading', () => {
    render(
      <LoadingOutlet loading={false}>
        <div data-testid="child-content">Test Content</div>
      </LoadingOutlet>
    )

    expect(screen.getByTestId('child-content')).toBeInTheDocument()
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
  })

  it('shows loader overlay when loading is true', () => {
    render(
      <LoadingOutlet loading={true}>
        <div data-testid="child-content">Test Content</div>
      </LoadingOutlet>
    )

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    expect(screen.getByTestId('child-content')).toBeInTheDocument()
  })
})
