/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { SettingsPage } from '@/modules/ats/pages/SettingsPage';

describe('SettingsPage', () => {
  it('is a valid React component export', () => {
    expect(typeof SettingsPage).toBe('function');
  });
});
