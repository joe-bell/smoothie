import React, { Component} from 'react'

import Header from '@smoothie-css/assets/partials/header'

import songs from '@smoothie-css/assets/data/songs'
import Album from './components/Album'
import Heading from './components/Heading'

class App extends Component {
  render () {
    return (
      <div>
        <Header recipe="JSON, SCSS & Styled Components" />
        <main class="o-container u-margin-top-large u-margin-bottom-large">
          <Heading>Mixtape <span aria-hidden="true">🎧</span></Heading>
          <p>A <a href="https://github.com/joebell93/smoothie" className="u-text-bold" target="_blank">Smoothie</a> proof of concept to:</p>
          <ul>
            <li>Show that different CSS tools can work together ❤️</li>
            <li>Shamelessly gain followers for my seasonal <a href="https://open.spotify.com/user/joe_bell/playlist/6grXsm1j2njgfF3jsE2DsF?si=SL47ot_vS6-78_28NUZfFQ" target="_blank">Spotify playlist</a></li>
          </ul>
          <p>How does this work? <a href="https://github.com/joebell93/smoothie/tree/master/recipes/json-scss-and-styled-components" target="_blank">View source on GitHub</a>.</p>
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
      </div>
    )
  }
}

export default App
