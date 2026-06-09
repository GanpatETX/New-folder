/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { ListView } from '@/modules/ats/components/list/ListView';

describe('ListView', () => {
  it('is a valid React component export', () => {
    expect(typeof ListView).toBe('function');
  });
});
