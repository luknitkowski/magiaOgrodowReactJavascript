import { useEffect, useState } from 'react';

const themeMagiaOgrodow: string = 'themeDarkOrLightModeMagiaOgrodow';

export const useDarkMode = () => {
    const [theme, setTheme] = useState<string>('light');
    const [mountedComponent, setMountedComponent] = useState<boolean>(false);

    const setMode = (mode: string) => {
        window.localStorage.setItem(themeMagiaOgrodow, mode);
        setTheme(mode);
    };

    const themeToggler = (): void => {
        theme === 'light' ? setMode('dark') : setMode('light');
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem(themeMagiaOgrodow);
        localTheme ? setTheme(localTheme) : setMode('light');
        setMountedComponent(true)
    }, []);

    return [theme, themeToggler, mountedComponent] as const
};