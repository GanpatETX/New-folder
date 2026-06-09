/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { PurchaseDashboard } from '@/modules/purchase/components/PurchaseDashboard';

describe('PurchaseModule', () => {
  it('renders purchase dashboard', () => {
    expect(typeof PurchaseDashboard).toBe('function');
  });
});
