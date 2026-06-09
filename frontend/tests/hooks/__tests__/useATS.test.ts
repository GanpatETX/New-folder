/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { useCandidatesQuery } from '@/modules/ats/hooks/useATS';

describe('useATS hooks', () => {
  it('exports useCandidatesQuery', () => {
    expect(typeof useCandidatesQuery).toBe('function');
  });
});
