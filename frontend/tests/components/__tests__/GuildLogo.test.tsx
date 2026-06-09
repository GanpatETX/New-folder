/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { GuildLogo } from '@/shared/components/GuildLogo';

describe('GuildLogo', () => {
  it('is a valid component export', () => {
    expect(typeof GuildLogo).toBe('function');
  });
});
