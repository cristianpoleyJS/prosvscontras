import IconKO from 'components/Icons/IconKO'
import IconOK from 'components/Icons/IconOK'
import IconThinking from 'components/Icons/IconThinking'

export default function Resume ({ prosLength, contrasLength }) {
  return (
        <>
            <section className="z-20 absolute top-1/2 left-1/2 transform lg:w-52 lg:h-52 w-32 h-32 rounded-full -translate-x-1/2 sm:-translate-y-1/2 -translate-y-20 shadow-xl block bg-white dark:bg-gray-800">
                <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span>{
                      prosLength === 0 && contrasLength === 0
                        ? <>
                        <IconThinking height="100%" width="100%" fillhand="#eab14d" fillshadowhand="#c98818" fillborder="#6366f1"/>
                      </>
                        : (
                            (prosLength - contrasLength) >= 1
                              ? <>
                          <IconOK height="100%" width="100%" fillcontent="#8e90f5" fillborder="#6366f1"/>
                        </>
                              : <>
                          <IconKO height="100%" width="100%" fillcontent="#8e90f5" fillborder="#6366f1"/>
                        </>
                          )
                    }</span>
                </div>
            </section>
        </>
  )
}
