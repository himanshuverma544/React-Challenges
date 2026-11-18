import { useState } from 'react';
import './../styles/dark-mode.css';

type Mode = 'light' | 'dark';

function DarkMode() {

  const [mode, setMode] = useState<Mode>('light');

  const handleToggle = (): void => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className={`container ${mode === 'light' ? 'light-mode' : 'dark-mode'}`}
    >
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            checked={mode === 'dark'}
            onChange={handleToggle}
          />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">
          {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
        </span>
      </div>
    </div>
  );
}


export default DarkMode;