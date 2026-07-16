import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  chapters,
  getChapter,
  getTrackCredits,
  type LyricLine,
} from "../../album-data";

function LyricRows({ lines, className = "" }: { lines: LyricLine[]; className?: string }) {
  return (
    <div className={`lyric-stanza ${className}`.trim()}>
      {lines.map((line, index) => (
        <div className="lyric-line" key={`${line.en}-${index}`}>
          <p lang="en">{line.en}</p>
          <p lang="zh-CN">{line.zh}</p>
        </div>
      ))}
    </div>
  );
}

function LyricsPanel({ title, lyrics }: { title: string; lyrics?: LyricLine[][] }) {
  if (!lyrics?.length) {
    return (
      <div className="empty-copy">
        <strong>LYRICS PENDING</strong>
        <p>完整歌词待制作人审核并授权后录入企划站。</p>
      </div>
    );
  }

  const lines = lyrics.flat();
  const preview = lines.slice(0, 4);
  const remaining = lines.slice(4);

  return (
    <div className="lyrics-sheet" aria-label={`${title} 中英对照歌词`}>
      <div className="lyrics-head">
        <span>ENGLISH</span>
        <span>中文译文</span>
      </div>
      <LyricRows lines={preview} className="lyric-preview" />
      {remaining.length > 0 && (
        <details className="lyrics-expand">
          <summary>
            <span className="summary-closed">展开完整歌词</span>
            <span className="summary-open">收起完整歌词</span>
            <b aria-hidden="true">＋</b>
          </summary>
          <LyricRows lines={remaining} className="lyric-remaining" />
        </details>
      )}
    </div>
  );
}

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapter(slug);

  if (!chapter) return {};

  return {
    title: `${chapter.title} — Rewind:Young`,
    description: `${chapter.note}。Speraymer《Rewind:Young》阶段 ${chapter.number}。`,
  };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapter(slug);

  if (!chapter) notFound();

  const currentIndex = chapters.findIndex((item) => item.slug === chapter.slug);
  const previous = chapters[(currentIndex - 1 + chapters.length) % chapters.length];
  const next = chapters[(currentIndex + 1) % chapters.length];

  return (
    <main className="chapter-page" style={{ "--chapter-color": chapter.color } as React.CSSProperties}>
      <header className="chapter-nav">
        <a className="chapter-brand" href="/">REWIND:YOUNG</a>
        <nav aria-label="阶段导航">
          {chapters.map((item) => (
            <a
              key={item.slug}
              href={`/chapters/${item.slug}`}
              aria-current={item.slug === chapter.slug ? "page" : undefined}
              style={{ "--nav-color": item.color } as React.CSSProperties}
            >
              {item.number}
            </a>
          ))}
        </nav>
        <a className="back-home" href="/">返回企划首页 ↗</a>
      </header>

      <section className="chapter-hero">
        <div className="chapter-hero-index">{chapter.number}</div>
        <div className="chapter-hero-copy">
          <p>{chapter.english} · {chapter.colorName}</p>
          <h1>{chapter.title}</h1>
          <h2>{chapter.note}</h2>
          <p className="chapter-intro">{chapter.narrative}</p>
        </div>
        <span className="chapter-seal">CHAPTER<br />{chapter.numeral}</span>
      </section>

      <section className="chapter-content">
        <div className="content-label">
          <span>TRACK ARCHIVE</span>
          <p>{chapter.tracks.length ? `${chapter.tracks.length} 首歌曲已公开` : "歌曲信息即将公开"}</p>
        </div>

        {chapter.tracks.length ? (
          <div className="track-archive">
            {chapter.tracks.map((track, trackIndex) => (
              <article className="track-detail" key={track.title}>
                <div className="track-cover-wrap">
                  <img src={track.cover} alt={`${track.title} 单曲封面`} />
                  <a href={track.href} target="_blank" rel="noreferrer">网易云试听 ↗</a>
                </div>

                <div className="track-document">
                  <div className="track-heading">
                    <span>TRACK {String(trackIndex + 1).padStart(2, "0")}</span>
                    <h2>{track.title}</h2>
                    <div className="track-facts">
                      <span>{track.releaseDate}</span>
                      <span>{track.duration}</span>
                      <span>先行曲</span>
                    </div>
                  </div>

                  <section className="document-block">
                    <span>01 / 歌曲简介</span>
                    <p className="song-synopsis">{track.synopsis}</p>
                  </section>

                  <section className="document-block">
                    <span>02 / 作者与主创</span>
                    <ul className="credit-list">
                      {getTrackCredits(track).map((credit) => (
                        <li key={credit.name}>
                          <strong>{credit.name}</strong>
                          <span>{credit.role}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="document-block lyrics-block">
                    <span>03 / 歌词</span>
                    <LyricsPanel title={track.title} lyrics={track.lyrics} />
                  </section>

                  <section className="document-block author-note-block">
                    <span>04 / 作者有话说</span>
                    <p>{track.authorNote}</p>
                  </section>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-stage">
            <span>{chapter.number}</span>
            <div>
              <p>THIS CHAPTER IS STILL UNFOLDING</p>
              <h2>先行曲待揭晓</h2>
              <p>歌曲名称、封面、作者信息、歌词与“作者有话说”将在确认后进入这里。</p>
            </div>
          </div>
        )}
      </section>

      <nav className="chapter-pagination" aria-label="前后阶段">
        <a href={`/chapters/${previous.slug}`}>
          <span>← PREVIOUS</span>
          <strong>{previous.title}</strong>
        </a>
        <a href={`/chapters/${next.slug}`}>
          <span>NEXT →</span>
          <strong>{next.title}</strong>
        </a>
      </nav>
    </main>
  );
}
