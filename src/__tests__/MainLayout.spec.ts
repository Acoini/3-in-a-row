import { describe, expect, it } from 'vitest';

// The two tests marked with concurrent will be run in parallel
describe('suite', () => {
  it('serial test', async () => {
    /* ... */
  });
  it.concurrent('concurrent test 1', async () => {
    /* ... */
    expect(true).toBe(false);
  });
  it.concurrent('concurrent test 2', async () => {
    /* ... */
  });
});
