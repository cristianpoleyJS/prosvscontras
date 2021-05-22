import IconApp from 'components/Icons/IconApp'
import IconGitHub from 'components/Icons/IconGitHub'
import IconLinkedin from 'components/Icons/IconLinkedin'
import ThemeMode from 'components/ThemeMode'
import { useEffect } from 'react'
import anime from 'animejs'

export default function HeaderApp ({ themeMode, setThemeMode }) {
  const fillColorIcon = themeMode === 'dark' ? '#fff' : '#161b22'
  const fillColorIconApp = themeMode === 'dark' ? '#fff' : '#6366f1'
  useEffect(() => {
    const textWrapper = document.querySelector('.name-app .text')
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='text'>$&</span>")
    anime.timeline()
      .add({
        targets: '.name-app .text',
        rotateY: [-90, 0],
        duration: 6000,
        delay: (el, i) => 60 * i
      })
  })
  return (
    <>
        <header className="sticky top-0 z-40 shadow bg-white dark:bg-gray-800 w-full h-16 items-center">
          <nav className="flex items-center h-full lg:px-16 px-6">
            <div className="flex-1 items-center">
              <span className="h-10 w-10 inline-block mr-4 align-middle">
                <IconApp width="40px" height="40px" fill={fillColorIconApp} />
              </span>
              <h1 className="name-app inline-block relative m-0 align-bottom">
                <span className="name-app-wrapper relative inline-block overflow-hidden dark:text-white text-indigo-500">
                  <span className="text inline-block text-xl">Pros VS Contras</span>
                </span>
              </h1>
            </div>
            <div className="flex-2 flex">
              <span className="mr-2 lg:mr-6"><ThemeMode themeMode={themeMode} setThemeMode={setThemeMode}/></span>
              <a href="https://www.linkedin.com/in/cristian-poley/" target="_blank" className="mr-2 lg:mr-6" rel="noreferrer"><IconLinkedin width="32px" height="32px" fill={fillColorIcon}/></a>
              <a href="https://github.com/cristianpoleyJS" target="_blank" rel="noreferrer"><IconGitHub width="32px" height="32px" fill={fillColorIcon}/></a>
            </div>
          </nav>
        </header>
        <style jsx>{`
          .text {
            transform-origin: 0 0;
            font-weight: 500;
          }
        `}</style>
    </>
  )
}
