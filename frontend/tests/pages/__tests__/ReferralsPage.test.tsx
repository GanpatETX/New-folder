/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { ReferralsPage } from '@/modules/ats/pages/ReferralsPage';

describe('ReferralsPage', () => {
  it('is a valid React component export', () => {
    expect(typeof ReferralsPage).toBe('function');
  });
});
