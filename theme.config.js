import { SocialIcon } from 'react-social-icons'
const YEAR = new Date().getFullYear()

export default {
  darkMode: true,
  footer: (
    <footer className="bg-gray-800 text-white fixed bottom-0 left-0 right-0 shadow-lg">
      <div className="mx-auto flex md:flex-col flex-row  items-center justify-between px-4 ">
        <div className="text-center md:text-left">
          <time>&copy; {YEAR} Naipawat Poolsawat. All rights reserved.</time>
        </div>
        <div className="text-center md:text-left ">
        <sub>Programming language, Operating System calls, Memory.</sub>
        </div>
        <div className="flex justify-center md:justify-end md:mt-4 mt-0 gap-5">
          <SocialIcon
            url="https://linkedin.com/in/naipawat"
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
