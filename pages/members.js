import Link from 'next/link';
import { FaSteam, FaTwitch, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

import styles from '../styles/members.module.css';
import membersData from '../src/membersData';

const compareNicknames = (a, b) => {
  const nicknameA = a.nickname.toLowerCase();
  const nicknameB = b.nickname.toLowerCase();
  return nicknameA.localeCompare(nicknameB);
};

function MembersPage() {
  const sortedMembersData = membersData.slice().sort(compareNicknames);

  return (
    <div className={styles.membersPage}>
      <h1>Membros</h1>
      <div className={styles.membersContainer}>
      {sortedMembersData.map((member) => (
        <div className={styles.memberCard} key={member.id}>
          <div className={styles.flag}>
            {member.flag}
          </div>
          <img className={styles.memberCardImg} src={member.imageSrc} alt={member.name} />
          <h2 className={styles.memberCardH2}>{member.nickname}</h2>
          <div className={styles.socialIcons}>
            {member.socialMedia.steam && (
              <Link className={styles.socialIconsA} href={member.socialMedia.steam} target="_blank" rel="noopener noreferrer">
                <FaSteam size={24} />
              </Link>
            )}
            {member.socialMedia.twitch && (
              <Link className={styles.socialIconsA} href={member.socialMedia.twitch} target="_blank" rel="noopener noreferrer">
                <FaTwitch size={24} />
              </Link>
            )}
            {member.socialMedia.youtube && (
              <Link className={styles.socialIconsA} href={member.socialMedia.youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube size={24} />
              </Link>
            )}
            {member.socialMedia.instagram && (
              <Link className={styles.socialIconsA} href={member.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </Link>
            )}
            {member.socialMedia.twitter && (
              <Link className={styles.socialIconsA} href={member.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter size={24} />
              </Link>
            )}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default MembersPage;
