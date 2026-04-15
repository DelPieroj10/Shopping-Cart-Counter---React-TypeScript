import { describe, expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import {useCounter} from "./useCounter";

describe("useCounter", () => {
    test("Should initialize with default value", () => {
      const { result } = renderHook(() => useCounter());

      expect(result.current.counter).toBe(1);
    });

    test("Should initialize with provided value", () => {
      const { result } = renderHook(() => useCounter(10));
      
      expect(result.current.counter).toBe(10);
    });

    test("Should increment by custom value", () => {
      const { result } = renderHook(() => useCounter(5));

      act(() => {
        result.current.increment(3);
      });
      expect(result.current.counter).toBe(8);
    });

    test("Should decrement by custom value", () => {
      const { result } = renderHook(() => useCounter(5));

      act(() => {
        result.current.decrement(1);
      });
      expect(result.current.counter).toBe(4);
    });

    test("Should not decrement below 1", () => {
      const { result } = renderHook(() => useCounter(1));

      act(() => {
        result.current.decrement();
      });
      expect(result.current.counter).toBe(1);
    });
});