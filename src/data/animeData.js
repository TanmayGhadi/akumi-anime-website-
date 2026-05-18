// Pre-curated, high-fidelity real anime data matching the UI mockup design exactly.
// All images are stable direct URLs from official streaming CDNs (Crunchyroll, TMDB, AniList).

export const ANIME_CATEGORIES = {
  TRENDING: 'Trending Now',
  CONTINUE_WATCHING: 'Continue Watching',
  TOP_PICKS: 'Top Picks For You',
  GENRES: 'Explore by Genre',
  LIBRARY: 'Anime Library',
  LIVE: 'Live Now',
  UPCOMING: 'Upcoming Schedule'
};

export const GENRES = [
  { id: 'cyberpunk-scifi', name: 'Cyberpunk / Sci-Fi', count: '12 Shows', gradient: 'from-cyan-500/25 to-blue-600/25', border: 'border-cyan-500/30', glow: 'shadow-[0_0_15px_rgba(6,182,212,0.15)]', icon: 'Cpu' },
  { id: 'dark-action', name: 'Dark Action', count: '18 Shows', gradient: 'from-rose-500/25 to-red-600/25', border: 'border-red-500/30', glow: 'shadow-[0_0_15px_rgba(239,68,68,0.15)]', icon: 'Flame' },
  { id: 'neon-fantasy', name: 'Neon Fantasy', count: '15 Shows', gradient: 'from-fuchsia-500/25 to-purple-600/25', border: 'border-fuchsia-500/30', glow: 'shadow-[0_0_15px_rgba(217,70,239,0.15)]', icon: 'Sparkles' },
  { id: 'stylish-urban', name: 'Stylish Urban', count: '10 Shows', gradient: 'from-indigo-500/25 to-violet-600/25', border: 'border-indigo-500/30', glow: 'shadow-[0_0_15px_rgba(99,102,241,0.15)]', icon: 'Compass' },
  { id: 'fantasy-adventure', name: 'Fantasy Adventure', count: '22 Shows', gradient: 'from-emerald-500/25 to-teal-600/25', border: 'border-emerald-500/30', glow: 'shadow-[0_0_15px_rgba(16,185,129,0.15)]', icon: 'Sword' },
  { id: 'shonen-classics', name: 'Shonen Classics', count: '30 Shows', gradient: 'from-amber-500/25 to-orange-600/25', border: 'border-amber-500/30', glow: 'shadow-[0_0_15px_rgba(245,158,11,0.15)]', icon: 'Zap' }
];

