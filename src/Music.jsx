import React, {Component} from 'react';

class Music extends Component {
  render() {
    return (
      <div className="App-body-project">
        <div className="App-body-music">
          <h2>music bio</h2>
          <p>Meredith Young-Ng, violin, began playing the violin at age five.
            She currently studies with Katherine Winterstein in the Applied
            Music Program at Brown University and plays in a trio in the Chamber
            Music Program, coached by Lois Finkel. With a love for chamber
            music, Meredith has had the opportunity to spend 3 summers at the
            San Francisco Conservatory Summer Music West program, 2 summers at
            California Summer Music, and 1 summer at the Peninsula Youth
            Symphony Chamber Music program. Meredith also has ample orchestral
            experience as a previous member of the Palo Alto Chamber Orchestra,
            Monta Vista High School Orchestra, California Youth Symphony, and
            Cornell Symphony Orchestra. She had the honor of performing as the
            co-concertmaster of the CYS Associate Orchestra in 2013-2014. Her
            primary teachers have included Eleanor Angel, Debra Fong, and Ariana
            Kim. Meredith has also studied piano for 13 years, most recently
            with Nancy Jensen, receiving Branch Honors and a Senior Medallion in
            the MTAC Certificate of Merit program. When not making music in her
            free time, Meredith can be found hacking away on her research as a
            M.S. student at Brown studying computer science.<br /><br />
            Listen to Meredith's latest performance below:
          </p>
          <div className="App-body-project-video">
            <iframe title="Moszkowski Trio"
            src="https://www.youtube.com/embed/h-kTBedzvtk" frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Music;
