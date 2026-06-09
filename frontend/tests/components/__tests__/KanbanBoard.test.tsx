/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { KanbanBoard } from '@/modules/ats/components/kanban/KanbanBoard';

describe('KanbanBoard', () => {
  it('is a valid React component export', () => {
    expect(typeof KanbanBoard).toBe('function');
  });
});
