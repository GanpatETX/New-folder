/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { DashboardPage } from '@/modules/ats/pages/DashboardPage';

describe('DashboardPage', () => {
  it('is a valid React component export', () => {
    expect(typeof DashboardPage).toBe('function');
  });
});
