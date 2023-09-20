import { SocialIcon } from 'react-social-icons';
const YEAR = new Date().getFullYear()
export default {
  darkMode: true,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <SocialIcon url="https://linkedin.com/in/naipawat-poolsawat" fgColor="#FFFFFF" style={{ float: 'right' }} />

      <SocialIcon url="https://www.github.com/boraxpr" fgColor="#FFFFFF" style={{ float: 'right' }} />

      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <time>{YEAR}</time> © Naipawat Poolsawat. All rights reserved.
    </small>
  )
}

