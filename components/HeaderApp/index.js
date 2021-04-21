import IconApp from 'components/Icons/IconApp'
import IconGitHub from 'components/Icons/IconGitHub'
import IconLinkedin from 'components/Icons/IconLinkedin'

export default function HeaderApp () {
  return (
    <>
        <div className="py-2 bg-gradient-to-r from-indigo-600 to-light-blue-500 overflow-hidden">
          <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-sm font-medium text-white text-center leading-8">
              Working in progress 👨‍💻
            </div>
          </div>
        </div>
        <header className="sticky top-0 z-40 font-base shadow bg-white w-full h-16 items-center">
          <nav className="flex items-center h-full px-16">
            <div className="flex-1 items-center">
              <span className="h-8 w-8 inline-block mr-2 align-middle">
                <IconApp width="32px" height="32px"></IconApp>
              </span> ProsVsContras
            </div>
            <div className="flex-2 flex">
              <a href="https://www.linkedin.com/in/cristian-poley/" target="_blank" className="mr-4" rel="noreferrer"><IconLinkedin width="30px" height="30px" fill="#161b22"/></a>
              <a href="https://github.com/cristianpoleyJS" target="_blank" className="mr-4" rel="noreferrer"><IconGitHub width="30px" height="30px" fill="#161b22"/></a>
            </div>
          </nav>
        </header>
        <style jsx>{`
          .to-light-blue-500 {
            --tw-gradient-to: #0ea5e9;
          }
        `}</style>
    </>
  )
}
