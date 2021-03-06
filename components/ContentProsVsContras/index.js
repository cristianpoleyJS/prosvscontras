import Contra from 'components/Contra'
import Pro from 'components/Pro'

export default function ContentProsVsContras () {
  return (
        <>
            <section className="pt-16 px-16">
                <div className="grid grid-flow-col grid-cols-2 gap-4">
                    <div>
                        <Contra />
                    </div>
                    <div>
                        <Pro />
                    </div>
                </div>
            </section>
            <style jsx>{`
                div {
                    outline: 1px solid black;
                }
                section {
                    height: calc(100vh - 64px - 148px - 3.5rem);
                }
            `}</style>
        </>
  )
}
