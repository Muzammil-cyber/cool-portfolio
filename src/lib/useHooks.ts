import { useRouter } from "next/router";
import { DependencyList, EffectCallback, useEffect, useLayoutEffect, useRef, useState, Dispatch, SetStateAction, useSyncExternalStore, useCallback, } from "react";

export function useWindowSize(): {
    width: number;
    height: number;
} {
    const [size, setSize] = useState<{
        width: number;
        height: number;
    }>({} as {
        width: number;
        height: number;
    });

    useLayoutEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        };

        handleResize();


        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return size;
}

export function useDebounce(value: any, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useLayoutEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export function useSyncLocalStorage<T>(key: string, value: T) {
    const [state, setState] = useState<T>(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            return JSON.parse(storedValue);
        }
        return value;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState] as const;
}