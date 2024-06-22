import { useLayoutEffect, useState } from "react";

export function useWindowSize(): {
    width: number;
    height: number;
} {
    const [size, setSize] = useState<{
        width: number;
        height: number;
    }>({
        width: 0,
        height: 0
    });

    useLayoutEffect(() => {
        const handleResize = () => {
            setSize({
                width: document.querySelector('html')?.clientWidth ?? 0,
                height: document.querySelector('html')?.clientHeight ?? 0,
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