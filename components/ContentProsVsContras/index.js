import Contra from 'components/Contra'
import Pro from 'components/Pro'
import { useState } from 'react'

export default function ContentProsVsContras () {
  const [pros, setPros] = useState([])
  const [contras, setContras] = useState([])

  const handleAddPro = (event) => {
    if (event.charCode === 13) {
      setPros([...pros, event.target.value])
      event.target.value = ''
    }
  }
  const handleAddContra = (event) => {
    if (event.charCode === 13) {
      setContras([...contras, event.target.value])
      event.target.value = ''
    }
  }
  return (
        <>
            <section className="grid grid-flow-col grid-cols-2">
                <div className="pt-16 px-16 bg-indigo-500">
                    <input type="text" onKeyPress={handleAddPro} className="block mb-14 shadow appearance-none border rounded py-2 px-3 text-grey-darker border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent" placeholder="Dime el Pro..."/>
                    <ul>
                        {pros.map((pro, ix) => {
                          return (
                          <li className="text-white" key={ix}>
                            <Pro pro={pro}/>
                          </li>)
                        })}
                    </ul>
                </div>
                <div className="pt-16 px-16 bg-gray-100">
                    <input type="text" onKeyPress={handleAddContra} className="block mb-14 shadow appearance-none border rounded py-2 px-3 text-grey-darker border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Dime el Contra..." />
                    <ul>
                        {contras.map((contra, ix) => {
                          return (
                            <li className="" key={ix}>
                              <Contra contra={contra}/>
                            </li>)
                        })}
                    </ul>
                </div>
            </section>
            <style jsx>{`
                section {
                    height: calc(100vh - 64px);
                }
            `}</style>
        </>
  )
}
