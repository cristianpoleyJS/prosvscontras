import ButtonsAdd from './ButtonsAdd'

export default function HeaderApp () {
  return (
    <>
      <header>
        <nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                </div>
                <ButtonsAdd />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
