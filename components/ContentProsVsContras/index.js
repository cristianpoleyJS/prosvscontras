import Contra from 'components/Contra'
import Resume from 'components/Resume'
import Pro from 'components/Pro'
import { useState } from 'react'
import IconAdd from 'components/Icons/IconAdd'

export default function ContentProsVsContras ({ themeMode }) {
  const [pro, setPro] = useState('')
  const [contra, setContra] = useState('')

  const [pros, setPros] = useState([])
  const [contras, setContras] = useState([])

  const handleOnChangePro = (event) => {
    setPro(event.target.value)
  }
  const handleOnChangeContra = (event) => {
    setContra(event.target.value)
  }

  const removePro = (pro) => {
    setPros(pros.filter(p => p !== pro))
  }

  const removeContra = (contra) => {
    setContras(contras.filter(c => c !== contra))
  }

  const handleAddPro = (event) => {
    event.preventDefault()
    if (pro && !pros.includes(pro)) {
      setPros([...pros, pro])
      setPro('')
    }
  }
  const handleAddContra = (event) => {
    event.preventDefault()
    if (contra && !contras.includes(contra)) {
      setContras([...contras, contra])
      setContra('')
    }
  }

  return (
        <>
            <section className="grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 relative">
                <div id="pros" className={`pros relative overflow-hidden bg-indigo-500 sm:dark:bg-gray-900 sm:bg-gray-100 ${themeMode}`}>
                  <div className="z-10 absolute w-full mb-14 lg:pt-16 lg:px-32 pt-10 sm:px-10 sm:pl-10 pl-10">
                    <form className="block">
                      <input
                        type="text"
                        value={pro}
                        onChange={handleOnChangePro}
                        className="shadow w-5/6 sm:w-2/3 appearance-none border rounded py-2 px-3 text-grey-darker border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent"
                        placeholder="La parte buena es..."
                      />
                      <button className="align-middle ml-2 focus:outline-none" onClick={handleAddPro}>
                        <IconAdd weight="32px" height="32px" fill="#fff"/>
                      </button>
                    </form>
                    <ul className="overflow-y-auto overflow-x-hidden mt-8">
                        {pros.map((pro, ix) => {
                          return (
                          <li className="text-white text-sm mr-6" key={ix}>
                            <Pro pro={pro} remove={removePro} themeMode={themeMode}/>
                          </li>)
                        })}
                    </ul>
                  </div>
                </div>

                <Resume
                  prosLength={pros.length}
                  contrasLength={contras.length} />

                <div className={`contras relative overflow-hidden bg-gray-100 dark:bg-gray-900 sm:dark:bg-indigo-500 sm:bg-indigo-500 ${themeMode}`}>
                  <div className="z-10 absolute w-full lg:pt-16 lg:px-32 pt-10 sm:px-10 sm:pl-10 pl-10">
                    <form className="block ml-0 sm:ml-6">
                      <input
                        type="text"
                        value={contra}
                        onChange={handleOnChangeContra}
                        className="shadow w-5/6 sm:w-2/3 appearance-none border rounded py-2 px-3 text-grey-darker border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Pero la mala es..."
                      />
                      <button className="align-middle ml-2 focus:outline-none" onClick={handleAddContra}>
                        <IconAdd weight="32px" height="32px" fill={themeMode === 'dark' ? '#FFF' : 'black'}/>
                      </button>
                    </form>
                    <ul id="contras" className="overflow-y-auto overflow-x-hidden mt-8">
                        {contras.map((contra, ix) => {
                          return (
                            <li className="mr-6" key={ix}>
                              <Contra contra={contra} remove={removeContra} themeMode={themeMode}/>
                            </li>)
                        })}
                    </ul>
                  </div>
                </div>
            </section>
            <style jsx>{`
                section {
                  height: calc(100vh - 7.75rem);
                  min-height: 40rem;
                }
                ul {
                  max-height: calc(100vh - 78vh);
                }
                @media (min-width: 640px) {
                  section {
                    height: calc(100vh - 4rem);
                  }
                  ul {
                    max-height: calc(100vh - 30vh);
                  }
                }
                .pros:before {
                  transform: skew(-5deg);
                  background-color: #6366F1;
                  height: 100%;
                  width: 115%;
                  content: '';
                  top: 0;
                  position: absolute;
                  display: none;
                  left: -15%;
                  right: 0;
                  z-index: 0;
                }
                .contras:before {
                  transform: skew(-5deg);
                  height: 100%;
                  width: 115%;
                  content: '';
                  top: 0;
                  display: none;
                  position: absolute;
                  left: 0;
                  z-index: 0;
                }
                .contras:before {
                  background-color: #F3F4F6;
                }
                .contras.dark:before {
                  background-color: #101827;
                }

                @media (min-width: 768px) {
                  .pros:before {
                    left: -10%;
                    width: 110%;
                  }
                  .contras:before {
                    width: 110%;
                  }
                }
                @media (min-width: 640px) {
                  .pros:before {
                    display: block;
                  }
                  .contras:before {
                    display: block;
                  }
                }
                ul::-webkit-scrollbar {
                  width: .25rem;
                  height: .25rem;
                }

                ul::-webkit-scrollbar-track {
                  background: transparent;
                }

                ul::-webkit-scrollbar-thumb {
                  background-color: #bdbdbd;
                  border-radius: .625rem;
                }
                li {
                  animation: slidein 0.4s;
                  min-height: 2rem;
                }

                @keyframes slidein {
                  from {
                    margin-left: 100%;
                    width: 300%
                  }

                  to {
                    margin-left: 0%;
                    width: 100%;
                  }
                }
            `}</style>
        </>
  )
}
