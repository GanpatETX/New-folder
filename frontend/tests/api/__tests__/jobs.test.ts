/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { fetchJobs } from '@/modules/ats/api/jobs';

describe('jobs.api', () => {
  it('exports fetchJobs', () => {
    expect(typeof fetchJobs).toBe('function');
  });
});
