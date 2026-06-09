/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Login from '@/app/pages/Login';

const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <BrowserRouter>{ui}</BrowserRouter>
    </ThemeProvider>
  );

describe('Login', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Login />);
    expect(document.body).toBeTruthy();
  });
});
