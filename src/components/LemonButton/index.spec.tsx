import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LemonButton } from '.'

describe('Lemon Button Component', () => {
  it('should render correctly', () => {
    render(
      <LemonButton color="primary" disabled={false}>
        Text
      </LemonButton>,
    )
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Text')
    expect(button).toHaveClass('lemonButton')
  })

  it('should render correctly with icon', () => {
    render(
      <LemonButton color="primary" disabled={false} icon="arrow-right">
        Text
      </LemonButton>,
    )
    const button = screen.getByRole('button')
    const icon = screen.getByRole('img')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Text')
    expect(icon).toBeInTheDocument()
  })

  it('should not render icon when there is no children', () => {
    expect(() => {
      render(
        // @ts-expect-error
        <LemonButton
          color="primary"
          disabled={false}
          icon="arrow-right"
        ></LemonButton>,
      )

      screen.getByTestId('icon-test')
    }).toThrow()
  })

  it('should call onClick prop when button is clicked', () => {
    const mockedOnClick = jest.fn()

    render(
      <LemonButton color="primary" onClick={mockedOnClick} disabled={false}>
        Text
      </LemonButton>,
    )

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(mockedOnClick).toHaveBeenCalledTimes(1)
  })

  it('should disable the button when disabled prop is passed', () => {
    const mockedOnClick = jest.fn()

    render(
      <LemonButton color="primary" onClick={mockedOnClick} disabled={true}>
        Text
      </LemonButton>,
    )

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(button).toBeDisabled()
    expect(mockedOnClick).not.toHaveBeenCalled()
  })

  it('should have primary class name when primary color is selected', () => {
    render(
      <LemonButton color="primary" disabled={false}>
        Text
      </LemonButton>,
    )

    const button = screen.getByRole('button')

    expect(button).toHaveClass('primary')
  })

  it('should have secondary class name when secondary color is selected', () => {
    render(
      <LemonButton color="secondary" disabled={false}>
        Text
      </LemonButton>,
    )

    const button = screen.getByRole('button')

    expect(button).toHaveClass('secondary')
  })
})
