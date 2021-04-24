export default function Resume ({ puntuation }) {
  return (
        <>
            <section className="z-20 absolute top-1/2 left-1/2 transform w-52 h-52 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-xl block bg-white">
                <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-6xl italic">{
                    puntuation > 1
                      ? <>
                        DO IT
                    </>
                      : <>
                        Wait...
                    </>
                    }</span>
                </div>
            </section>
        </>
  )
}
