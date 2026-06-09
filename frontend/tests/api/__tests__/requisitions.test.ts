/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { fetchRequisitions } from '@/modules/ats/api/requisitions';

describe('requisitions.api', () => {
  it('exports fetchRequisitions', () => {
    expect(typeof fetchRequisitions).toBe('function');
  });
});
