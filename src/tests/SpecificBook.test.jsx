import { screen, render, fireEvent } from '@testing-library/react';
import SpecificBook from '../pages/SpecificBook';
import { useParams } from 'react-router-dom';
import { useBooks } from '../context/BooksContext';
import { useCart } from '../context/CartContext';
import { vi } from 'vitest';

vi.mock('../context/BooksContext', () => ({
  useBooks: () => ({
    books: [
      {
        id: 1,
        author: "David Flanagan",
        price: 10.99,
        image: "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@javascript_the_definitive_guide.jpg",
        title: "JavaScript: The Definitive Guide, 7th Edition",
        level: "Beginner",
        tags: ["core", "frontend", "javascript"],
        amount: 42,
        shortDescription: "JavaScript is the programming language of the web and is used by more software developers today than any other programming language.",
        description: "JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout. This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js."
      }
    ]
  })
}));

vi.mock('../context/CartContext', () => ({
  useCart: () => ({
    addItemToCart: vi.fn()
  })
}));

vi.mock('react-router-dom', () => ({
  useParams: () => ({
    id: 1
  })
}));

describe('SpecificBook tests', () => {

  it("При кліку збільшення кількості - кількість повинна збільшуватися", () => {
    render(<SpecificBook />);
    const button = screen.getByTestId('buttonIncrement');
    const input = screen.getByRole('textbox');
    const value = Number(input.value);

    fireEvent.click(button);

    expect(Number(input.value)).toBe(value + 1);
  });

  it("При кліку зменшення кількості - кількість повинна зменшуватися.", () => {
    render(<SpecificBook />);
    const decButton = screen.getByTestId('buttonDecrement');
    const incButton = screen.getByTestId('buttonIncrement');

    fireEvent.click(incButton);

    const input = screen.getByRole('textbox');
    const value = Number(input.value);

    fireEvent.click(decButton);

    expect(Number(input.value)).toBe(value - 1);
  });

  it("При зміні кількості - загальна вартість повинна змінюватися", () => {
    render(<SpecificBook />);
    const decButton = screen.getByTestId('buttonDecrement');
    const incButton = screen.getByTestId('buttonIncrement');

    const filed = screen.getByTestId('total');
    let value = Number(filed.textContent);

    fireEvent.click(incButton);
    expect(Number(filed.textContent)).not.toBe(value);

    value = Number(filed.textContent);

    fireEvent.click(decButton);
    expect(Number(filed.textContent)).not.toBe(value);
  });
});
