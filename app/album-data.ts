export type LyricLine = { en: string; zh: string };

export type Track = {
  title: string;
  cover: string;
  href: string;
  artists: string[];
  duration: string;
  releaseDate: string;
  synopsis: string;
  authorNote: string;
  creditRoles?: Record<string, string>;
  additionalCredits?: { name: string; role: string }[];
  lyrics?: LyricLine[][];
};

export type Chapter = {
  slug: string;
  number: string;
  numeral: string;
  title: string;
  note: string;
  english: string;
  color: string;
  colorName: string;
  narrative: string;
  tracks: Track[];
};

const colorRushChorus = (interjection: string): LyricLine[] => [
  { en: "Color rush", zh: "色彩如潮" },
  { en: "I’m running through the daylight", zh: "我迎着白昼奔跑" },
  { en: "Tie-dye sky", zh: "扎染似的天空" },
  { en: "Dripping down the skyline", zh: "沿着天际一寸寸流淌" },
  { en: "Every step", zh: "每一步" },
  { en: "A new shade in my mind", zh: "都为心绪染上新的颜色" },
  { en: `(${interjection}) I feel so alive`, zh: `(${interjection}) 此刻我如此鲜活` },
  { en: "Bubblegum dreams on my sneakers", zh: "泡泡糖般甜亮的梦，沾在球鞋上" },
  { en: "Laugh lines", zh: "笑意留下的纹路" },
  { en: "Glitter in my t-shirt", zh: "闪光落满T恤" },
  { en: "If this is growing up", zh: "倘若这便是长大" },
  { en: "Then alright", zh: "那也无妨" },
  { en: "I’m bright", zh: "我身披明亮" },
  { en: "I’m bright", zh: "我身披明亮" },
  { en: "I’m bright", zh: "我正灿然发光" },
];

