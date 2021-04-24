import IconRemove from 'components/Icons/IconRemove'

export default function Contra ({ contra, remove }) {
  return (
        <>
          <p className="block h-10">
            <button className="inline-block mr-2 align-middle cursor-pointer" onClick={() => remove(contra)}>
              <IconRemove width="24px" height="24px" fill="#F3F4F6"/>
            </button>
            <span className="italic text-lg">
              {contra}
            </span>
          </p>
        </>
  )
}
