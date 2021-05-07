import IconRemove from 'components/Icons/IconRemove'

export default function Pro ({ pro, remove }) {
  return (
        <>
          <p className="block break-all">
            <button className="inline-block mr-2 align-middle cursor-pointer focus:outline-none" onClick={() => remove(pro)}>
              <IconRemove width="24px" height="24px" fill="#161b22"/>
            </button>
            <span className="align-middle italic text-lg">
              {pro}
            </span>
          </p>
        </>
  )
}
