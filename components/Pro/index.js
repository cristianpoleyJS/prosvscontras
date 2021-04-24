import IconRemove from 'components/Icons/IconRemove'

export default function Pro ({ pro, remove }) {
  return (
        <>
          <p className="block h-10">
            <button className="inline-block mr-2 align-middle cursor-pointer" onClick={() => remove(pro)}>
              <IconRemove width="24px" height="24px" fill="#161b22"/>
            </button>
            <span className="italic text-lg">
              {pro}
            </span>
          </p>
        </>
  )
}
