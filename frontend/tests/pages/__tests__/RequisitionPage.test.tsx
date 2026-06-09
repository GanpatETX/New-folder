/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { RequisitionPage } from '@/modules/ats/pages/RequisitionPage';

describe('RequisitionPage', () => {
  it('is a valid React component export', () => {
    expect(typeof RequisitionPage).toBe('function');
  });
});
