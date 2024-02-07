import { SocialIcon } from 'react-social-icons'
const YEAR = new Date().getFullYear()

export default {
  darkMode: true,
  footer: (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 left-0 right-0 shadow-lg">
      <div className="mx-auto flex flex-col  items-center justify-between px-4 ">
        <div className="text-center md:text-left">
          <time>&copy; {YEAR} Naipawat Poolsawat. All rights reserved.</time>
        </div>
        <div className="flex justify-center md:justify-end mt-4 md:mt-0 gap-5">
          <SocialIcon
            url="https://linkedin.com/in/naipawat-poolsawat"
            fgColor="#FFFFFF"
            className="border border-black rounded-full shadow-lg"
          />
          <SocialIcon
            url="https://www.github.com/boraxpr"
            fgColor="#FFFFFF"
            className="border border-black rounded-full shadow-lg"
          />
        </div>
      </div>
    </footer>
  )
}
