import { SocialIcon } from 'react-social-icons'
import { useRouter } from 'next/router'

const YEAR = new Date().getFullYear()

const CustomFooter = () => {
  const router = useRouter()
  if (router.pathname.startsWith('/posts')) return null;

  return (<footer className="bg-gray-800 text-white fixed bottom-0 left-0 right-0 shadow-lg py-2 px-4 z-50">
  <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-center md:text-left">
    <div>
      <time>&copy; {YEAR} Naipawat Poolsawat.</time> All rights reserved.
    </div>
    <div>
      <sub>Programming language, Operating System calls, Memory.</sub>
    </div>
    <div className="flex justify-center md:justify-end gap-3">
      <SocialIcon
        url="https://linkedin.com/in/naipawat"
        fgColor="#FFFFFF"
        className="border border-black rounded-full shadow-lg w-9 h-9"
      />
      <SocialIcon
        url="https://www.github.com/boraxpr"
        fgColor="#FFFFFF"
        className="border border-black rounded-full shadow-lg w-9 h-9"
      />
    </div>
  </div>
</footer>)
}
export default {
  darkMode: true,
  footer: CustomFooter,
}
