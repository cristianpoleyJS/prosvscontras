import FormContra from 'components/Contra/Form'
import FormPro from 'components/Pro/Form'
import { useState } from 'react'

export default function ButtonsAdd () {
  const [openNewPro, setOpenedFormPro] = useState(false)
  const [openNewContra, setOpenedFormContra] = useState(false)

  const handleNewForm = (pro = false, contra = false) => {
    setOpenedFormPro(pro)
    setOpenedFormContra(contra)
  }
  return (
        <>
            <div>
                <div className="ml-10 flex items-baseline space-x-4">
                    <a href="#nuevo-pro" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => handleNewForm(true, false)}>Añadir pro</a>
                    <a href="#nuevo-contra" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => handleNewForm(false, true)}>Añadir contra</a>
                </div>
            </div>
            { openNewPro ? <FormPro /> : '' }
            { openNewContra ? <FormContra /> : '' }
        </>
  )
}
