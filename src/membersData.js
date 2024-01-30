const defaultFlag = '❓';
const countryFlag = {
  'Brazil': '🇧🇷',
  'Canada': '🇨🇦',
}

const membersData = [
  {
    id: 1,
    name: 'Rodrigo',
    nickname: 'matsu',
    imageSrc: '/images/members/matsu.png',
    socialMedia: {
      steam: 'https://steamcommunity.com/id/matsu-/',
      twitch: 'https://www.twitch.tv/matsuGG_',
      youtube: 'https://www.youtube.com/@matsu1337',
      instagram: 'https://www.instagram.com/matsuhiiro',
      twitter: '',
    },
    birthday: 'May 18, 1996',
    country: 'Brazil',
    flag: countryFlag['Brazil'] || defaultFlag,
    games: [
      {
        name: "Counter Strike 2"
      }
    ]
  },
  {
    id: 2,
    name: 'Yuri',
    nickname: 'sor1nha',
    imageSrc: '/images/members/sor1nha.png',
    socialMedia: {
      steam: 'https://steamcommunity.com/id/sor1nha/',
      twitch: 'https://www.twitch.tv/sorinha1',
      youtube: 'https://www.youtube.com/channel/UCBrVGMNlPU6E_APk0vTfCCw',
      instagram: 'https://www.instagram.com/yuriwendt1/',
      twitter: '',
    },
    birthday: 'May 28',
    country: 'Brazil',
    flag: countryFlag['Brazil'] || defaultFlag
  },
  {
    id: 3,
    name: 'Bruno',
    nickname: 'trace11 (bng)',
    imageSrc: '/images/members/trace11.png',
    socialMedia: {
      steam: 'https://steamcommunity.com/id/bng91',
      twitch: 'https://www.twitch.tv/sorinha1',
      youtube: '',
      instagram: '',
      twitter: '',
    },
    birthday: 'September 6, 1991',
    country: 'Brazil',
    flag: countryFlag['Brazil'] || defaultFlag
  },
  {
    id: 4,
    name: 'Breno',
    nickname: 'theg0dbrenin',
    imageSrc: '/images/members/brenin.png',
    socialMedia: {
      steam: 'https://steamcommunity.com/id/bcdias96',
      twitch: '',
      youtube: '',
      instagram: 'https://www.instagram.com/brenodias18/',
      twitter: '',
    },
    birthday: 'August 7, 1996',
    country: 'Canada',
    flag: countryFlag['Canada'] || defaultFlag
  },
  {
    id: 4,
    name: 'Caio',
    nickname: 'napz',
    imageSrc: '/images/members/napz.png',
    socialMedia: {
      steam: 'https://steamcommunity.com/id/napzfps',
      twitch: '',
      youtube: '',
      instagram: 'https://www.instagram.com/caionapz/',
      twitter: '',
    },
    birthday: 'February 2',
    country: 'Brazil',
    flag: countryFlag['Brazil'] || defaultFlag
  },
  {
    id: 4,
    name: 'Kauan',
    nickname: 'kauanzera',
    imageSrc: '/images/members/kauan.png',
    socialMedia: {
      steam: '',
      twitch: '',
      youtube: '',
      instagram: 'https://www.instagram.com/kauan.clayton',
      twitter: '',
    },
    birthday: 'August 24',
    country: 'Brazil',
    flag: countryFlag['Brazil'] || defaultFlag
  },
  {
    id: 5,
    name: 'Matheus',
    nickname: 'fkx',
    imageSrc: '/images/members/fkx.png',
    socialMedia: {
      steam: 'https://steamcommunity.com/id/fkx09',
      twitch: '',
      youtube: 'https://www.youtube.com/@matheuscosta4894',
      instagram: 'https://www.instagram.com/matheuxcoxta',
      twitter: '',
    },
    birthday: '',
    country: 'Brazil',
    flag: countryFlag['Brazil'] || defaultFlag
  },
  {
    id: 6,
    name: 'Gabriel',
    nickname: 'sozo',
    imageSrc: '/images/members/sozo.png',
    socialMedia: {
      steam: 'https://steamcommunity.com/profiles/76561198154889634',
      twitch: '',
      youtube: '',
      instagram: 'https://www.instagram.com/matheuxcoxta',
      twitter: '',
    },
    birthday: '',
    country: 'Brazil',
    flag: countryFlag['Brazil'] || defaultFlag
  },
  {
    id: 7,
    name: 'Felipe',
    nickname: 'Jukkinha',
    imageSrc: '/images/members/jukkinha.png',
    socialMedia: {
      steam: '',
      twitch: '',
      youtube: '',
      instagram: '',
      twitter: '',
    },
    birthday: '',
    country: 'Brazil',
    flag: countryFlag['Brazil'] || defaultFlag
  },
];

export default membersData;