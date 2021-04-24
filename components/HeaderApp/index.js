import IconApp from 'components/Icons/IconApp'
import IconGitHub from 'components/Icons/IconGitHub'
import IconLinkedin from 'components/Icons/IconLinkedin'
import { useEffect } from 'react'
import anime from 'animejs'

export default function HeaderApp () {
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
        <header className="sticky top-0 z-40 shadow bg-white w-full h-16 items-center">
          <nav className="flex items-center h-full px-16">
            <div className="flex-1 items-center">
              <span className="h-10 w-10 inline-block mr-4 align-middle">
                <IconApp width="40px" height="40px"></IconApp>
              </span>
              <h1 className="name-app inline-block relative m-0 align-bottom">
                <span className="name-app-wrapper relative inline-block overflow-hidden">
                  <span className="text inline-block text-xl text-gray-600 font-normal">Pros VS Contras</span>
                </span>
              </h1>
            </div>
            <div className="flex-2 flex">
              <a href="https://www.linkedin.com/in/cristian-poley/" target="_blank" className="mr-6" rel="noreferrer"><IconLinkedin width="32px" height="32px" fill="#161b22"/></a>
              <a href="https://github.com/cristianpoleyJS" target="_blank" className="mr-4" rel="noreferrer"><IconGitHub width="32px" height="32px" fill="#161b22"/></a>
            </div>
          </nav>
        </header>
        <style jsx>{`
          .text {
            transform-origin: 0 0;
          }
        `}</style>
    </>
  )
}
