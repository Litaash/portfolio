import { useState, useEffect } from 'react';
import switcher from '../styles/components/SwitcherTheme.module.scss';
import Switch from 'react-switch';
import useLocalStorage from 'use-local-storage';

export default function SwitcherMode() {
  const defaultDark = typeof window !== 'undefined' && document.documentElement.getAttribute('data-theme');
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
          className={switcher.wrapper}
          borderRadius={0}
          handleDiameter={24}
          offHandleColor="#f5f5f5"
          onHandleColor="#2c5d63"
          offColor="#2c5d63"
          onColor="#f5f5f5"
          uncheckedIcon={
            <div style={{
              display: 'block',
              width: '28px',
              height: '100%',
              textAlign: 'center',
              marginLeft: 'auto'
            }}>
              <svg fill="white" width="28" height="28" viewBox="-9 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.52 23.56c-4.080 0-7.48-3.4-7.48-7.56s3.4-7.56 7.56-7.56c0.76 0 1.52 0.12 2.28 0.36 0.36 0.12 0.6 0.48 0.6 0.88-0.040 0.4-0.32 0.72-0.72 0.76-2.2 0.32-3.84 2.2-3.84 4.4 0 2.44 2 4.44 4.44 4.44 1 0 1.96-0.32 2.76-0.96 0.32-0.24 0.76-0.24 1.040 0 0.32 0.24 0.4 0.68 0.24 1.040-1.36 2.56-3.96 4.2-6.88 4.2zM6.24 10.28c-2.6 0.6-4.52 2.96-4.52 5.72 0 3.24 2.64 5.88 5.88 5.88 1.16 0 2.28-0.32 3.2-0.96-0.16 0-0.32 0-0.48 0-3.36 0-6.12-2.76-6.12-6.12-0.080-1.76 0.72-3.4 2.040-4.52z"></path>
              </svg>
            </div>
          }
          checkedIcon={
            <svg fill="black" width="28" height="28" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.68 21.64c-3.12 0-5.64-2.52-5.64-5.64s2.52-5.64 5.64-5.64 5.64 2.52 5.64 5.64-2.52 5.64-5.64 5.64zM10.68 12.040c-2.2 0-3.96 1.76-3.96 3.96s1.76 3.96 3.96 3.96 3.96-1.76 3.96-3.96-1.76-3.96-3.96-3.96zM10.68 9.040c-0.48 0-0.84-0.36-0.84-0.84v-2.040c0-0.48 0.36-0.84 0.84-0.84s0.84 0.36 0.84 0.84v2.040c0 0.48-0.36 0.84-0.84 0.84zM16.2 11.32c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l1.44-1.44c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-1.44 1.44c-0.2 0.16-0.4 0.24-0.6 0.24zM18.48 16.84c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h2.040c0.48 0 0.84 0.36 0.84 0.84s-0.36 0.84-0.84 0.84h-2.040zM17.64 23.8c-0.2 0-0.44-0.080-0.6-0.24l-1.44-1.48c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l1.44 1.44c0.32 0.32 0.32 0.84 0 1.2-0.16 0.2-0.4 0.28-0.6 0.28zM10.68 26.68c-0.48 0-0.84-0.36-0.84-0.84v-2.040c0-0.48 0.36-0.84 0.84-0.84s0.84 0.36 0.84 0.84v2.040c0 0.48-0.36 0.84-0.84 0.84zM3.72 23.8c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l1.44-1.44c0.32-0.32 0.84-0.32 1.2 0s0.32 0.84 0 1.2l-1.44 1.44c-0.16 0.16-0.4 0.24-0.6 0.24zM0.84 16.84c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h2.040c0.48 0 0.84 0.36 0.84 0.84s-0.36 0.84-0.84 0.84h-2.040zM5.16 11.32c-0.2 0-0.44-0.080-0.6-0.24l-1.44-1.44c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l1.44 1.44c0.32 0.32 0.32 0.84 0 1.2-0.16 0.16-0.36 0.24-0.6 0.24z"></path>
            </svg>
          }
        />
      </label>
    </div>
  );
};