/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthCallback from '@/app/pages/AuthCallback';

describe('AuthCallback', () => {
  it('renders loading state', () => {
    render(
      <BrowserRouter>
        <AuthCallback />
      </BrowserRouter>
    );
    expect(screen.getByText(/Completing Zoho SSO/i)).toBeTruthy();
  });
});