export const chapters: Chapter[] = [
  {
    slug: "a-vivid-scene",
    number: "01",
    numeral: "壹",
    title: "一场斑斓，弄弦欢歌",
    note: "最活力而美好的时光",
    english: "A VIVID BEGINNING",
    color: "#78AA55",
    colorName: "草野绿",
    narrative: "童年像一片被阳光照亮的草地：直接、轻盈、没有迟疑。第一阶段保存的是最旺盛的生命力，也是整张专辑第一次按下播放键的瞬间。",
    tracks: [
      {
        title: "Color Rush",
        cover: "/covers/color-rush.jpg",
        href: "https://music.163.com/song?id=3376614382",
        artists: ["Speraymer", "FloraSonans 花海织声"],
        duration: "03:04",
        releaseDate: "2026.05.05",
        synopsis: "晨光剥开梦境，天光与云影映射出她无忧的笑脸。看那柠檬黄色的呼吸，薄荷绿色的自然低语——它们漫过窗棂，流成一条不需要方向的河，赤脚蹚过，涟漪无声。\n此时方知青春如那色彩斑驳的潮汐，涨落之间，将自身镀满光芒。\n\nFrom《Rewind:Young》Chapter.Ⅰ\n\"一场斑斓，弄弦欢歌\"",
        authorNote: "《Color Rush》既是整张专辑的第一首歌，也是第一阶段的开篇与全篇的概念曲。它写无忧无虑的童年：赤脚穿过草地，让阳光和风替我们辨认方向。开篇俏皮的钢琴与吉他，属于第一阶段的自在；第二段主歌逐渐铺展故事，走入第二阶段明亮而热烈的快乐；第二次 Drop 里厚重的 Bass，以及 Bridge 中被打散的钢琴，投下第三阶段忧愁的阴影；第三次 Drop 则重新昂首，化作第四阶段破晓而出的勇气。直到尾声，情绪终于沉静下来，步入第五阶段的通透与豁达。这是《Color Rush》的故事，也是《Rewind:Young》最核心的缩影。",
        lyrics: [
          [
            { en: "Open up my window", zh: "推窗而望" },
            { en: "Morning spills in", zh: "晨光倾泻进来" },
            { en: "Lemon yellow sunlight on my skin", zh: "柠檬黄的日光轻落肌肤" },
            { en: "Painting little rainbows on my floor", zh: "在地板上描出细碎的虹" },
            { en: "Bare feet tapping", zh: "赤足轻叩" },
            { en: "Racing for the door", zh: "迫不及待地奔向门外" },
          ],
          colorRushChorus("woah"),
          [
            { en: "Headphones on", zh: "戴上耳机" },
            { en: "I’m humming out of tune", zh: "跑着调，也自顾自地哼唱" },
            { en: "Pink clouds dancing", zh: "粉色云朵翩然起舞" },
            { en: "Chasing after noon", zh: "追逐午后的余光" },
            { en: "Friends are waiting", zh: "朋友已经等候" },
            { en: "Waving from the gate", zh: "倚在门边向我招手" },
            { en: "Hearts like highlighters on a clean white page", zh: "心像荧光笔划过雪白纸页，一路鲜亮" },
          ],
          colorRushChorus("yeah"),
          [
            { en: "I used to keep my crayons in a box", zh: "从前，我把蜡笔珍藏在盒中" },
            { en: "Now I wear them on my cheeks and socks", zh: "如今，我把颜色戴上脸颊与袜边" },
            { en: "If the world feels big", zh: "倘若世界辽阔得令人心慌" },
            { en: "That’s fine", zh: "也没关系" },
            { en: "I’ll draw my own outline", zh: "我会亲手勾勒自己的轮廓" },
          ],
          colorRushChorus("oh"),
        ],
      },
    ],
  },
  {
    slug: "clouds-and-butterflies",
    number: "02",
    numeral: "贰",
    title: "一程烂漫，踏云逐蝶",
    note: "愉快而灿烂地成长",
    english: "GROWING IN BLOOM",
    color: "#F35B9D",
    colorName: "绚烂粉",
    narrative: "成长不是一条笔直的路，而是一段带着好奇心的追逐。第二阶段把快乐拉长成旅程，让旺盛的个性在合作与碰撞中逐渐显形。",
    tracks: [
      {
        title: "Brilliantly Wasting",
        cover: "/covers/brilliantly-wasting.jpg",
        href: "https://music.163.com/song?id=3389404876",
        artists: ["Speraymer", "Lightfighter", "Alita", "FloraSonans 花海织声"],
        duration: "03:08",
        releaseDate: "2026.06.05",
        synopsis: "可还记得那天傍晚的夕阳，在课堂的喧闹中映衬成耀眼的红。心照不宣的借口，青春不羁的放浪。我们逃出框定的方圆，用偷来的时光，敬了一轮不必言说的远方。\n或许有人说，我们浪费了光阴。可有些时光，生来就是为了被浪费得如此灿烂。\n\nFrom《Rewind:Young》Chapter.Ⅱ\n\"一程烂漫，踏云逐蝶\"",
        authorNote: "这首歌的灵感，来自中学时代一个再朴素不过的小故事：两个调皮的孩子，用装病换来的请假条逃离课堂，越过校门，去迎接那段尚未被定义的青春。他们并没有要抵达哪里，只是想把偷来的片刻尽情挥霍。或许成长总要被规则丈量，但有些灿烂，恰恰诞生在短暂的出逃里。",
        creditRoles: {
          Lightfighter: "编曲",
          Alita: "作曲 · 演唱",
        },
        lyrics: [
          [
            { en: "The clockface taunts with its lazy spin", zh: "钟面懒懒打转，仿佛存心嘲弄" },
            { en: "Another problem I'll never win", zh: "又一道我注定解不开的题" },
            { en: "I catch your eye — a silent chart", zh: "我撞上你的目光——那是无声的暗号" },
            { en: "We both stand up — the same old art", zh: "我们同时起身，熟练地演完那套把戏" },
            { en: "\"Need some water,\" \"Stomach's tight\"", zh: "“想去喝水。”“胃有点疼。”" },
            { en: "Two hall-passes burning in the light", zh: "两张通行条，在日光下灼灼发亮" },
            { en: "We met where the hallway starts to bend", zh: "我们在走廊拐弯处会合" },
            { en: "Two rebels with time to spend", zh: "两个叛逆者，正有大把时光可以挥霍" },
          ],
          [
            { en: "We trade the blackboard for the bleeding sky", zh: "我们拿黑板换来流血般绯红的天空" },
            { en: "Our uniform ties getting loose and high", zh: "校服领带松开，迎着风高高扬起" },
            { en: "Talking 'bout the galaxies, talking 'bout the pain", zh: "谈星河，也谈那些说不出口的疼" },
            { en: "While counting the minutes like stolen rain", zh: "把每一分钟，数成一场偷来的雨" },
          ],
          [
            { en: "The backpack hides a forbidden weight", zh: "背包深处，藏着不被允许的重量" },
            { en: "Oh two glass-clinking secrets", zh: "哦，两份杯沿轻碰的秘密" },
            { en: "Behind the gym where the lost balls roll", zh: "在体育馆后，那些遗失的球滚向角落" },
            { en: "We toast to the chaos of growing souls", zh: "我们为灵魂生长时的混乱举杯" },
            { en: "The liquid burns but the laughter's light", zh: "酒液灼喉，笑声却轻得发亮" },
            { en: "A fuzzy halo in the noon bright", zh: "正午的光，晕成一圈朦胧的亮" },
            { en: "We hide the evidence in the rusted bin", zh: "我们把证据藏进生锈的垃圾桶" },
            { en: "Two empty soldiers who've seen it all", zh: "两个空瓶士兵，仿佛已经看尽一切" },
          ],
          [
            { en: "They say we'll miss the important lines", zh: "他们说，我们会错过那些重要的板书" },
            { en: "The dates and the facts and the dotted signs", zh: "日期、事实，还有点线勾连的标记" },
            { en: "But we will learn a different kind of math", zh: "可我们会学会另一种数学" },
            { en: "Counting the seconds before the coming wrath", zh: "数清风暴来临前的每一秒" },
          ],
          [
            { en: "We're kings of the concrete, the untaught truth", zh: "我们是水泥地上的国王，守着课堂从未教授的真相" },
            { en: "Two rebels sipping the fountain of youth", zh: "两个叛逆者，啜饮着青春之泉" },
            { en: "In the eye of the storm where the schedule lies", zh: "在课程表编织的风暴中心" },
            { en: "We are brilliantly, beautifully, wasting time", zh: "我们正如此耀眼、如此漂亮地，挥霍光阴" },
          ],
        ],
      },
    ],
  },
  {
    slug: "rain-behind-the-curtain",
    number: "03",
    numeral: "叁",
    title: "一帘幽雨，湿了琴心",
    note: "成长中的忧愁与苦闷",
    english: "A QUIET RAIN",
    color: "#8F9CFF",
    colorName: "幽雨紫",
    narrative: "当快乐不再是唯一答案，敏感、犹疑与失落开始进入旋律。第三阶段允许情绪停留，也让成长第一次拥有阴影和重量。",
    tracks: [
      {
        title: "Last Time Us",
        cover: "/covers/last-time-us.jpg",
        href: "https://music.163.com/song?id=3423404924",
        artists: ["Speraymer", "阿希axi", "FloraSonans 花海织声"],
        duration: "02:58",
        releaseDate: "2026.08.21",
        synopsis: "可还记得最后一场午后的光，斜斜困在窗棂与粉笔灰之间。课桌浮成沉默的孤岛，走廊向远处漫长地退去。我们把名字写进渐暗的金色里，故作轻快地冲下楼梯，仿佛只要跑得足够快，告别便追不上来。\n铃声终究落下，储物柜合上最后一扇门。那一天我们没有哭，只是低下头，把尚未来得及归还的青春戴成一顶借来的王冠。原来毕业并不是突然长大，而是从某一刻起，“我们”被风轻轻拆散，各自走进往后的漫长。\n\nFrom《Rewind:Young》Chapter.III\n\"一帘幽雨，湿了琴心\"",
        authorNote: "《Last Time Us》写的是毕业那一天。它没有把离别写成一场喧闹的告别，而是把目光留在粉笔灰、窗棂、楼梯与储物柜这些再平常不过的事物上。直到铃声落下，我们才意识到，那或许是最后一次以“我们”的名义站在一起。所谓长大，不只是奔向未来，也是在尚未准备好的时候，学会把共同的青春还给时间。",
        creditRoles: {
          "阿希axi": "编曲 · 作曲",
        },
        additionalCredits: [
          { name: "Calyst", role: "封面" },
          { name: "Byouelahw白柚", role: "封面" },
          { name: "_Warpcore_", role: "封面" },
          { name: "i-Snow", role: "封面" },
          { name: "不定期", role: "专辑 Logo" },
        ],
        lyrics: [
          [
            { en: "The chalk dust settled like a forgotten prayer", zh: "粉笔灰落定，如被遗忘的祈祷" },
            { en: "The desks were islands in a sea of air", zh: "课桌是空气之海中的孤岛" },
            { en: "We traced the lines we couldn't cross", zh: "我们描摹着无法跨越的界线" },
            { en: "And counted breaths we thought we'd lost", zh: "数着那些以为早已丢失的呼吸" },
            { en: "The windows held the afternoon", zh: "窗棂囚禁了整个午后" },
            { en: "A golden cage, a fading tune", zh: "金色的牢笼，渐弱的旋律" },
            { en: "We knew the bell would break the spell", zh: "我们知道铃声会打破这魔咒" },
            { en: "But none of us could say farewell", zh: "但没有一人能说出再见" },
          ],
          [
            { en: "This is the last day we were us", zh: "这是我们曾是我们的最后一天" },
            { en: "Before the wind began to rush", zh: "在风开始奔涌之前" },
            { en: "We wrote our names in fading light", zh: "我们在渐暗的光线里写下名字" },
            { en: "And held on tight, held on tight", zh: "紧紧握住，紧紧握住" },
          ],
          [
            { en: "We took the stairs two at a time", zh: "我们一步两级地冲下楼梯" },
            { en: "As if we could outrun the climb", zh: "仿佛能逃离这场攀爬本身" },
            { en: "We laughed at all the things we feared", zh: "我们对所有恐惧报以大笑" },
            { en: "And swore the future disappeared", zh: "发誓未来已消失不见" },
            { en: "The lockers slammed their final doors", zh: "储物柜摔上最后的门" },
            { en: "The hallways stretched like ocean floors", zh: "走廊延伸如海床般无垠" },
            { en: "We didn't cry, we just looked down", zh: "我们没有哭，只是低下头" },
            { en: "And wore our youth like a borrowed crown", zh: "将青春戴成一顶借来的王冠" },
          ],
          [
            { en: "This is the last day we were us", zh: "这是我们曾是我们的最后一天" },
            { en: "Before the wind began to rush", zh: "在风开始奔涌之前" },
            { en: "We wrote our names in fading light", zh: "我们在渐暗的光线里写下名字" },
            { en: "And held on tight, held on tight", zh: "紧紧握住，紧紧握住" },
          ],
        ],
      },
    ],
  },
  {
    slug: "edge-before-dawn",
    number: "04",
    numeral: "肆",
    title: "一刃锋芒，劈光破晓",
    note: "困境中的积极与锐气",
    english: "AN EDGE BEFORE DAWN",
    color: "#E43B32",
    colorName: "破晓赤",
    narrative: "困境没有消失，但面对它的姿态开始改变。第四阶段强调主动、锋利与向上的力量：不是等待天亮，而是亲手劈开第一道光。",
    tracks: [],
  },
  {
    slug: "clear-mind-homeward",
    number: "05",
    numeral: "伍",
    title: "一念澄明，山水归舟",
    note: "走上正轨，正式成熟",
    english: "A CLEAR WAY HOME",
    color: "#E9B642",
    colorName: "稻田金",
    narrative: "成熟并非告别过去，而是终于知道该把过去放在哪里。第五阶段收束所有颜色与情绪，让旅程回到清醒、稳定而开阔的水面。",
    tracks: [],
  },
];

export const releasedTracks = chapters.flatMap((chapter) =>
  chapter.tracks.map((track) => ({ ...track, chapter }))
);

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}

export function getTrackCredits(track: Track) {
  const artistCredits = track.artists.map((name) => {
    if (name === "Speraymer") return { name, role: "编曲" };
    if (name.includes("花海织声")) return { name, role: "厂牌" };
    return { name, role: track.creditRoles?.[name] ?? "主创信息待补" };
  });

  return [...artistCredits, ...(track.additionalCredits ?? [])];
}
