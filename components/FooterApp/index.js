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
              </div>
          </footer>
        </>
  )
}
