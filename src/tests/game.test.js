import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';
import Game from '../pages/Game';


describe('Testa pagina de Game', () => {

test('Verifica se "game" é renderizado corretamente.', () => {
  const { history } = renderWithRouterAndRedux(<App />);
  const emailTest = 'email@email.com';
  const name = 'nameTeste'
  const btnPlay = screen.getByTestId('btn-play');
  expect(btnPlay).toBeDisabled;
  const inputEmail = screen.getByPlaceholderText(/Email/i);
  const inputName = screen.getByPlaceholderText(/name/i);
  userEvent.type(inputEmail, emailTest);
  userEvent.type(inputName, name);
  expect(btnPlay).toBeEnabled;
  userEvent.click(btnPlay);
  const { location: { pathname } } = history;
  setTimeout(() => {
    expect(pathname).toBe('/game');
  }, 3000);
  const userImg = screen.getByTestId('header-profile-picture');
  const userGamer = screen.getByTestId('header-player-name');
  const userPoints = screen.getByText(/pontos:/i)
  const questionCategory = screen.getByTestId('question-category');
  const question = screen.getByTestId('question-text')
  const questionOptions = screen.getByTestId('answer-options');
  const time = screen.getByText(/tempo restante:/i);
  const correct = screen.getByTestId('correct-answer');
  const wrong = screen.getByTestId('wrong-answer-0')
  const wrong1 = screen.getByTestId('wrong-answer-1');
  const wrong2 = screen.getByTestId('wrong-answer-2');
  setTimeout(() => {
    expect(userImg).toBeInTheDocument();
  expect(userGamer).toBeInTheDocument();
  expect(userPoints).toBeInTheDocument();
  expect(questionCategory).toBeInTheDocument();
  expect(question).toBeInTheDocument();
  expect(questionOptions).toBeInTheDocument();
  expect(time).toBeInTheDocument();
  expect(correct).toBeInTheDocument();
  expect(wrong).toBeInTheDocument();
  expect(wrong1).toBeInTheDocument();
  expect(wrong2).toBeInTheDocument();
  }, 3000);
  
})
})
