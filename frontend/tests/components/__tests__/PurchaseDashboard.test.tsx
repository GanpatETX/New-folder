/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { PurchaseDashboard } from '@/modules/purchase/components/PurchaseDashboard';

describe('PurchaseDashboard', () => {
  it('is a valid React component export', () => {
    expect(typeof PurchaseDashboard).toBe('function');
  });
});
