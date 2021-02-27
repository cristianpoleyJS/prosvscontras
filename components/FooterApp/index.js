import Avatar from 'components/Avatar'
import IconHeart from 'components/Icons/IconHeart'

export default function FooterApp () {
  return (
        <>
          <footer className="mt-14 pb-6 px-32 text-base">
              <div>
                Made with <i><IconHeart fill="#ef3075" width="24" heigth="24"/></i> and designed by<Avatar/>
                <a href="https://cristianpoley.com" target="_blank" rel="noreferrer">
                    @cristianpoley
                </a>
                <a className="made-with-nextjs w-40 text-center m-auto mt-8 no-underline block p-2 font-medium rounded" href="https://nextjs.org/" target="_blank" rel="noreferrer">
                    Made with <span>NextJS</span>
                </a>
              </div>
          </footer>
          <style jsx>{`

            i {
                display: inline-block;
                vertical-align: top;
            }

            .made-with-nextjs {
                background: #fff;
                box-shadow: 0 1px 3px #0003, 0 6px 13px #0000001a;
                transform-origin: 50% 50%;
            }

            .made-with-nextjs span {
                color: #186aff;
            }
          `}
          </style>
        </>
  )
}