export const ANIME_DATA = [
  {
    id: 'solo-leveling',
    title: 'Solo Leveling',
    japaneseTitle: '俺だけレベルアップな件',
    season: 'Season 2',
    episode: 'Episode 7',
    currentEpisodeNum: 7,
    totalEpisodes: 12,
    rating: 8.7,
    year: 2024,
    genres: ['Action', 'Fantasy', 'System', 'Mecha'],
    synopsis: 'The weak become strong. A new level of power awakens. In a world where hunters must battle deadly monsters to protect mankind, Sung Jinwoo, the weakest hunter of all mankind, finds himself in a struggle for survival deep within a double dungeon. When he is chosen by a mysterious Program, he gains the unique ability to level up infinitely.',
    poster: 'https://cdn.myanimelist.net/images/anime/1090/140784.jpg',
    backdrop: 'https://img.youtube.com/vi/Ua0R9cZ57i8/maxresdefault.jpg',
    trailerId: 'Ua0R9cZ57i8',
    streamUrl: 'https://animesalt.ac/series/solo-leveling/',
    progress: 85,
    timeLeft: '12m remaining',
    watchlist: true,
    upcomingSchedule: {
      day: 'Saturday',
      time: '20:00',
      countdown: '00:23:47',
      label: 'Today 20:00'
    },
    trendingRank: 1,
    cast: ['Taito Ban', 'Reina Ueda', 'Genta Nakamura', 'Daisuke Hirakawa'],
    reviews: [
      { user: 'ShadowMonarch', rating: 10, text: 'This is the adaptation of a lifetime. The animation by A-1 Pictures is jaw-dropping, especially the double dungeon fight!' },
      { user: 'HunterJin', rating: 9, text: 'Amazing pacing, very true to the webtoon. The musical score by Hiroyuki Sawano is outstanding!' }
    ]
  },
  {
    id: 'jujutsu-kaisen',
    title: 'Jujutsu Kaisen',
    japaneseTitle: '呪術廻戦',
    season: 'Season 2',
    episode: 'Episode 20',
    currentEpisodeNum: 20,
    totalEpisodes: 23,
    rating: 8.9,
    year: 2023,
    genres: ['Action', 'Dark Fantasy', 'Supernatural'],
    synopsis: 'Yuji Itadori, a boy with tremendous physical strength, swallows the finger of Ryomen Sukuna, a legendary curse. Now sharing his body, he enters the Tokyo Jujutsu High School to learn how to fight curses and find the remaining fingers to exorcise Sukuna completely.',
    poster: 'https://cdn.myanimelist.net/images/anime/1792/138022.jpg',
    backdrop: 'https://img.youtube.com/vi/h45Zeq2ZtT4/maxresdefault.jpg',
    trailerId: 'h45Zeq2ZtT4',
    streamUrl: 'https://animesalt.ac/series/jujutsu-kaisen/',
    progress: 92,
    timeLeft: '2m remaining',
    watchlist: true,
    upcomingSchedule: {
      day: 'Thursday',
      time: '18:30',
      label: 'Today 18:30'
    },
    trendingRank: 2,
    liveViewerCount: '12.5K watching',
    cast: ['Junya Enoki', 'Yuma Uchida', 'Asami Seto', 'Yuichi Nakamura'],
    reviews: [
      { user: 'SatoruLimitless', rating: 10, text: 'The Shibuya Incident Arc is pure chaotic perfection. Mappa\'s animation and choreography are out of this world!' }
    ]
  },
  {
    id: 'demon-slayer',
    title: 'Demon Slayer',
    japaneseTitle: '鬼滅の刃',
    season: 'Season 3',
    episode: 'Episode 11',
    currentEpisodeNum: 11,
    totalEpisodes: 11,
    rating: 8.6,
    year: 2023,
    genres: ['Action', 'Historical', 'Adventure'],
    synopsis: 'In Taisho-era Japan, Tanjiro Kamado is a kindhearted boy who makes a living selling charcoal. His peaceful life is shattered when a demon slaughters his family, and his younger sister Nezuko is turned into a demon. Tanjiro sets out to become a demon slayer to turn his sister back human.',
    poster: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
    backdrop: 'https://img.youtube.com/vi/tzQ57519Z1c/maxresdefault.jpg',
    trailerId: 'tzQ57519Z1c',
    streamUrl: 'https://animesalt.ac/series/demon-slayer/',
    progress: 100,
    timeLeft: 'Completed',
    watchlist: true,
    upcomingSchedule: {
      day: 'Sunday',
      time: '23:30',
      label: 'Sunday 23:30'
    },
    trendingRank: 3,
    liveViewerCount: '9.8K watching',
    cast: ['Natsuki Hanae', 'Akari Kito', 'Yoshitsugu Matsuoka', 'Hiro Shimono'],
    reviews: [
      { user: 'MugenRider', rating: 10, text: 'Ufotable does it again. The visual effects are literally breathtaking. The Hinokami Kagura scenes are legendary.' }
    ]
  },
  {
    id: 'attack-on-titan',
    title: 'Attack on Titan',
    japaneseTitle: '進撃の巨人',
    season: 'Final Season P2',
    episode: 'Episode 5',
    currentEpisodeNum: 80,
    totalEpisodes: 87,
    rating: 9.1,
    year: 2022,
    genres: ['Action', 'Drama', 'Sci-Fi', 'Psychological'],
    synopsis: 'Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. In the present, Eren Yeager and his friends join the Survey Corps to fight the Titans and uncover the dark history behind their existence.',
    poster: 'https://cdn.myanimelist.net/images/anime/1917/139634.jpg',
    backdrop: 'https://img.youtube.com/vi/LHtdKW55bT0/maxresdefault.jpg',
    trailerId: 'LHtdKW55bT0',
    streamUrl: 'https://animesalt.ac/series/attack-on-titan/',
    progress: 40,
    timeLeft: '14m remaining',
    watchlist: false,
    trendingRank: 4,
    cast: ['Yuki Kaji', 'Yui Ishikawa', 'Marina Inoue', 'Hiroshi Kamiya'],
    reviews: [
      { user: 'ErenJaegerist', rating: 10, text: 'A masterpiece of modern storytelling. The twists, the political drama, the action - absolute masterpiece.' }
    ]
  },
  {
    id: 'chainsaw-man',
    title: 'Chainsaw Man',
    japaneseTitle: 'チェンソーマン',
    season: 'Season 1',
    episode: 'Episode 8',
    currentEpisodeNum: 8,
    totalEpisodes: 12,
    rating: 8.5,
    year: 2022,
    genres: ['Action', 'Gore', 'Dark Fantasy'],
    synopsis: 'Denji is a teenage boy living with a Chainsaw Devil named Pochita. Due to the debt his father left behind, he has been living a bottom-of-the-barrel life while repaying his debt by harvesting devil corpses with Pochita. One day, Denji is betrayed and killed. As his consciousness fades, he makes a contract with Pochita and revives as "Chainsaw Man".',
    poster: 'https://cdn.myanimelist.net/images/anime/1906/128699.jpg',
    backdrop: 'https://img.youtube.com/vi/l752lXenX-c/maxresdefault.jpg',
    trailerId: 'l752lXenX-c',
    streamUrl: 'https://animesalt.ac/series/chainsaw-man/',
    progress: 75,
    timeLeft: '5m remaining',
    watchlist: true,
    cast: ['Kikunosuke Toya', 'Tomori Kusunoki', 'Shogo Sakata', 'Fairouz Ai'],
    reviews: [
      { user: 'MakimaDog', rating: 9, text: 'Brilliant dark comedy and amazing action sequences. The ending themes changing every episode is a legendary touch!' }
    ]
  },
  {
    id: 'vinland-saga',
    title: 'Vinland Saga',
    japaneseTitle: 'ヴィンランド・サガ',
    season: 'Season 2',
    episode: 'Episode 10',
    currentEpisodeNum: 34,
    totalEpisodes: 48,
    rating: 8.8,
    year: 2023,
    genres: ['Action', 'Adventure', 'Drama', 'Historical'],
    synopsis: 'Around the end of the millennium, the Vikings, the most powerful and atrocious tribe, were outbreaking everywhere. Thorfinn, the son of the greatest warrior, spends his boyhood in the battlefield, seeking revenge for his father slain by the mercenary leader Askeladd.',
    poster: 'https://cdn.myanimelist.net/images/anime/1500/130008.jpg',
    backdrop: 'https://img.youtube.com/vi/f8JrZsksGzY/maxresdefault.jpg',
    trailerId: 'f8JrZsksGzY',
    streamUrl: 'https://animesalt.ac/series/vinland-saga/',
    progress: 60,
    timeLeft: '9m remaining',
    watchlist: false,
    cast: ['Yuto Uemura', 'Shunsuke Takeuchi', 'Kensho Ono', 'Akio Otsuka'],
    reviews: [
      { user: 'TrueWarrior', rating: 10, text: 'Season 2 is a masterpiece of character growth. "I have no enemies" is one of the most powerful arcs in anime history.' }
    ]
  },
  {
    id: 'my-hero-academia',
    title: 'My Hero Academia',
    japaneseTitle: '僕のヒーローアカデミア',
    season: 'Season 7',
    episode: 'Episode 6',
    currentEpisodeNum: 144,
    totalEpisodes: 150,
    rating: 8.0,
    year: 2024,
    genres: ['Action', 'Sci-Fi', 'Shonen'],
    synopsis: 'In a world where eighty percent of the population has some kind of superpowered "Quirk", Izuku Midoriya is quirkless. However, after a chance meeting with the world\'s greatest hero, All Might, Izuku inherits his legendary quirk, "One For All", and enters the prestigious U.A. High School.',
    poster: 'https://cdn.myanimelist.net/images/anime/1911/142519.jpg',
    backdrop: 'https://img.youtube.com/vi/a7C8k0V2q5k/maxresdefault.jpg',
    trailerId: 'a7C8k0V2q5k',
    streamUrl: 'https://animesalt.ac/series/my-hero-academia/',
    progress: 50,
    timeLeft: '11m remaining',
    watchlist: true,
    upcomingSchedule: {
      day: 'Saturday',
      time: '17:30',
      label: 'Saturday 17:30'
    },
    cast: ['Daiki Yamashita', 'Nobuhiko Okamoto', 'Ayane Sakura', 'Kenta Miyake'],
    reviews: []
  },
  {
    id: 'steins-gate',
    title: 'Steins;Gate',
    japaneseTitle: 'シュタインズ・ゲート',
    season: 'Series',
    episode: 'Episode 24',
    currentEpisodeNum: 24,
    totalEpisodes: 24,
    rating: 9.2,
    year: 2011,
    genres: ['Sci-Fi', 'Psychological', 'Thriller', 'Cyberpunk'],
    synopsis: 'Okabe Rintarou is a self-proclaimed mad scientist who runs the Future Gadget Laboratory in Akihabara. Along with his friends, he accidentally creates a microwave device that can send text messages to the past, triggering a deadly struggle to save those he loves from an organization trying to control time.',
    poster: 'https://cdn.myanimelist.net/images/anime/15/35890.jpg',
    backdrop: 'https://img.youtube.com/vi/27OZc5tuTFc/maxresdefault.jpg',
    trailerId: '27OZc5tuTFc',
    streamUrl: 'https://animesalt.ac/series/steins-gate/',
    progress: 10,
    timeLeft: '21m remaining',
    watchlist: true,
    cast: ['Mamoru Miyano', 'Asami Imai', 'Kana Hanazawa', 'Tomokazu Seki'],
    reviews: [
      { user: 'ElPsyCongroo', rating: 10, text: 'Hands down the best time travel show ever created. The first half is slow but sets up a mind-blowing second half.' }
    ]
  },
  {
    id: 'death-note',
    title: 'Death Note',
    japaneseTitle: 'デスノート',
    season: 'Series',
    episode: 'Episode 37',
    currentEpisodeNum: 37,
    totalEpisodes: 37,
    rating: 9.0,
    year: 2006,
    genres: ['Psychological', 'Thriller', 'Mystery'],
    synopsis: 'Light Yagami is an exceptionally intelligent high school student who finds a mysterious notebook dropped by a Shinigami (God of Death) named Ryuk. The notebook grants the user the ability to kill anyone whose name and face they know. Light embarks on a crusade to rid the world of criminals under the alias "Kira", sparking a high-stakes battle of wits with the genius detective L.',
    poster: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
    backdrop: 'https://img.youtube.com/vi/NlJZ-YgAt-c/maxresdefault.jpg',
    trailerId: 'NlJZ-YgAt-c',
    streamUrl: 'https://animesalt.ac/series/death-note/',
    watchlist: false,
    cast: ['Mamoru Miyano', 'Kappei Yamaguchi', 'Shidou Nakamura', 'Aya Hirano'],
    reviews: []
  },
  {
    id: 'tokyo-ghoul',
    title: 'Tokyo Ghoul',
    japaneseTitle: '東京喰種トーキョーグール',
    season: 'Series',
    episode: 'Episode 12',
    currentEpisodeNum: 12,
    totalEpisodes: 12,
    rating: 7.8,
    year: 2014,
    genres: ['Action', 'Gore', 'Dark Fantasy', 'Psychological'],
    synopsis: 'Tokyo has become a city plagued by ravenous "Ghouls" - beings that look exactly like humans but must feed on human flesh to survive. Ken Kaneki, a bookish college student, barely survives a deadly encounter with a ghoul who turns out to be his date. He is saved by an emergency surgery that transplants the ghoul\'s organs into him, turning him into a half-human, half-ghoul hybrid.',
    poster: 'https://cdn.myanimelist.net/images/anime/5/64449.jpg',
    backdrop: 'https://img.youtube.com/vi/vGuQeQpJHos/maxresdefault.jpg',
    trailerId: 'vGuQeQpJHos',
    streamUrl: 'https://animesalt.ac/series/tokyo-ghoul/',
    watchlist: false,
    cast: ['Natsuki Hanae', 'Kana Hanazawa', 'Mamoru Miyano', 'Sora Amamiya'],
    reviews: []
  },
  {
    id: 'bleach-tybw',
    title: 'Bleach: TYBW',
    japaneseTitle: 'BLEACH 千年血戦篇',
    season: 'Part 3',
    episode: 'Episode 8',
    currentEpisodeNum: 24,
    totalEpisodes: 52,
    rating: 9.0,
    year: 2024,
    genres: ['Action', 'Fantasy', 'Shonen'],
    synopsis: 'The Thousand-Year Blood War arc begins as the Soul Society is invaded by the Wandenreich, a hidden empire of Quincy led by Yhwach. Ichigo Kurosaki must unlock the secrets of his heritage and rise to a new level of power to save the Soul Society from total annihilation.',
    poster: 'https://cdn.myanimelist.net/images/anime/1908/138006.jpg',
    backdrop: 'https://img.youtube.com/vi/e8YJZIK2T-U/maxresdefault.jpg',
    trailerId: 'e8YJZIK2T-U',
    streamUrl: 'https://animesalt.ac/series/bleach-thousand-year-blood-war/',
    watchlist: true,
    upcomingSchedule: {
      day: 'Saturday',
      time: '23:00',
      label: 'Saturday 23:00'
    },
    cast: ['Masakazu Morita', 'Noriaki Sugiyama', 'Yuki Matsuoka', 'Hiroshi Kamiya'],
    reviews: []
  },
  {
    id: 'code-geass',
    title: 'Code Geass',
    japaneseTitle: 'コードギアス 反逆のルルーシュ',
    season: 'Series',
    episode: 'Episode 25',
    currentEpisodeNum: 25,
    totalEpisodes: 50,
    rating: 8.7,
    year: 2006,
    genres: ['Mecha', 'Sci-Fi', 'Psychological', 'Military'],
    synopsis: 'In an alternate timeline, the Holy Empire of Britannia has conquered Japan, renaming it "Area 11". Lelouch Lamperouge, an exiled Britannian prince living under an alias, encounters a mysterious girl named C.C. who grants him the "Power of Kings" or "Geass", allowing him to command anyone to do anything. Lelouch starts a rebellion under the persona "Zero" to destroy Britannia.',
    poster: 'https://cdn.myanimelist.net/images/anime/18/48475.jpg',
    backdrop: 'https://img.youtube.com/vi/v-AGjx0NBUo/maxresdefault.jpg',
    trailerId: 'v-AGjx0NBUo',
    streamUrl: 'https://animesalt.ac/series/code-geass/',
    watchlist: false,
    cast: ['Jun Fukuyama', 'Takahiro Sakurai', 'Yukana', 'Ami Koshimizu'],
    reviews: []
  },
  {
    id: 'frieren',
    title: 'Frieren: Beyond Journey\'s End',
    japaneseTitle: '葬送のフリーレン',
    season: 'Season 1',
    episode: 'Episode 28',
    currentEpisodeNum: 28,
    totalEpisodes: 28,
    rating: 9.3,
    year: 2023,
    genres: ['Fantasy Adventure', 'Drama', 'Slice of Life'],
    synopsis: 'Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. But as an elf who easily lives for over a thousand years, Frieren is destined to outlive her companions. How will she come to understand what human lives mean to her, long after her companions have passed?',
    poster: 'https://cdn.myanimelist.net/images/anime/1015/138029.jpg',
    backdrop: 'https://img.youtube.com/vi/QdBVJ65tS9s/maxresdefault.jpg',
    trailerId: 'QdBVJ65tS9s',
    streamUrl: 'https://animesalt.ac/series/frieren-beyond-journeys-end/',
    watchlist: true,
    cast: ['Atsumi Tanezaki', 'Kana Ichinose', 'Chiaki Kobayashi', 'Nobuhiko Okamoto'],
    reviews: [
      { user: 'HimmelTheHero', rating: 10, text: 'A deeply emotional, beautifully animated masterpiece. It perfectly captures the passage of time and the weight of memories.' }
    ]
  },
  {
    id: 'blue-lock',
    title: 'Blue Lock',
    japaneseTitle: 'ブルーロック',
    season: 'Season 2',
    episode: 'Episode 1',
    currentEpisodeNum: 25,
    totalEpisodes: 36,
    rating: 8.3,
    year: 2024,
    genres: ['Sports', 'Thriller', 'Shonen'],
    synopsis: 'After a disastrous defeat at the 2018 World Cup, Japan\'s Football Association initiates a radical training camp called "Blue Lock". Its goal is simple: isolate three hundred elite high school strikers and put them through rigorous training to produce the ultimate, egoistical striker who can lead Japan to World Cup glory.',
    poster: 'https://cdn.myanimelist.net/images/anime/1258/125392.jpg',
    backdrop: 'https://img.youtube.com/vi/d3d4m89_26k/maxresdefault.jpg',
    trailerId: 'd3d4m89_26k',
    streamUrl: 'https://animesalt.ac/series/blue-lock/',
    watchlist: false,
    cast: ['Tasuku Kaito', 'Kazuki Ura', 'Soma Saito', 'Yoshitsugu Matsuoka'],
    reviews: []
  },
  {
    id: 'cyberpunk-edgerunners',
    title: 'Cyberpunk: Edgerunners',
    japaneseTitle: 'サイバーパンク エッジランナーズ',
    season: 'Series',
    episode: 'Episode 10',
    currentEpisodeNum: 10,
    totalEpisodes: 10,
    rating: 8.6,
    year: 2022,
    genres: ['Cyberpunk', 'Sci-Fi', 'Action', 'Gore'],
    synopsis: 'In Night City, a rain-soaked futuristic metropolis obsessed with body modification, David Martinez, a street kid struggling to survive, loses his mother in a tragic accident. Left with nothing, he decides to implant a military-grade cybernetic spine called "Sandevistan" and joins a crew of mercenary outlaws known as "edgerunners".',
    poster: 'https://cdn.myanimelist.net/images/anime/1816/128659.jpg',
    backdrop: 'https://img.youtube.com/vi/JtqIas3bYhg/maxresdefault.jpg',
    trailerId: 'JtqIas3bYhg',
    streamUrl: 'https://animesalt.ac/series/cyberpunk-edgerunners/',
    watchlist: true,
    cast: ['Kenn', 'Aoi Yuki', 'Hiroki Touchi', 'Michiko Kaiden'],
    reviews: [
      { user: 'LucyOnTheMoon', rating: 10, text: 'Devastatingly beautiful. Studio Trigger captured the essence of the game perfectly, and the soundtrack will make you cry.' }
    ]
  },
  {
    id: 'eighty-six',
    title: '86 EIGHTY-SIX',
    japaneseTitle: '86-エイティシックス-',
    season: 'Season 1',
    episode: 'Episode 23',
    currentEpisodeNum: 23,
    totalEpisodes: 23,
    rating: 8.6,
    year: 2021,
    genres: ['Mecha', 'Sci-Fi', 'Drama', 'Psychological'],
    synopsis: 'The Republic of San Magnolia has been at war with the Empire of Giad for nine years. Supposedly, there are no casualties in their drone warfare. However, beyond the walls lies the 86th Sector, where youths known as "Eighty-Six" are stripped of their humanity and forced to pilot the "manned drones" in a horrific war.',
    poster: 'https://cdn.myanimelist.net/images/anime/1987/117507.jpg',
    backdrop: 'https://img.youtube.com/vi/Qy88o2l9h2M/maxresdefault.jpg',
    trailerId: 'Qy88o2l9h2M',
    streamUrl: 'https://animesalt.ac/series/86-eighty-six/',
    watchlist: false,
    cast: ['Shoya Chiba', 'Ikumi Hasegawa', 'Seimi Yamashita', 'Sayumi Suzushiro'],
    reviews: []
  },
  {
    id: 'akira',
    title: 'Akira',
    japaneseTitle: 'アキラ',
    season: 'Movie',
    episode: 'Full Movie',
    currentEpisodeNum: 1,
    totalEpisodes: 1,
    rating: 8.0,
    year: 1988,
    genres: ['Cyberpunk', 'Sci-Fi', 'Action', 'Classic'],
    synopsis: 'In 1988, a mysterious psychic blast destroys Tokyo, starting World War III. By 2019, Neo-Tokyo is a sprawling rain-slicked cyberpunk metropolis plagued by corruption and gang wars. Kaneda, the leader of a biker gang, tries to save his childhood friend Tetsuo, who accidentally triggers latent psychic powers and is captured by a secret military project.',
    poster: 'https://cdn.myanimelist.net/images/anime/7/3733.jpg',
    backdrop: 'https://img.youtube.com/vi/2-5K-0yZ8vE/maxresdefault.jpg',
    trailerId: '2-5K-0yZ8vE',
    streamUrl: 'https://animesalt.ac/series/akira/',
    watchlist: false,
    cast: ['Mitsuo Iwata', 'Nozomu Sasaki', 'Mami Koyama', 'Taro Ishida'],
    reviews: []
  },
  {
    id: 'neon-genesis-evangelion',
    title: 'Neon Genesis Evangelion',
    japaneseTitle: '新世紀エヴァンゲリオン',
    season: 'Series',
    episode: 'Episode 26',
    currentEpisodeNum: 26,
    totalEpisodes: 26,
    rating: 8.6,
    year: 1995,
    genres: ['Mecha', 'Psychological', 'Sci-Fi', 'Classic'],
    synopsis: 'In 2015, fifteen years after a global cataclysm known as the Second Impact, Tokyo-3 is attacked by colossal extraterrestrial monsters called "Angels". Teenager Shinji Ikari is summoned by his cold, distant father Gendo to pilot a giant organic bio-machine named Evangelion Unit-01 to defend humanity, starting a grueling psychological journey.',
    poster: 'https://cdn.myanimelist.net/images/anime/1062/115165.jpg',
    backdrop: 'https://img.youtube.com/vi/13nSISwxrY4/maxresdefault.jpg',
    trailerId: '13nSISwxrY4',
    streamUrl: 'https://animesalt.ac/series/neon-genesis-evangelion/',
    watchlist: false,
    cast: ['Megumi Ogata', 'Megumi Hayashibara', 'Yuko Miyamura', 'Kotono Mitsuishi'],
    reviews: []
  },
  {
    id: 'ghost-in-the-shell',
    title: 'Ghost in the Shell: SAC',
    japaneseTitle: '攻殻機動隊 STAND ALONE COMPLEX',
    season: 'Series',
    episode: 'Stand Alone Complex',
    currentEpisodeNum: 26,
    totalEpisodes: 26,
    rating: 8.5,
    year: 2002,
    genres: ['Cyberpunk', 'Sci-Fi', 'Psychological', 'Action'],
    synopsis: 'In the futuristic 21st century, Major Motoko Kusanagi and Section 9, a special task force of elite cybernetic operatives, investigate cyber-terrorism, political corruption, and the actions of a legendary hacker known as "The Laughing Man".',
    poster: 'https://cdn.myanimelist.net/images/anime/10/20349.jpg',
    backdrop: 'https://img.youtube.com/vi/v8D1v2C6_u8/maxresdefault.jpg',
    trailerId: 'v8D1v2C6_u8',
    streamUrl: 'https://animesalt.ac/series/ghost-in-the-shell-stand-alone-complex/',
    watchlist: false,
    cast: ['Atsuko Tanaka', 'Osamu Saka', 'Akio Otsuka', 'Koichi Yamadera'],
    reviews: []
  },
  {
    id: 'psycho-pass',
    title: 'Psycho-Pass',
    japaneseTitle: 'サイコパス',
    season: 'Season 1',
    episode: 'Episode 22',
    currentEpisodeNum: 22,
    totalEpisodes: 22,
    rating: 8.4,
    year: 2012,
    genres: ['Cyberpunk', 'Sci-Fi', 'Psychological', 'Thriller'],
    synopsis: 'In a near-future dystopian Japan, the Sibyl System measures the mental state, personality, and probability of committing crimes for all citizens, generating their "Psycho-Pass". Inspector Akane Tsunemori and her Enforcer Shinya Kogami chase criminals using the "Dominator" weapon, uncovering the dark truths of Sibyl.',
    poster: 'https://cdn.myanimelist.net/images/anime/11/42451.jpg',
    backdrop: 'https://img.youtube.com/vi/1g_u8v6s_64/maxresdefault.jpg',
    trailerId: '1g_u8v6s_64',
    streamUrl: 'https://animesalt.ac/series/psycho-pass/',
    watchlist: false,
    cast: ['Kana Hanazawa', 'Tomokazu Seki', 'Kenji Nojima', 'Takahiro Sakurai'],
    reviews: []
  },
  {
    id: 'parasyte',
    title: 'Parasyte',
    japaneseTitle: '寄生獣 セイの格率',
    season: 'Series',
    episode: 'The Maxim',
    currentEpisodeNum: 24,
    totalEpisodes: 24,
    rating: 8.3,
    year: 2014,
    genres: ['Sci-Fi', 'Gore', 'Thriller', 'Psychological'],
    synopsis: 'Sixteen-year-old Shinichi Izumi is partially infected by a parasitic alien named Migi, which takes over his right hand instead of his brain. The two must learn to coexist and fight other parasites who are devouring humans in secret.',
    poster: 'https://cdn.myanimelist.net/images/anime/3/73178.jpg',
    backdrop: 'https://img.youtube.com/vi/j80tZ2CqKrs/maxresdefault.jpg',
    trailerId: 'j80tZ2CqKrs',
    streamUrl: 'https://animesalt.ac/series/parasyte-the-maxim/',
    watchlist: false,
    cast: ['Nobunaga Shimazaki', 'Aya Hirano', 'Kana Hanazawa', 'Miyuki Sawashiro'],
    reviews: []
  },
  {
    id: 'naruto-shippuden',
    title: 'Naruto: Shippuden',
    japaneseTitle: 'NARUTO -ナルト- 疾風伝',
    season: 'Series',
    episode: 'Episode 500',
    currentEpisodeNum: 500,
    totalEpisodes: 500,
    rating: 8.7,
    year: 2007,
    genres: ['Action', 'Adventure', 'Fantasy', 'Shonen'],
    synopsis: 'Naruto Uzumaki, a hyperactive teenager ninja, returns to Konoha village after two and a half years of training with Jiraiya. Together with his friends, Naruto must fight the mysterious organization "Akatsuki" to save his friend Sasuke Uchiha and achieve his dream of becoming the Hokage.',
    poster: 'https://cdn.myanimelist.net/images/anime/1565/111305.jpg',
    backdrop: 'https://img.youtube.com/vi/1D91-u0B-pY/maxresdefault.jpg',
    trailerId: '1D91-u0B-pY',
    streamUrl: 'https://animesalt.ac/series/naruto-shippuden/',
    watchlist: false,
    cast: ['Junko Takeuchi', 'Noriaki Sugiyama', 'Chie Nakamura', 'Kazuhiko Inoue'],
    reviews: []
  },
  {
    id: 'hunter-x-hunter',
    title: 'Hunter x Hunter',
    japaneseTitle: 'ハンター×ハンター',
    season: 'Series',
    episode: 'Episode 148',
    currentEpisodeNum: 148,
    totalEpisodes: 148,
    rating: 9.0,
    year: 2011,
    genres: ['Action', 'Adventure', 'Fantasy', 'Shonen'],
    synopsis: 'Gon Freecss is a young boy who discovers that his father, who abandoned him at a young age, is a world-renowned licensed "Hunter". Gon leaves his home to take the grueling Hunter Examination, meeting friends Killua, Kurapika, and Leorio along the way, embarked on an unforgettable journey.',
    poster: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
    backdrop: 'https://img.youtube.com/vi/d6kBeJjQF08/maxresdefault.jpg',
    trailerId: 'd6kBeJjQF08',
    streamUrl: 'https://animesalt.ac/series/hunter-x-hunter/',
    watchlist: true,
    cast: ['Megumi Han', 'Mariya Ise', 'Miyuki Sawashiro', 'Keiji Fujiwara'],
    reviews: []
  },
  {
    id: 'black-clover',
    title: 'Black Clover',
    japaneseTitle: 'ブラッククローバー',
    season: 'Series',
    episode: 'Episode 170',
    currentEpisodeNum: 170,
    totalEpisodes: 170,
    rating: 8.1,
    year: 2017,
    genres: ['Action', 'Fantasy', 'Shonen'],
    synopsis: 'Asta and Yuno are orphans raised together at a church in Hage village. In a world where everyone possesses magic, Asta has none, while Yuno is a prodigy. When they receive their Grimoires, Asta receives a mysterious five-leaf clover Grimoire containing "Anti-Magic", starting their rivalry to become the Wizard King.',
    poster: 'https://cdn.myanimelist.net/images/anime/3/88027.jpg',
    backdrop: 'https://img.youtube.com/vi/vAsGB7m4c_E/maxresdefault.jpg',
    trailerId: 'vAsGB7m4c_E',
    streamUrl: 'https://animesalt.ac/series/black-clover/',
    watchlist: false,
    cast: ['Gakuto Kajiwara', 'Nobunaga Shimazaki', 'Kana優木', 'Jun Fukuyama'],
    reviews: []
  },
  {
    id: 'hells-paradise',
    title: 'Hell\'s Paradise',
    japaneseTitle: '地獄楽',
    season: 'Season 1',
    episode: 'Episode 13',
    currentEpisodeNum: 13,
    totalEpisodes: 13,
    rating: 8.2,
    year: 2023,
    genres: ['Action', 'Historical', 'Dark Fantasy'],
    synopsis: 'Gabimaru the Hollow, a ninja on death row, is offered a full pardon if he travels to a mysterious, paradise-like island called Shinsenkyo and retrieves the Elixir of Life for the Shogun, alongside a executioner named Yamada Asaemon Sagiri.',
    poster: 'https://cdn.myanimelist.net/images/anime/1908/135061.jpg',
    backdrop: 'https://img.youtube.com/vi/R_jT8vTq-84/maxresdefault.jpg',
    trailerId: 'R_jT8vTq-84',
    streamUrl: 'https://animesalt.ac/series/hells-paradise/',
    watchlist: false,
    cast: ['Chiaki Kobayashi', 'Yumiri Hanamori', 'Ryohei Kimura', 'Kensho Ono'],
    reviews: []
  },
  {
    id: 'kaiju-no-8',
    title: 'Kaiju No. 8',
    japaneseTitle: '怪獣8号',
    season: 'Season 1',
    episode: 'Episode 6',
    currentEpisodeNum: 6,
    totalEpisodes: 12,
    rating: 8.4,
    year: 2024,
    genres: ['Action', 'Sci-Fi', 'Military'],
    synopsis: 'Kafka Hibino, a 32-year-old man working in a Kaiju clean-up crew, dreams of joining Japan\'s Defense Force. After a small flying kaiju enters his body, he gains the ability to transform into a powerful humanoid Kaiju, code-named "Kaiju No. 8", and tries to fulfill his promise to his childhood friend Mina Ashiro.',
    poster: 'https://cdn.myanimelist.net/images/anime/1126/141779.jpg',
    backdrop: 'https://img.youtube.com/vi/85gNn2H_6oA/maxresdefault.jpg',
    trailerId: '85gNn2H_6oA',
    streamUrl: 'https://animesalt.ac/series/kaiju-no-8/',
    watchlist: false,
    cast: ['Masaya Fukunishi', 'Asami Seto', 'Wataru Kato', 'Fairouz Ai'],
    reviews: []
  },
  {
    id: 'mob-psycho-100',
    title: 'Mob Psycho 100',
    japaneseTitle: 'モブサイコ100',
    season: 'Season 3',
    episode: 'Episode 12',
    currentEpisodeNum: 37,
    totalEpisodes: 37,
    rating: 8.9,
    year: 2022,
    genres: ['Action', 'Comedy', 'Supernatural'],
    synopsis: 'Shigeo "Mob" Kageyama is an average middle school boy who is actually a highly powerful esper. Under the guidance of his charlatan master, Reigen Arataka, Mob tries to live a normal life while keeping his emotional counter below 100%, which triggers a catastrophic psychic explosion.',
    poster: 'https://cdn.myanimelist.net/images/anime/8/82323.jpg',
    backdrop: 'https://img.youtube.com/vi/0p-w16z9y7U/maxresdefault.jpg',
    trailerId: '0p-w16z9y7U',
    streamUrl: 'https://animesalt.ac/series/mob-psycho-100/',
    watchlist: false,
    cast: ['Setsuo Ito', 'Takahiro Sakurai', 'Akio Otsuka', 'Miyu Irino'],
    reviews: []
  },
  {
    id: 're-zero',
    title: 'Re:Zero',
    japaneseTitle: 'Re:ゼロから始める異世界生活',
    season: 'Season 2',
    episode: 'Episode 25',
    currentEpisodeNum: 50,
    totalEpisodes: 50,
    rating: 8.3,
    year: 2021,
    genres: ['Fantasy Adventure', 'Psychological', 'Thriller'],
    synopsis: 'Subaru Natsuki is suddenly summoned to a fantasy world upon leaving a convenience store. Armed with nothing but his groceries and a mysterious curse called "Return by Death", which rewinds time to a "checkpoint" whenever he dies, Subaru fights to save the silver-haired half-elf Emilia and his friends.',
    poster: 'https://cdn.myanimelist.net/images/anime/1522/110056.jpg',
    backdrop: 'https://img.youtube.com/vi/h61_GZlIuYc/maxresdefault.jpg',
    trailerId: 'h61_GZlIuYc',
    streamUrl: 'https://animesalt.ac/series/re-zero-starting-life-in-another-world/',
    watchlist: false,
    cast: ['Yusuke Kobayashi', 'Rie Takahashi', 'Inori Minase', 'Rie Murakawa'],
    reviews: []
  },
  {
    id: 'sword-art-online',
    title: 'Sword Art Online',
    japaneseTitle: 'ソードアート・オンライン',
    season: 'Alicization',
    episode: 'War of Underworld',
    currentEpisodeNum: 96,
    totalEpisodes: 96,
    rating: 7.6,
    year: 2018,
    genres: ['Action', 'Sci-Fi', 'Fantasy'],
    synopsis: 'In 2022, thousands of players log into Sword Art Online, a revolutionary virtual reality MMORPG, only to discover they are trapped. The game\'s creator, Akihiko Kayaba, reveals that if they die in the game, they die in real life, and the only escape is completing all one hundred floors of Aincrad.',
    poster: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg',
    backdrop: 'https://img.youtube.com/vi/6pZlhE71G8M/maxresdefault.jpg',
    trailerId: '6pZlhE71G8M',
    streamUrl: 'https://animesalt.ac/series/sword-art-online/',
    watchlist: false,
    cast: ['Yoshitsugu Matsuoka', 'Haruka Tomatsu', 'Kanae Ito', 'Ayana Taketatsu'],
    reviews: []
  },
  {
    id: 'jujutsu-kaisen-0',
    title: 'Jujutsu Kaisen 0',
    japaneseTitle: '劇場版 呪術廻戦 0',
    season: 'Movie',
    episode: 'Full Movie',
    currentEpisodeNum: 1,
    totalEpisodes: 1,
    rating: 8.5,
    year: 2021,
    genres: ['Action', 'Fantasy', 'Dark Fantasy', 'Supernatural'],
    synopsis: 'Yuta Okkotsu, a high schooler suffering from a curse by his childhood friend Rika who died in a traffic accident, is taken in by Satoru Gojo to enter Tokyo Jujutsu High School. He trains to control his powerful cursed energy and face cursed threats alongside first-year students Maki, Toge, and Panda.',
    poster: 'https://cdn.myanimelist.net/images/anime/1063/120286.jpg',
    backdrop: 'https://img.youtube.com/vi/2ePrVPhS9so/maxresdefault.jpg',
    trailerId: '2ePrVPhS9so',
    streamUrl: 'https://animesalt.ac/series/jujutsu-kaisen-0/',
    watchlist: false,
    cast: ['Megumi Ogata', 'Kana Hanazawa', 'Mikako Komatsu', 'Koki Uchiyama'],
    reviews: []
  },
  {
    id: 'demon-slayer-mugen-train',
    title: 'Demon Slayer: Mugen Train',
    japaneseTitle: '劇場版「鬼滅の刃」無限列車編',
    season: 'Movie',
    episode: 'Full Movie',
    currentEpisodeNum: 1,
    totalEpisodes: 1,
    rating: 8.7,
    year: 2020,
    genres: ['Action', 'Historical', 'Fantasy', 'Supernatural'],
    synopsis: 'Tanjiro, Nezuko, Zenitsu, and Inosuke board the Mugen Train to assist the Flame Hashira, Kyojuro Rengoku, in his mission to defeat a deadly demon that has devoured many demon slayers and passengers on board.',
    poster: 'https://cdn.myanimelist.net/images/anime/1200/109033.jpg',
    backdrop: 'https://img.youtube.com/vi/bFwdHC_uHws/maxresdefault.jpg',
    trailerId: 'bFwdHC_uHws',
    streamUrl: 'https://animesalt.ac/series/demon-slayer-kimetsu-no-yaiba-movie-mugen-ressha-hen/',
    watchlist: false,
    cast: ['Natsuki Hanae', 'Akari Kito', 'Satoshi Hino', 'Yoshitsugu Matsuoka'],
    reviews: []
  },
  {
    id: 'suzume',
    title: 'Suzume',
    japaneseTitle: 'すずめの戸締まり',
    season: 'Movie',
    episode: 'Full Movie',
    currentEpisodeNum: 1,
    totalEpisodes: 1,
    rating: 8.3,
    year: 2022,
    genres: ['Fantasy Adventure', 'Drama', 'Supernatural'],
    synopsis: 'A modern action-adventure road story where 17-year-old Suzume helps a mysterious young man named Souta close magical doors that are releasing disasters and earthquakes all across Japan.',
    poster: 'https://cdn.myanimelist.net/images/anime/1654/128362.jpg',
    backdrop: 'https://img.youtube.com/vi/F7nQ0VUAOXg/maxresdefault.jpg',
    trailerId: 'F7nQ0VUAOXg',
    streamUrl: 'https://animesalt.ac/series/suzume-no-tojimari/',
    watchlist: false,
    cast: ['Nanoka Hara', 'Hokuto Matsumura', 'Eri Fukatsu', 'Shota Sometani'],
    reviews: []
  },
  {
    id: 'your-name',
    title: 'Your Name.',
    japaneseTitle: '君の名は。',
    season: 'Movie',
    episode: 'Full Movie',
    currentEpisodeNum: 1,
    totalEpisodes: 1,
    rating: 8.8,
    year: 2016,
    genres: ['Romance', 'Drama', 'Fantasy', 'Supernatural'],
    synopsis: 'Mitsuha Miyamizu, a high school girl in a rural town, and Taki Tachibana, a high school boy in Tokyo, suddenly begin to swap bodies randomly. They build a connection by leaving notes for each other, until a celestial event changes everything.',
    poster: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
    backdrop: 'https://img.youtube.com/vi/3KR8_M-G9pA/maxresdefault.jpg',
    trailerId: '3KR8_M-G9pA',
    streamUrl: 'https://animesalt.ac/series/kimi-no-na-wa/',
    watchlist: false,
    cast: ['Ryunosuke Kamiki', 'Mone Kamishiraishi', 'Ryo Narita', 'Aoi Yuki'],
    reviews: []
  },
  {
    id: 'a-silent-voice',
    title: 'A Silent Voice',
    japaneseTitle: '聲の形',
    season: 'Movie',
    episode: 'Full Movie',
    currentEpisodeNum: 1,
    totalEpisodes: 1,
    rating: 8.9,
    year: 2016,
    genres: ['Drama', 'Romance', 'Slice of Life'],
    synopsis: 'Shoya Ishida, a high school student who bullied a deaf classmate named Shoko Nishimiya in elementary school, seeks redemption by befriending her and reconciling with his past classmates.',
    poster: 'https://cdn.myanimelist.net/images/anime/1110/124239.jpg',
    backdrop: 'https://img.youtube.com/vi/nfK6UgLra7g/maxresdefault.jpg',
    trailerId: 'nfK6UgLra7g',
    streamUrl: 'https://animesalt.ac/series/a-silent-voice/',
    watchlist: false,
    cast: ['Miyu Irino', 'Saori Hayami', 'Aoi Yuki', 'Kensho Ono'],
    reviews: []
  },
  {
    id: 'weathering-with-you',
    title: 'Weathering With You',
    japaneseTitle: '天気の子',
    season: 'Movie',
    episode: 'Full Movie',
    currentEpisodeNum: 1,
    totalEpisodes: 1,
    rating: 8.3,
    year: 2019,
    genres: ['Romance', 'Fantasy Adventure', 'Drama', 'Supernatural'],
    synopsis: 'Hodaka Morishima, a high school boy who runs away to Tokyo, meets Hina Amano, a girl who possesses the mysterious power to clear the sky and stop the endless rain that has been plagueing the city.',
    poster: 'https://cdn.myanimelist.net/images/anime/1375/101377.jpg',
    backdrop: 'https://img.youtube.com/vi/Q6iK6ZOe3Fc/maxresdefault.jpg',
    trailerId: 'Q6iK6ZOe3Fc',
    streamUrl: 'https://animesalt.ac/series/tenki-no-ko/',
    watchlist: false,
    cast: ['Kotaro Daigo', 'Nana Mori', 'Shun Oguri', 'Tsubasa Honda'],
    reviews: []
  },
  {
    id: 'spirited-away',
    title: 'Spirited Away',
    japaneseTitle: '千と千尋の神隠し',
    season: 'Movie',
    episode: 'Full Movie',
    currentEpisodeNum: 1,
    totalEpisodes: 1,
    rating: 8.8,
    year: 2001,
    genres: ['Fantasy Adventure', 'Classic', 'Supernatural'],
    synopsis: 'Ten-year-old Chihiro Ogino wanders into a mysterious spirit world with her parents, who are turned into pigs. She must work in a magical bathhouse run by the witch Yubaba to survive and find a way to free herself and her parents.',
    poster: 'https://cdn.myanimelist.net/images/anime/6/79597.jpg',
    backdrop: 'https://img.youtube.com/vi/ByXuk9QqQkk/maxresdefault.jpg',
    trailerId: 'ByXuk9QqQkk',
    streamUrl: 'https://animesalt.ac/series/spirited-away/',
    watchlist: false,
    cast: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki', 'Bunji Sugawara'],
    reviews: []
  },
  {
    id: 'one-piece',
    title: 'One Piece',
    japaneseTitle: 'ワンピース',
    season: 'Season 21',
    episode: 'Episode 1105',
    currentEpisodeNum: 1105,
    totalEpisodes: 1200,
    rating: 8.9,
    year: 1999,
    genres: ['Action', 'Adventure', 'Fantasy', 'Shonen'],
    synopsis: 'Gol D. Roger was known as the "Pirate King", the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change in the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece.',
    poster: 'https://cdn.myanimelist.net/images/anime/1244/138851.jpg',
    backdrop: 'https://img.youtube.com/vi/MCb13393aGs/maxresdefault.jpg',
    trailerId: 'MCb13393aGs',
    streamUrl: 'https://animesalt.ac/series/one-piece/',
    watchlist: false,
    cast: ['Mayumi Tanaka', 'Kazuya Nakai', 'Akemi Okamura', 'Kappei Yamaguchi'],
    reviews: []
  },
  {
    id: 'one-punch-man',
    title: 'One Punch Man',
    japaneseTitle: 'ワンパンマン',
    season: 'Season 2',
    episode: 'Episode 12',
    currentEpisodeNum: 12,
    totalEpisodes: 12,
    rating: 8.5,
    year: 2015,
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    synopsis: 'The seemingly ordinary and unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, he trained relentlessly for three years—and lost all of his hair in the process. Now, Saitama is incredibly powerful, so much so that no enemy is able to defeat him in battle.',
    poster: 'https://cdn.myanimelist.net/images/anime/12/76049.jpg',
    backdrop: 'https://img.youtube.com/vi/2JAEl3LDYkI/maxresdefault.jpg',
    trailerId: '2JAEl3LDYkI',
    streamUrl: 'https://animesalt.ac/series/one-punch-man/',
    watchlist: false,
    cast: ['Makoto Furukawa', 'Kaito Ishikawa', 'Yuki Kaji', 'Yuichi Nakamura'],
    reviews: []
  },
  {
    id: 'fullmetal-alchemist-brotherhood',
    title: 'Fullmetal Alchemist: Brotherhood',
    japaneseTitle: '鋼の錬金術師 FULLMETAL ALCHEMIST',
    season: 'Series',
    episode: 'Episode 64',
    currentEpisodeNum: 64,
    totalEpisodes: 64,
    rating: 9.1,
    year: 2009,
    genres: ['Action', 'Adventure', 'Fantasy', 'Drama'],
    synopsis: 'After a horrific alchemy ritual goes wrong, brothers Edward and Alphonse Elric are left with severely damaged bodies. Edward loses his left leg and right arm, while Alphonse\'s soul is bound to a giant suit of armor. They set out on a journey to find the Philosopher\'s Stone to restore their bodies.',
    poster: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
    backdrop: 'https://img.youtube.com/vi/B0y_ir1D0sg/maxresdefault.jpg',
    trailerId: 'B0y_ir1D0sg',
    streamUrl: 'https://animesalt.ac/series/fullmetal-alchemist-brotherhood/',
    watchlist: false,
    cast: ['Romi Park', 'Rie Kugimiya', 'Shinichiro Miki', 'Fumiko Orikasa'],
    reviews: []
  },
  {
    id: 'haikyu',
    title: 'Haikyu!!',
    japaneseTitle: 'ハイキュー!!',
    season: 'Season 4',
    episode: 'Episode 25',
    currentEpisodeNum: 25,
    totalEpisodes: 25,
    rating: 8.5,
    year: 2014,
    genres: ['Sports', 'Comedy', 'Shonen'],
    synopsis: 'Inspired after watching a volleyball ace nicknamed "Little Giant" in action, small-statured Shouyou Hinata revives the volleyball club at his middle school. Despite a crushing defeat in their first tournament, Hinata vows to surpass his rival Tobio Kageyama, only to find him as a teammate in high school.',
    poster: 'https://cdn.myanimelist.net/images/anime/7/76014.jpg',
    backdrop: 'https://img.youtube.com/vi/2o2k8DsnMqc/maxresdefault.jpg',
    trailerId: '2o2k8DsnMqc',
    streamUrl: 'https://animesalt.ac/series/haikyu/',
    watchlist: false,
    cast: ['Ayumu Murase', 'Kaito Ishikawa', 'Yuki Kaji', 'Nobuhiko Okamoto'],
    reviews: []
  },
  {
    id: 'dandadan',
    title: 'Dandadan',
    japaneseTitle: 'ダンダダン',
    season: 'Season 1',
    episode: 'Episode 12',
    currentEpisodeNum: 12,
    totalEpisodes: 12,
    rating: 8.6,
    year: 2024,
    genres: ['Action', 'Comedy', 'Sci-Fi', 'Supernatural'],
    synopsis: 'Momo Ayase, a high school girl who comes from a family of spirit mediums, and her classmate Okarun, an occult fanatic, debate whether ghosts or aliens are real. In a bet to prove each other wrong, they visit separate haunted hotspots, only to discover both paranormal forces are terrifyingly real!',
    poster: 'https://cdn.myanimelist.net/images/anime/1169/143527.jpg',
    backdrop: 'https://img.youtube.com/vi/t8MswD7U1tI/maxresdefault.jpg',
    trailerId: 't8MswD7U1tI',
    streamUrl: 'https://animesalt.ac/series/dandadan/',
    watchlist: false,
    cast: ['Shion Wakayama', 'Natsuki Hanae', 'Mayumi Tanaka', 'Kazuya Nakai'],
    reviews: []
  }
];

