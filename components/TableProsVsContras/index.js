import Contra from 'components/Contra'
import Pro from 'components/Pro'

export default function TableProsVsContras () {
  return (
        <>
            <div className="table w-full">
                <div className="table-row-group">
                    <div className="table-row">
                        <Pro />
                    </div>
                    <div className="table-row">
                        <Contra />
                    </div>
                </div>
            </div>
        </>
  )
}
