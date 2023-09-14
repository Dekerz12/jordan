import { useState, useEffect } from 'react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
export default function ThemeButton() {
  const [theme, setTheme] = useState(() => {
    localStorage.setItem(
      'theme',
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? 'dark'
        : 'light'
    );

    return localStorage.getItem('theme');
  });

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
    <div className='cursor-pointer'>
      {theme === 'dark' ? (
        <BsFillSunFill
          className='text-3xl'
          onClick={() => {
            localStorage.theme = 'light';
            setTheme('light');
          }}
        />
      ) : (
        <BsFillMoonStarsFill
          className='text-3xl'
          onClick={() => {
            localStorage.theme = 'dark';
            setTheme('dark');
          }}
        />
      )}
    </div>
  );
}