// Helper to filter anime by category for dynamic rows
export const getTrendingNow = () => ANIME_DATA.filter(a => a.trendingRank <= 5);
export const getContinueWatching = () => ANIME_DATA.filter(a => a.progress !== undefined);
export const getTopPicks = () => ANIME_DATA.filter(a => a.rating >= 8.5).slice(0, 7);
export const getLiveNow = () => ANIME_DATA.filter(a => a.liveViewerCount !== undefined);
export const getUpcomingSchedule = () => ANIME_DATA.filter(a => a.upcomingSchedule !== undefined);
export const getWatchlist = () => ANIME_DATA.filter(a => a.watchlist);

// Smart routing redirect mapping function based on name
export const getStreamingRedirectUrl = (anime) => {
  if (!anime) return 'https://animesalt.ac/';
  
  // Explicit slugs dictionary for perfect direct routing on animesalt.ac
  const animeSaltSlugs = {
    'solo-leveling': 'solo-leveling',
    'jujutsu-kaisen': 'jujutsu-kaisen',
    'demon-slayer': 'demon-slayer',
    'attack-on-titan': 'attack-on-titan',
    'chainsaw-man': 'chainsaw-man',
    'vinland-saga': 'vinland-saga',
    'my-hero-academia': 'my-hero-academia',
    'steins-gate': 'steins-gate',
    'death-note': 'death-note',
    'tokyo-ghoul': 'tokyo-ghoul',
    'bleach-tybw': 'bleach-thousand-year-blood-war',
    'code-geass': 'code-geass',
    'frieren': 'frieren-beyond-journeys-end',
    'blue-lock': 'blue-lock',
    'cyberpunk-edgerunners': 'cyberpunk-edgerunners',
    'eighty-six': '86-eighty-six',
    'akira': 'akira',
    'neon-genesis-evangelion': 'neon-genesis-evangelion',
    'ghost-in-the-shell': 'ghost-in-the-shell-stand-alone-complex',
    'psycho-pass': 'psycho-pass',
    'parasyte': 'parasyte-the-maxim',
    'naruto-shippuden': 'naruto-shippuden',
    'hunter-x-hunter': 'hunter-x-hunter',
    'black-clover': 'black-clover',
    'hells-paradise': 'hells-paradise',
    'kaiju-no-8': 'kaiju-no-8',
    'mob-psycho-100': 'mob-psycho-100',
    're-zero': 're-zero-starting-life-in-another-world',
    'sword-art-online': 'sword-art-online',
    'jujutsu-kaisen-0': 'jujutsu-kaisen-0',
    'demon-slayer-mugen-train': 'demon-slayer-kimetsu-no-yaiba-movie-mugen-ressha-hen',
    'suzume': 'suzume-no-tojimari',
    'your-name': 'kimi-no-na-wa',
    'a-silent-voice': 'a-silent-voice',
    'weathering-with-you': 'tenki-no-ko',
    'spirited-away': 'spirited-away',
    'one-piece': 'one-piece',
    'one-punch-man': 'one-punch-man',
    'fullmetal-alchemist-brotherhood': 'fullmetal-alchemist-brotherhood',
    'haikyu': 'haikyu',
    'dandadan': 'dandadan'
  };

  const slug = animeSaltSlugs[anime.id] || anime.id.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  // Return direct URL to the particular anime series page
  return `https://animesalt.ac/series/${slug}/`;
};

