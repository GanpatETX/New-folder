/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { fetchCandidates } from '@/modules/ats/api/candidates';

describe('candidates.api', () => {
  it('exports fetchCandidates', () => {
    expect(typeof fetchCandidates).toBe('function');
  });
});
