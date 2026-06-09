/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { fetchAnalytics } from '@/modules/ats/api/analytics';

describe('analytics.api', () => {
  it('exports fetchAnalytics', () => {
    expect(typeof fetchAnalytics).toBe('function');
  });
});
