/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { CandidateCard } from '@/modules/ats/components/candidate/CandidateCard';

describe('CandidateCard', () => {
  it('is a valid React component export', () => {
    expect(typeof CandidateCard).toBe('function');
  });
});
