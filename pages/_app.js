import Link from 'next/link';
import { FaTwitch, FaYoutube, FaDiscord, FaSteam } from 'react-icons/fa';

import '../styles/global.css';

const LINKS = {
  discord: 'https://discord.gg/CFZSssgg3U',
  twitch: 'https://www.twitch.tv/mixzaontc',
  steam: 'https://steamcommunity.com/groups/mixzaontc',
  youtube: 'https://www.youtube.com/channel/UCmVVHqKhDmGXiVep7hHKVfg',
}

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <header>
        <div className="header-content">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo_mixzao.png" alt="Logo" />
            </Link>
          </div>

          <nav>
            <ul>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/about">SOBRE NÓS</Link></li>
              <li><Link href="/members">MEMBROS</Link></li>
              <li><Link href="/streams">STREAMS</Link></li>
              <li><Link href="/meetings">ROLÊS</Link></li>
            </ul>
          </nav>

          <div className="social-icons">
            <Link href={LINKS.discord} target="_blank" rel="noopener noreferrer">
              <FaDiscord size={36} />
            </Link>
            <Link href={LINKS.twitch} target="_blank" rel="noopener noreferrer">
              <FaTwitch size={36} />
            </Link>
            <Link href={LINKS.steam} target="_blank" rel="noopener noreferrer">
              <FaSteam size={36} />
            </Link>
            <Link href={LINKS.youtube} target="_blank" rel="noopener noreferrer">
              <FaYoutube size={36} />
            </Link>
          </div>
        </div>
      </header>
      
      <main>
        <Component {...pageProps} />
      </main>
      
      <footer>
        <p>&copy; 2024 MIXZAONTC</p>
      </footer>
    </div>
  );
}

export default MyApp;