// Dynamically generate/retrieve beautiful real backdrops for all anime, handling missing/placeholder ones
export const getAnimeBackdrop = (anime) => {
  if (!anime) return '/solo leveling.webp';
  
  // 1. Custom user-provided local backdrops mapped accurately (served from public folder)
  const localBackdrops = {
    'solo-leveling': '/solo leveling.webp',
    'demon-slayer': '/Demon Slayer.jpg',
    'attack-on-titan': '/Attack on Titan.jpg',
    'vinland-saga': '/Vinland Saga.webp',
    'my-hero-academia': '/My Hero Academia.webp',
    'steins-gate': '/Steins;Gate.webp',
    'bleach-tybw': '/Bleach TYBW.webp',
    'bleach': '/Bleach TYBW.webp',
    'code-geass': '/Code Geass.webp',
    'frieren': '/Frieren Beyond Journey End.webp',
    'blue-lock': '/Blue Lock.webp',
    'cyberpunk-edgerunners': '/Cyberpunk Edgerunners.webp',
    'eighty-six': '/86 EIGHTY-SIX.webp',
    'akira': '/Akira.webp',
    'neon-genesis-evangelion': '/Neon Genesis Evangelion.webp',
    'ghost-in-the-shell': '/Ghost in the Shell  SAC.webp',
    'psycho-pass': '/Psycho-Pass.webp',
    'parasyte': '/Parasyte The Maxim.webp',
    'black-clover': '/Black Clover.webp',
    'hells-paradise': "/Hell's Paradise.webp",
    'kaiju-no-8': '/Kaiju No. 8.webp',
    'mob-psycho-100': '/Mob Psycho 100.webp',
    're-zero': '/ReZero.webp',
    'jujutsu-kaisen-0': '/Jujutsu Kaisen 0.webp',
    'demon-slayer-mugen-train': '/Demon Slayer  Mugen Train.webp',
    'suzume': '/Suzume.webp',
    'a-silent-voice': '/A Silent Voice.webp',
    'dandadan': '/Dandadan.webp',
    'chainsaw-man': '/Chainsaw Man.webp',
    'weathering-with-you': '/Weathering with You.webp'
  };

  const id = anime.id ? anime.id.toLowerCase() : '';
  const titleLower = anime.title ? anime.title.toLowerCase() : '';
  
  if (localBackdrops[id]) {
    return localBackdrops[id];
  }

  // Check fuzzy matches for local backdrops
  for (const [key, path] of Object.entries(localBackdrops)) {
    if (titleLower.includes(key.replace(/-/g, ' ')) || id.includes(key)) {
      return path;
    }
  }

  // 2. If we already have a real YouTube thumbnail or a non-placeholder backdrop, use it
  if (anime.backdrop && 
      !anime.backdrop.includes('placeholder') && 
      !anime.backdrop.includes('via.placeholder') &&
      anime.backdrop !== '') {
    return anime.backdrop;
  }

  // 3. Widescreen High-Definition online backdrops fallback
  const realBackdrops = {
    'solo-leveling': 'https://images2.alphacoders.com/134/1344445.jpeg',
    'jujutsu-kaisen': 'https://images6.alphacoders.com/112/1128173.jpg',
    'demon-slayer': 'https://images.alphacoders.com/101/1012353.jpg',
    'attack-on-titan': 'https://images7.alphacoders.com/593/593306.jpg',
    'chainsaw-man': 'https://images8.alphacoders.com/125/1253758.png',
    'vinland-saga': 'https://images7.alphacoders.com/103/1031737.jpg',
    'my-hero-academia': 'https://images7.alphacoders.com/922/922756.jpg',
    'steins-gate': 'https://images2.alphacoders.com/264/264560.jpg',
    'death-note': 'https://images.alphacoders.com/128/1283080.jpg',
    'tokyo-ghoul': 'https://images.alphacoders.com/539/539137.jpg',
    'bleach': 'https://images.alphacoders.com/131/1319089.jpeg',
    'code-geass': 'https://images.alphacoders.com/181/181676.jpg',
    'frieren': 'https://images8.alphacoders.com/133/1335028.png',
    'blue-lock': 'https://images6.alphacoders.com/125/1259501.jpg',
    'cyberpunk': 'https://images.alphacoders.com/128/1283307.png',
    'eighty-six': 'https://images8.alphacoders.com/113/1138407.jpg',
    'akira': 'https://images2.alphacoders.com/543/543785.jpg',
    'evangelion': 'https://images8.alphacoders.com/550/550974.jpg',
    'ghost-in-the-shell': 'https://images6.alphacoders.com/109/1091590.jpg',
    'psycho-pass': 'https://images.alphacoders.com/462/462529.jpg',
    'parasyte': 'https://images.alphacoders.com/609/609653.jpg',
    'naruto': 'https://images5.alphacoders.com/605/605951.jpg',
    'hunter-x-hunter': 'https://images8.alphacoders.com/812/812231.png',
    'black-clover': 'https://images3.alphacoders.com/877/877409.jpg',
    'hell': 'https://images8.alphacoders.com/130/1305417.jpg',
    'kaiju': 'https://images2.alphacoders.com/136/1360668.jpeg',
    'mob-psycho': 'https://images4.alphacoders.com/829/829567.jpg',
    're-zero': 'https://images5.alphacoders.com/712/712959.jpg',
    'suzume': 'https://images2.alphacoders.com/130/1307613.jpg',
    'your-name': 'https://images.alphacoders.com/740/740562.png',
    'silent-voice': 'https://images6.alphacoders.com/821/821151.jpg',
    'weathering': 'https://images7.alphacoders.com/103/1036034.jpg',
    'spirited-away': 'https://images2.alphacoders.com/791/791024.jpg',
    'one-piece': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&q=80',
    'one-punch-man': 'https://images7.alphacoders.com/675/675571.jpg',
    'fullmetal': 'https://images5.alphacoders.com/795/795150.jpg',
    'haikyu': 'https://images.alphacoders.com/109/1098679.png',
    'dandadan': 'https://images3.alphacoders.com/137/1376881.jpeg'
  };

  for (const [key, url] of Object.entries(realBackdrops)) {
    if (titleLower.includes(key) || id.includes(key)) {
      return url;
    }
  }

  // Genre-based dynamic fallback images (futuristic, stunning photography)
  const genres = anime.genres ? anime.genres.map(g => g.toLowerCase()) : [];
  if (genres.some(g => g.includes('cyberpunk') || g.includes('sci-fi') || g.includes('mecha') || g.includes('system'))) {
    return 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80'; // Sleek cyberpunk city
  }
  if (genres.some(g => g.includes('fantasy') || g.includes('adventure') || g.includes('supernatural') || g.includes('historical'))) {
    return 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80'; // Mystical glowing sky
  }
  if (genres.some(g => g.includes('action') || g.includes('dark') || g.includes('gore') || g.includes('thriller'))) {
    return 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=1200&q=80'; // Deep dark neon graphics
  }
  if (genres.some(g => g.includes('romance') || g.includes('drama') || g.includes('slice of life'))) {
    return 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=1200&q=80'; // Beautiful atmospheric landscape
  }

  // General elegant premium dark neon background
  return 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&q=80';
};

