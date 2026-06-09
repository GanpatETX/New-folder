/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { ERPModuleCatalog } from '@/modules/ats/components/ERPModuleCatalog';

describe('ERPModuleCatalog', () => {
  it('is a valid React component export', () => {
    expect(typeof ERPModuleCatalog).toBe('function');
  });
});
