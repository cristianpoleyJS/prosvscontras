import IconRemove from 'components/Icons/IconRemove'

export default function Contra ({ contra, remove }) {
  return (
        <>
          <p className="block break-all">
            <button className="inline-block mr-2 align-middle cursor-pointer focus:outline-none" onClick={() => remove(contra)}>
              <IconRemove width="24px" height="24px" fill="#F3F4F6"/>
            </button>
            <span className="align-middle italic text-lg">
              {contra}
            </span>
          </p>
        </>
  )
}
