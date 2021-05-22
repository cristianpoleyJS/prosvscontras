import Avatar from 'components/Avatar'
import IconHeart from 'components/Icons/IconHeart'

export default function FooterApp () {
  return (
        <>
          <footer className="bg-gray-100 dark:bg-gray-800 sm:bg-transparent mt-0 sm:mt-14 pb-6 px-6 lg:px-16 sm:pt-6 text-base sm:absolute sm:-bottom-0 w-full">
              <div>
                <span className="text-black md:text-white dark:text-white">
                  Made and designed with <i className="inline-block align-top"><IconHeart fill="#ef3075" width="24" heigth="24"/></i> by<Avatar/>
                  <a href="https://cristianpoley.com" target="_blank" className="underline" rel="noreferrer">
                      @cristianpoley
                  </a>
                </span>
              </div>
          </footer>
        </>
  )
}
