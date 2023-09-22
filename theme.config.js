import { SocialIcon } from 'react-social-icons';
const YEAR = new Date().getFullYear();

export default {
  darkMode: true,
  footer: (
    <footer>
      <div>
        <time>{YEAR}</time> © Naipawat Poolsawat. All rights reserved.
      </div>
      <div>
        <SocialIcon url="https://linkedin.com/in/naipawat-poolsawat" fgColor="#FFFFFF" />
        <SocialIcon url="https://www.github.com/boraxpr" fgColor="#FFFFFF" />
      </div>
    </footer>
  ),
};
