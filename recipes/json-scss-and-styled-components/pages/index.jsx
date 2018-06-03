import React from 'react'

import songs from '../data/songs'

import Album from '../components/Album'
import Heading from '../components/Heading'

export default () =>
  <main class="o-container u-margin-top u-margin-bottom-large">
    <p className="u-text-right">by <a href="https://joebell.co.uk" target="_blank" className="u-margin-bottom">Joe Bell</a></p>
    <Heading>Bangers 🎧</Heading>
    <p>A <span className="u-text-bold">Smoothie 🍹</span> proof of concept to:</p>
    <ul>
      <li>Show that different CSS build tools can work together in harmony ❤️</li>
      <li>Shamelessly gain followers for my seasonal <a href="https://open.spotify.com/user/joe_bell/playlist/6grXsm1j2njgfF3jsE2DsF?si=SL47ot_vS6-78_28NUZfFQ" target="_blank">Spotify playlist</a></li>
    </ul>
    <details className="u-margin-bottom-large">
      <summary className="u-text-bold u-margin-bottom">How does this work?</summary>
      <p>This recipe uses:</p>
      <ol>
        <li>JSON (Tokens)</li>
        <li><a href="https://sass-lang.com/" target="_blank">SCSS</a> (Global)</li>
        <li><a href="https://www.styled-components.com/" target="_blank">Styled Components</a> (Components)</li>
      </ol>
      <p><strike>Sauce</strike> Source available on <a href="https://github.com/joebell93/smoothie" target="_blank" className="u-margin-bottom">GitHub</a></p>
    </details>
    <div class="o-layout o-layout--spaced">
      {songs.map(song =>
        <div class="o-layout__item u-width-1/2@small u-width-1/3@medium">
          <Album
            title={song.title}
            artist={song.artist}
            img={song.img}
            url={song.url} />
        </div>
      )}
    </div>
  </main>
