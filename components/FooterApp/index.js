import Avatar from 'components/Avatar'
import IconHeart from 'components/Icons/IconHeart'

export default function FooterApp () {
  return (
        <>
          <footer className="mt-14 pb-6 px-16 pt-6 text-base fixed -bottom-0 w-full">
              <div>
                <span className="text-white">
                  Made and designed with <i className="inline-block align-top"><IconHeart fill="#ef3075" width="24" heigth="24"/></i> by<Avatar/>
                  <a href="https://cristianpoley.com" target="_blank" rel="noreferrer">
                      @cristianpoley
                  </a>
                </span>
                <a className="made-with-nextjs bg-white w-40 text-center m-auto mt-8 no-underline block p-2 font-medium rounded" href="https://nextjs.org/" target="_blank" rel="noreferrer">
                    Made with <span>NextJS</span>
                </a>
              </div>
          </footer>
          <style jsx>{`

            .made-with-nextjs {
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
