/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { fetchInterviews } from '@/modules/ats/api/interviews';

describe('interviews.api', () => {
  it('exports fetchInterviews', () => {
    expect(typeof fetchInterviews).toBe('function');
  });
});
