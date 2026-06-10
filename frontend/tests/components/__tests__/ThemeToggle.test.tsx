/// <reference types="vitest/globals" />
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '@/shared/components/ui/ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders without crashing', () => {
    render(<ThemeToggle theme="dark" setTheme={() => {}} />);
    expect(document.body).toBeTruthy();
  });

  it('calls setTheme with light when clicking from dark', () => {
    const setTheme = vi.fn();
    render(<ThemeToggle theme="dark" setTheme={setTheme} />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    vi.advanceTimersByTime(200);
    expect(setTheme).toHaveBeenCalledWith('light');
  });

  it('calls setTheme with dark when clicking from light', () => {
    const setTheme = vi.fn();
    render(<ThemeToggle theme="light" setTheme={setTheme} />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    vi.advanceTimersByTime(200);
    expect(setTheme).toHaveBeenCalledWith('dark');
  });
});
