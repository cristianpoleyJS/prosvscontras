import IconApp from 'components/Icons/IconApp'
import IconGitHub from 'components/Icons/IconGitHub'
import IconLinkedin from 'components/Icons/IconLinkedin'

export default function HeaderApp () {
  return (
    <>
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
    </>
  )
}
