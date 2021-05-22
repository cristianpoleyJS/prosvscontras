import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function ThemeMode ({ themeMode, setThemeMode }) {
  const toggleDarkMode = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }

  return (
      <>
      <DarkModeSwitch
        checked={themeMode === 'light'}
        moonColor='black'
        sunColor='white'
        onChange={toggleDarkMode}
        size={34}
      />
      </>
  )
};
