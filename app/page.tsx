import { chapters, releasedTracks } from "./album-data";

const contributors = [
  {
    code: "SP",
    name: "Speraymer",
    role: "专辑策划 · 制作人",
    description: "发起 Rewind:Young，并统筹专辑的音乐方向与合作企划。",
    color: "#78AA55",
    image: "/contributors/speraymer.png",
    href: "http://music.163.com/artist?id=95356491&userid=1987597824",
    platform: "网易云音乐",
  },
  {
    code: "BY",
    name: "Byouelahw白柚",
    role: "封面画师",
    description: "负责专辑与先行曲的封面视觉绘制。",
    color: "#F35B9D",
    image: "/contributors/byouelahw.jpg",
    href: "https://b23.tv/LdjpOCK",
    platform: "哔哩哔哩",
  },
  {
    code: "BD",
    name: "不定期",
    role: "专辑 Logo 作者",
    description: "负责 Rewind:Young 专辑 Logo 设计。",
    color: "#8F9CFF",
    image: "/contributors/budingqi.jpg",
    href: "https://www.xiaohongshu.com/user/profile/6846ed12000000001b022b15?xsec_token=YBFTQwefEnnw1auatacKn9uQHQcGbtSS4_Zsx9wQ9cof4=&xsec_source=app_share&&apptime=1784124635&shareRedId=OD42NkhJNTs2NzUyOTgwNjdFOTk2Rzc-&share_id=f0ef0bc89c6e4ca99db7408a5d6a0fe8&xhsshare=CopyLink",
    platform: "小红书",
  },
  {
    code: "FS",
    name: "花海织声",
    role: "发行厂牌",
    description: "负责专辑发行与相关发行协作。",
    color: "#E9B642",
    image: "/contributors/florasonans.jpg",
    href: "https://www.beatarray.cn/label/FloraSonans",
    platform: "节奏阵列",
  },
];

function ContributorCard({
  person,
  index,
}: {
  person: (typeof contributors)[number];
  index: number;
}) {
  const content = (
    <>
      <div className="hero-person-visual">
        {person.image ? (
          <img src={person.image} alt={`${person.name} 头像`} />
        ) : (
          <span>{person.code}</span>
        )}
      </div>
      <div className="hero-person-copy">
        <small>0{index + 1} · {person.role}</small>
        <strong>{person.name}</strong>
        <p>{person.description}</p>
      </div>
      <span className="hero-person-platform">{person.platform} {person.href ? "↗" : ""}</span>
    </>
  );

  const style = { "--contributor-color": person.color } as React.CSSProperties;

  if (person.href) {
    return (
      <a
        className="hero-person-card"
        href={person.href}
        target="_blank"
        rel="noreferrer"
        style={style}
        aria-label={`前往 ${person.name} 的${person.platform}主页`}
      >
        {content}
      </a>
    );
  }

  return <article className="hero-person-card" style={style}>{content}</article>;
}

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="album-title">
        <div className="noise" aria-hidden="true" />
        <header className="topbar">
          <span className="artist">SPERAYMER</span>
          <span className="edition">ALBUM PROJECT · 2026</span>
        </header>

        <div className="hero-copy hero-copy-compact">
          <p className="eyebrow">献给那些被时间擦亮的日子</p>
          <h1 id="album-title">
            <span>REWIND</span>
            <i>:</i>
            <span>YOUNG</span>
          </h1>
          <p className="lead">
            一张关于童年、成长与自我和解的合作专辑。
            <br />
            五段旅程，五种光色，重放我们成为自己的过程。
          </p>
        </div>

        <div className="hero-overview">
          <nav className="chapter-stack" aria-label="专辑五个阶段">
            <div className="overview-label">FIVE CHAPTERS · 五个阶段</div>
            {chapters.map((chapter) => (
              <a
                href={`/chapters/${chapter.slug}`}
                key={chapter.title}
                style={{ "--chapter-color": chapter.color } as React.CSSProperties}
              >
                <span>{chapter.number}</span>
                <strong>{chapter.title}</strong>
                <small>{chapter.note}</small>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </nav>

          <section className="hero-contributors" aria-labelledby="hero-contributors-title">
            <div className="overview-label" id="hero-contributors-title">CORE CONTRIBUTORS · 主要参与者</div>
            <div className="hero-person-grid">
              {contributors.map((person, index) => (
                <ContributorCard person={person} index={index} key={person.name} />
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="releases" id="pre-release" aria-labelledby="release-title">
        <div className="section-heading">
          <div>
            <p>RELEASED SINGLES · {String(releasedTracks.length).padStart(2, "0")} / 05</p>
            <h2 id="release-title">已发行单曲如下</h2>
          </div>
          <p className="section-note">点击封面，前往网易云音乐。</p>
        </div>

        <div className="poster-grid">
          {releasedTracks.map(({ chapter, ...track }) => (
            <article
              className="release-card"
              key={track.title}
              style={{ "--accent": chapter.color } as React.CSSProperties}
            >
              <a
                className="poster-link"
                href={track.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`在网易云音乐打开 ${track.title}`}
              >
                <span className="poster-frame">
                  <img src={track.cover} alt={`${track.title} 单曲封面`} />
                  <span className="play-mark" aria-hidden="true">↗</span>
                </span>
              </a>
              <div className="release-meta">
                <span>CHAPTER {chapter.number}</span>
                <div>
                  <h3>{track.title}</h3>
                  <p>{chapter.title}</p>
                  <small>{track.artists.join(" × ")}</small>
                </div>
                <a href={`/chapters/${chapter.slug}`}>进入阶段 ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>REWIND:YOUNG</span>
        <p>策划 / 制作：Speraymer</p>
        <p>五个阶段 · 五首先行曲 · 一个关于成长的回答</p>
      </footer>
    </main>
  );
}
