
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

describe('Menu', () => {

  test('expect HOME Link to exist', () => {
    render(<App />);
    const linkElement = screen.getByTestId('home')

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent('HOME');
  });

  test('expect HOME Click to display content', () => {
    const { container } = render(<App />);
    const linkElement = screen.getByTestId('home');

    act(() => {
      linkElement.click();
    });
    const wrapperElement = screen.getByTestId('home-wrapper');
    expect(container.getElementsByClassName('active').length).toEqual(1);
    expect(wrapperElement).toHaveTextContent('HOME');
  });

  test('expect ABOUT Link to exist', () => {
    render(<App />);
    const linkElement = screen.getByTestId('about')

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent('ABOUT');
  });

  test('expect ABOUT Click to display content', () => {
    const { container } = render(<App />);
    const linkElement = screen.getByTestId('about');

    act(() => {
      linkElement.click();
    });
    const wrapperElement = screen.getByTestId('about-wrapper');
    expect(container.getElementsByClassName('active').length).toEqual(1);
    expect(wrapperElement).toHaveTextContent('ABOUT');
  });

});
