import { useState, useEffect } from 'react';
import Switch from 'react-switch';
import useLocalStorage from 'use-local-storage';

export default function SwitcherMode() {
  const defaultDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'light' : 'dark');

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    let newTheme = theme;
  
    if (checked == false) {
      newTheme = 'dark';
      setTheme(newTheme);
      setChecked(true);
    } else {
      newTheme = 'light';
      setTheme(newTheme);
      setChecked(false);
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    JSON.parse(localStorage.getItem('theme')) == 'dark' ? setChecked(true) : setChecked(false);
  }, [theme]);

  return (
    <div className="example">
      <label>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
        />
      </label>
    </div>
  );
};