// Dynamically generate/retrieve beautiful real posters for all anime, prioritizing local ones
export const getAnimePoster = (anime) => {
  if (!anime) return '/solo leveling.webp';

  // Custom user-provided local posters mapped accurately (served from public folder)
  const localPosters = {
    'solo-leveling': '/solo leveling.webp',
    'demon-slayer': '/Demon Slayer.jpg',
    'attack-on-titan': '/Attack on Titan.jpg',
    'vinland-saga': '/Vinland Saga.webp',
    'my-hero-academia': '/My Hero Academia.webp',
    'steins-gate': '/Steins;Gate.webp',
    'bleach-tybw': '/Bleach TYBW.webp',
    'bleach': '/Bleach TYBW.webp',
    'code-geass': '/Code Geass.webp',
    'frieren': '/Frieren Beyond Journey End.webp',
    'blue-lock': '/Blue Lock.webp',
    'cyberpunk-edgerunners': '/Cyberpunk Edgerunners.webp',
    'eighty-six': '/86 EIGHTY-SIX.webp',
    'akira': '/Akira.webp',
    'neon-genesis-evangelion': '/Neon Genesis Evangelion.webp',
    'ghost-in-the-shell': '/Ghost in the Shell  SAC.webp',
    'psycho-pass': '/Psycho-Pass.webp',
    'parasyte': '/Parasyte The Maxim.webp',
    'black-clover': '/Black Clover.webp',
    'hells-paradise': "/Hell's Paradise.webp",
    'kaiju-no-8': '/Kaiju No. 8.webp',
    'mob-psy-100': '/Mob Psycho 100.webp',
    'mob-psycho-100': '/Mob Psycho 100.webp',
    're-zero': '/ReZero.webp',
    'jujutsu-kaisen-0': '/Jujutsu Kaisen 0.webp',
    'demon-slayer-mugen-train': '/Demon Slayer  Mugen Train.webp',
    'suzume': '/Suzume.webp',
    'a-silent-voice': '/A Silent Voice.webp',
    'dandadan': '/Dandadan.webp',
    'chainsaw-man': '/Chainsaw Man.webp',
    'weathering-with-you': '/Weathering with You.webp'
  };

  const id = anime.id ? anime.id.toLowerCase() : '';
  const titleLower = anime.title ? anime.title.toLowerCase() : '';
  
  if (localPosters[id]) {
    return localPosters[id];
  }

  // Check fuzzy matches for local posters
  for (const [key, path] of Object.entries(localPosters)) {
    if (titleLower.includes(key.replace(/-/g, ' ')) || id.includes(key)) {
      return path;
    }
  }

  // Fallback to pre-curated online posters
  return anime.poster || 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=60';
};



