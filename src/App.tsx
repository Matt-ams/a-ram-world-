import { useEffect, useState } from 'react';

const links = {
  instagram: 'https://instagram.com/asram.wav',
  spotify: 'https://open.spotify.com/artist/5gWOm9zrxsWcpBF6yQnG4H',
  apple: 'https://music.apple.com/nl/artist/a$ram/1770825613',
  youtube: 'https://www.youtube.com/channel/UCUOI5zP4IG-_tA1rLpus6Xg',
};

function App() {
  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [prelude, setPrelude] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('portal-open', !entered);
    return () => document.body.classList.remove('portal-open');
  }, [entered]);

  useEffect(() => {
    const timer = window.setTimeout(() => setPrelude(false), 6900);
    return () => window.clearTimeout(timer);
  }, []);

  const enterWorld = () => {
    setLeaving(true);
    window.setTimeout(() => setEntered(true), 1250);
  };

  return (
    <main>
      {prelude && (
        <section className='prelude' aria-label='A$RAM cinematic introduction'>
          <div className='prelude-noise' />
          <div className='prelude-sequence' aria-hidden='true'>
            <div className='prelude-card prelude-card-1'><small>SIGNAL / 000</small><strong>DO YOU<br />REMEMBER?</strong></div>
            <div className='prelude-card prelude-card-2'><span>2020</span><em>FIRST SIGNAL</em></div>
            <div className='prelude-card prelude-card-3'><strong>MON$TER</strong><span>RST</span></div>
            <div className='prelude-card prelude-card-4'><small>ARCHIVE / LOST / FOUND</small><strong>OLD<br /><i>ME</i></strong></div>
            <div className='prelude-card prelude-card-5'><span>7 YEARS</span><strong>TOO<br />LATE.</strong></div>
            <div className='prelude-card prelude-card-6'><strong>DANSE<br /><i>FINAL.</i></strong><small>THE LAST DANCE IN FRENCH</small></div>
            <div className='prelude-card prelude-card-7'><span>ARCHIVE RESTORED</span><strong>WHAT<br />COMES<br /><i>NEXT?</i></strong></div>
            <div className='prelude-card prelude-card-8'><small>SIGNAL / 001</small><strong>A$RAM</strong><span>WORLD / MMXXVI</span></div>
          </div>
          <button className='prelude-skip' onClick={() => setPrelude(false)}>SKIP ↘</button>
        </section>
      )}
      {!entered && !prelude && (
        <section className={`portal ${leaving ? 'portal-leaving' : ''}`} aria-label="A$RAM World entrance">
          <div className="portal-aura" />
          <div className="portal-grid" />
          <div className="portal-noise" />
          <div className="portal-shutter shutter-one" />
          <div className="portal-shutter shutter-two" />
          <div className="portal-meta meta-top"><span>A$RAM / WORLD</span><span>MMXXVI</span></div>
          <div className="portal-meta meta-side">SIGNAL 001 — ARCHIVE / AFTER</div>
          <div className="portal-status"><span>ARCHIVE DETECTED</span><span className="status-year">2024—2026</span><span>RESTORATION ACTIVE</span></div>
          <div className="portal-wordmark" aria-label="A$RAM">
            <span className="word word-a">A</span><span className="word word-dollar">$</span><span className="word word-ram">RAM</span>
          </div>
          <div className="portal-ghost" aria-hidden="true">A$RAM</div>
          <div className="portal-statement"><span>RESTORING</span><span>ARCHIVES.</span><em>building what comes next.</em></div>
          <button className="portal-enter" onClick={enterWorld} aria-label="Enter A$RAM World"><span className="enter-label">ENTER</span><span className="enter-line" /><span className="enter-arrow">↘</span></button>
          <div className="portal-count">01<span>/</span>∞</div>
        </section>
      )}

      <div className={`site-shell ${entered ? 'site-live' : ''}`}>
        <nav className="nav"><a href="#top" className="mark">A$RAM</a><div className="nav-center">WORLD / 2026</div><div className="navlinks"><a href="#music">MUSIC</a><a href="#archive">ARCHIVE</a><a href="#world">AFTER</a></div></nav>

        <section id="top" className="hero">
          <div className="hero-field" />
          <div className="hero-orbit orbit-a" /><div className="hero-orbit orbit-b" />
          <div className="hero-vertical">A$RAM WORLD — INDEPENDENT SIGNAL</div>
          <div className="hero-copy"><p className="eyebrow">ARTIST / ARCHIVE / NEXT</p><h1><span>A$</span>RAM</h1><p className="manifesto">restoring archives.<br /><i>building what comes next.</i></p></div>
          <div className="hero-ticker"><div>A$RAM — DANSE FINAL. — OLD ME — SPECTRAL — A$RAM — DANSE FINAL. — OLD ME — SPECTRAL —</div></div>
          <a className="scroll-cue" href="#music">SCROLL TO DESCEND <span>↓</span></a>
        </section>

        <section id="music" className="current release-panel">
          <div className="release-number">01</div>
          <div className="release-meta"><span>CURRENT SIGNAL</span><span>FRENCH / FINAL</span><span>2026</span></div>
          <div className="release-main"><p className="kicker">THE LAST DANCE IN FRENCH</p><h2>Danse<br /><i>final.</i></h2><p className="lead">A message heard too late.<br />Seven years folded into three minutes.</p><div className="actions"><a href={links.spotify} target="_blank" rel="noreferrer">LISTEN / SPOTIFY ↗</a><a href={links.apple} target="_blank" rel="noreferrer">APPLE MUSIC ↗</a></div></div>
          <div className="release-quote">“Le silence revient.<br />Mais cette fois<br />il ne me fait plus peur.”</div>
        </section>

        <section className="intermission" aria-label="Transition to archive"><div className="intermission-small">BEFORE THE NEXT FORM</div><div className="intermission-big"><span>WE</span><span>RESTORE</span><span>WHAT</span><span>REMAINS.</span></div></section>

        <section id="archive" className="archive">
          <div className="archive-index"><span>02 / MONUMENT</span><span>MADE THEN — RESTORED NOW</span></div>
          <div className="archive-title"><span className="old">OLD</span><span className="me">ME</span></div>
          <p className="archive-thesis">Not rewritten.<br />Not modernized.<br /><i>Preserved.</i></p>
          <ol><li><span>01</span>DE(PRESSED)</li><li><span>02</span>IN(JUSTICE)</li><li><span>03</span>INTER(LUDE)</li><li><span>04</span>GREEN(PLUG)</li><li><span>05</span>OVER(VIEW)</li><li><span>06</span>SECRET(MOVE)</li></ol>
          <div className="archive-seal"><span>ARCHIVE</span><b>6</b><span>RECORDS</span></div>
        </section>

        <section className="current release-panel" aria-label="PILLS incoming release">
          <div className="release-number">03</div>
          <div className="release-meta"><span>NEXT DOSE</span><span>EXPERIMENTAL COMPOUND</span><span>VOL. 1—2</span></div>
          <div className="release-main"><p className="kicker">NOT A CURE. JUST A TRANSITION.</p><h2>PILLS</h2><p className="lead">01 — WEIRD AS DUCK<br />02 — WILD</p></div>
          <div className="release-quote">HANDLE WITH CARE.<br />A$RAM / 2026</div>
        </section>

        <section id="world" className="world">
          <div className="spectral-rings"><i /><i /><i /><i /></div>
          <div className="world-code">04 / AFTER<br />ACCESS: PARTIAL<br />SIGNAL: UNKNOWN</div>
          <div className="world-copy"><p className="kicker">NEXT SPECTRUM</p><h2>SPECTRAL</h2><p className="lead">No explanation yet.</p></div>
          <div className="spectral-mask">SPECTRAL</div>
          <div className="world-bottom"><span>THE NEXT FORM IS NOT AN ARCHIVE.</span><span>THE REST IS IN THE MUSIC.</span></div>
        </section>

        <section className="fragments"><div className="chapter-no">05 / A$RAM</div><blockquote><span>Music was</span><span>the beginning.</span><em>I’m evolving.</em></blockquote><div className="socials"><a href={links.instagram} target="_blank" rel="noreferrer"><small>01</small> INSTAGRAM ↗</a><a href={links.spotify} target="_blank" rel="noreferrer"><small>02</small> SPOTIFY ↗</a><a href={links.apple} target="_blank" rel="noreferrer"><small>03</small> APPLE MUSIC ↗</a><a href={links.youtube} target="_blank" rel="noreferrer"><small>04</small> YOUTUBE ↗</a></div></section>
        <footer><span>A$RAM © 2026</span><span>RESTORING ARCHIVES / BUILDING WHAT COMES NEXT</span><span>∞</span></footer>
      </div>
    </main>
  );
}

export default App;
