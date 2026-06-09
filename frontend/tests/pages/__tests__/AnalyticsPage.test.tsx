/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { AnalyticsPage } from '@/modules/ats/pages/AnalyticsPage';

describe('AnalyticsPage', () => {
  it('is a valid React component export', () => {
    expect(typeof AnalyticsPage).toBe('function');
  });
});
