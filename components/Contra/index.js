import IconRemove from 'components/Icons/IconRemove'

export default function Contra ({ contra, remove, themeMode }) {
  const fillColorIcon = themeMode === 'dark' ? '#FFF' : 'black'
  return (
        <>
          <p className="block break-all">
            <button className="inline-block mr-2 align-middle cursor-pointer focus:outline-none" onClick={() => remove(contra)}>
              <IconRemove width="24px" height="24px" fill={fillColorIcon}/>
            </button>
            <span className="align-middle italic text-lg dark:text-white">
              {contra}
            </span>
          </p>
        </>
  )
}
