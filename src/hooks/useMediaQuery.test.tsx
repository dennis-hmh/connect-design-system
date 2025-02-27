import { renderHook, act } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { useMediaQuery } from '../hooks/useMediaQuery';
import { Breakpoint, media } from '../constants/media';
import { beforeEach } from 'node:test';

let mockListeners: Record<string, (event: MediaQueryListEvent) => void> = {};
const createMatchMedia = (matches: boolean) => {
  return vi.fn().mockImplementation((query) => {
    return {
      matches,
      media: query,
      onchange: null,
      addEventListener: vi.fn((event, callback) => {
        mockListeners[event] = callback;
      }),
      removeEventListener: vi.fn((event) => {
        delete mockListeners[event];
      }),
      dispatchEvent: vi.fn((event) => {
        mockListeners.change?.(event);
      }),
    };
  });
};

describe('useMediaQuery', () => {
  beforeEach(() => {
    mockListeners = {};
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should return true when the media query matches', () => {
    vi.stubGlobal('matchMedia', createMatchMedia(true));
    const { result } = renderHook(() => useMediaQuery(media.only(Breakpoint.md)));
    expect(result.current).toBe(true);
  });

  it('should return false when the media query does not match', () => {
    vi.stubGlobal('matchMedia', createMatchMedia(false));
    const { result } = renderHook(() => useMediaQuery(media.up(Breakpoint.sm)));
    expect(result.current).toBe(false);
  });

  it('supports breakpoints and correctly maps them to media queries', () => {
    vi.stubGlobal('matchMedia', createMatchMedia(true));
    const matchMediaSpy = vi.spyOn(global, 'matchMedia');
    renderHook(() => useMediaQuery(Breakpoint.lg));

    expect(matchMediaSpy).toHaveBeenCalledWith(media.up(Breakpoint.lg));
  });

  it('should update when the media query changes', () => {
    vi.stubGlobal('matchMedia', createMatchMedia(false));
    const { result } = renderHook(() => useMediaQuery(media.between(Breakpoint.sm, Breakpoint.lg)));
    expect(result.current).toBe(false);

    act(() => mockListeners.change?.({ matches: true } as MediaQueryListEvent));
    expect(result.current).toBe(true);
  });
});
