import Contra from 'components/Contra'
import Resume from 'components/Resume'
import Pro from 'components/Pro'
import { useState } from 'react'
// import IconAdd from 'components/Icons/IconAdd'

export default function ContentProsVsContras () {
  const [pros, setPros] = useState([])
  const [contras, setContras] = useState([])

  const handleAddPro = (event) => {
    if (event.charCode === 13 && event.target.value) {
      setPros([...pros, event.target.value])
      event.target.value = ''
    }
  }
  const handleAddContra = (event) => {
    if (event.charCode === 13 && event.target.value) {
      setContras([...contras, event.target.value])
      event.target.value = ''
    }
  }

  const removePro = (pro) => {
    setPros(pros.filter(p => p !== pro))
  }

  const removeContra = (contra) => {
    setContras(contras.filter(c => c !== contra))
  }

  return (
        <>
            <section className="grid grid-flow-col grid-cols-2 relative">
                <div className="pt-16 px-32 relative pros overflow-hidden bg-gray-100">
                  <div className="z-10 absolute w-2/3">
                    <div className="block mb-14">
                      <input type="text" onKeyPress={handleAddPro} className="shadow appearance-none border rounded py-2 px-3 text-grey-darker border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent" placeholder="Dime el Pro..."/>
                      {/* <button className="align-middle ml-4" onClick={handleAddPro}>
                        <IconAdd weight="40px" height="40px" fill="#F3F4F6"/>
                      </button> */}
                    </div>
                    <ul>
                        {pros.map((pro, ix) => {
                          return (
                          <li className="text-white" key={ix}>
                            <Pro pro={pro} remove={removePro}/>
                          </li>)
                        })}
                    </ul>
                  </div>
                </div>
                <Resume puntuation={(pros.length + 1) / (contras.length + 1)}/>
                <div className="pt-16 px-32 contras relative overflow-hidden bg-indigo-500">
                  <div className="z-10 absolute w-2/3">
                    <div className="block mb-14">
                      <input type="text" onKeyPress={handleAddContra} className="shadow appearance-none border rounded py-2 px-3 text-grey-darker border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Dime el Contra..." />
                      {/* <button className="align-middle ml-4" onClick={handleAddContra}>
                        <IconAdd weight="40px" height="40px" fill="#F3F4F6"/>
                      </button> */}
                    </div>
                    <ul className="z-10">
                        {contras.map((contra, ix) => {
                          return (
                            <li className="" key={ix}>
                              <Contra contra={contra} remove={removeContra}/>
                            </li>)
                        })}
                    </ul>
                  </div>
                </div>
            </section>
            <style jsx>{`
                section {
                  height: calc(100vh - 64px);
                }
                .pros:before {
                  transform: skew(-5deg);
                  background-color: #6366F1;
                  height: 100%;
                  width: 110%;
                  content: '';
                  top: 0;
                  position: absolute;
                  left: -10%;
                  right: 0;
                  z-index: 0;
                }
                .contras:before {
                  transform: skew(-5deg);
                  background-color: #F3F4F6;
                  height: 100%;
                  width: 110%;
                  content: '';
                  top: 0;
                  position: absolute;
                  left: 0;
                  z-index: 0;
                }
                li {
                  animation: slidein 0.4s;
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
