import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import tiletunes from './imgs/tiletunes.png';
import tiletunesdoc from './tile_tunes_report.pdf';
import tiletunesdesign from './imgs/tiletunes-initial.png';
import tiletunescardboard from './imgs/tiletunes-cardboard.png';
import tiletuneslego from './imgs/tiletunes-lego.png';
import tiletunesinitialCAD from './imgs/tiletunes-initialCAD.png';
import tiletunesprototype1 from './imgs/tiletunes-prototype1.png';
import tiletunesfinalCAD from './imgs/tiletunes-finalCAD.png';
import tiletunesteam from './imgs/tiletunes-team.jpeg';
import tiletunesschematic1 from './imgs/tiletunes-schematic1.jpg';
import tiletunesschematic2 from './imgs/tiletunes-schematic2.png';

class TileTunes extends Component {
  render() {
    return (
      <div className="App-body-project">
        <h2>Tile Tunes</h2>
        <h3>Aug. – Dec. 2018</h3>
        <div className="App-body-project-video">
          <iframe title="Tile Tunes Demo"
          src="https://www.youtube.com/embed/VB4djxE_sbU" frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        </div>
        <h4>Introduction</h4>
        <p>We live in a world with hundreds of instruments—ways one can
          physically create music. Musical compositions often begin by writing
          down notes on a sheet of paper or computer software. This creative
          process, however, is noticeably more removed from the physical realm
          of playing the music on an instrument. In addition, music
          visualization is often disconnected from tangible interaction. We
          seek to bridge this gap between musical ideas and the tangible world
          through physical computing that fosters creativity.<br /><br />
          Introducing Tile Tunes: a robot that moves along a user-drawn track
          (two black lines), reading and interpreting colored paper ‘tiles’
          along the track as musical notes. Two IR sensors at the front of the
          robot follow the drawn track while a color sensor searches for and
          interprets the colored tiles. When a color is interpreted as a
          musical note, the respective note is visually displayed on an OLED
          screen and sent to an audio breakout board, which outputs the note’s
          sound through a connected speaker. Users can quickly make and modify
          their own musical compositions in real-time by moving colored tiles
          around the track.
        </p>
        <h4>Overview</h4>
        <p>1. Related Work<br />
          2. Initial Design<br />
          3. Low-Fidelity Prototypes<br />
          4. Initial High-Fidelity Prototype<br />
          5. Final High-Fidelity Prototype<br />
          6. Reflection & Future Work<br /><br />
          This project was done in collaboration with Melissa Avila and Alan
          Lee. I was primarily responsible for the electrical and
          microcontroller components of the project. My own personal goals for
          Tile Tunes were to gain experience working on user experience-focused
          projects, and learning how to approach engineering with a
          design-focused mindset.<br /><br />
          View the full documentation&nbsp;
          <a href={tiletunesdoc} target="_blank" rel="noopener noreferrer">
            here
          </a>. Our code can be also be found on&nbsp;
          <a href="https://github.com/MeredithYoung-Ng/Tile-Tunes"
          target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
        </p>
        <h4>Related Work</h4>
        <p>Our work is primarily inspired by Yuri Suzuki’s Colour Chaser
          project, a vehicle that follows a freely-drawn black line track and
          translates non-black lines (drawn over the track) into different
          musical pitches [1]. In addition, other work such as Specdrums [2],
          EyeMusic [3] and chromesthesia [4-5] translate color to pitch.
          Overall, Tile Tunes focuses on the intersection of the broader
          research areas of physical music composition and intelligent physical
          systems.
        </p>
        <h4>Initial Design</h4>
        <p>Our original idea for this project was a robot that reads colored
          tiles along a fixed-width expandable railed track. Each colored tile
          would correspond to a different musical note processed in real-time,
          visualized on an OLED display and played on a speaker connected to an
          audio breakout board.
        </p>
        <div className="App-body-tiletunes-pics">
          <img src={tiletunesdesign} alt="Initial Design"/>
        </div>
        <p>Ultimately, after feedback from potential users, we determined that
          a free-drawn track would enable the user to have more creative
          freedom. We then incorporated this idea into our low-fidelity
          prototype.
        </p>
        <h4>Low-Fidelity Prototypes</h4>
        <p>We proceeded to build several low-fidelity prototypes with cardboard
          and LEGOs, as shown below. We performed simple Wizard-of-Oz testing to
          simulate user interactions, ensuring that our design focused on
          improving the tangible user experience of musical composition.
        </p>
        <div className="App-body-tiletunes-pics">
          <img id="leftimg" src={tiletunescardboard} alt="Cardboard Prototype"/>
          <img src={tiletuneslego} alt="LEGO Prototype"/>
        </div>
        <h4>Initial High-Fidelity Prototype</h4>
        <p>Incorporating feedback from our low-fidelity prototype testing into
          our next iteration, we proceeded to build our first high-fidelity
          prototype.
        </p>
        <div className="App-body-tiletunes-pics">
          <img id="leftimg" src={tiletunesinitialCAD} alt="Initial CAD"/>
          <img src={tiletunesprototype1} alt="First High-Fidelity Prototype"/>
        </div>
        <p>Our initial CAD (above) featured a T-slotted wooden box design,
          with mounts for the motors at the front and the ball casters at the
          back. We planned to have all of our electronics mounted on the top of
          the box, but realized we needed additional space and incorporated a
          second mount.<br /><br />
          As our robot moves along the track, the TCS34725 color sensor
          continuously reads colors from tiles along the track, sending input
          via I2C to the RedBear Duo microcontroller, which checks if the
          colors satisfy one of the predetermined HSL (Hue Saturation
          Lightness) ranges. The RedBear then maps each detected color to
          its respective note letter, and visually outputs it on the Adafruit
          SSD1331 OLED display via SPI. <br /><br />
          A second RedBear Duo microcontroller controls the motors via a simple
          line-tracking algorithm based on the IR sensor readings.<br /><br />
          For this prototype, we drew a single-lined track with a black
          Sharpie, adding black lines to our colored tiles to prevent the IR
          sensors from misinterpreting the tiles as the track. However, having
          paper taped down was problematic in terms of reusability (the colored
          paper rips upon removal), and also restricted a user’s ability to
          make quick modifications to their track.
        </p>
        <h4>Final High-Fidelity Prototype</h4>
        <p>Since our audio breakout board wasn’t supported by the RedBear, we
          replaced the primary RedBear Duo with an Adafruit Feather M4, which
          has a faster processor. Ultimately, we achieved full color, visual,
          and audio integration. While we initially planned to play MP3 files,
          we switched to MIDI and a portable speaker to achieve a crisper
          sound. To accommodate all of these new electronic components on our
          robot, we redesigned our robot with a more compact acrylic
          three-tiered box frame (CAD below).<br /><br />
          We also redesigned our track with two black lines, facilitating
          easier musical tile composition. The tiles were redesigned with label
          paper, as it was easy to print on, stuck flat to the track, was
          sticky enough to be reused, and did not rip easily on removal. Now,
          color tiles could simply be placed in between the lines.
        </p>
        <div className="App-body-tiletunes-pics">
          <img id="leftimg" src={tiletunesfinalCAD} alt="Final CAD"/>
          <img src={tiletunes} alt="Final High-Fidelity Prototype"/>
        </div>
        <h4>Reflection & Future Work</h4>
        <p>Overall, this project sparked my interest in HCI and physical
          computing. It was also an amazing experience working with Alan and
          Melissa—our strengths all balanced each other (Alan is a mechanical
          engineering major, and Melissa is an information science major). This
          also led to me working on CrochetMatic with Prof. François
          Guimbretière.
        </p>
        <div className="App-body-tiletunes-pics">
          <img src={tiletunesteam} alt="Team Pic"/>
        </div>
        <p>Regarding future work, the next step we would take would be
          implementing two-chord functionality. We would need additional
          hardware—a microcontroller that can simultaneously run two I2C, one
          SPI, and one UART bus, or an alternative color sensor. A
          higher-quality color sensor would enable us to include more musical
          notes, as the TCS34725 can be inconsistent. Finally, we would also
          like to incorporate more user interaction methods with Tile Tunes.
          Enabling the users to set the instrument and octave played by the
          robot, upload custom sounds, and configure the mapping of colors to
          musical notes would all enhance the user experience.
        </p>
        <h4>References</h4>
        <p>[1] Yuri Suzuki. 2010. Colour Chaser. Retrieved September 16, 2018
          from http://yurisuzuki.com/archive/works/colour-chaser/<br />
          [2] Specdrums. 2018. Specdrums. Retrieved September 16, 2018 from
          https://www.specdrums.com/<br />
          [3]	Sami Abbouda, Shlomi Hanassya, Shelly Levy-Tzedeka, Shachar
          Maidenbauma, and Amir Amedi. 2014. EyeMusic: Introducing a “visual”
          colorful experience for the blind using auditory sensory substitution.
          Restorative Neurology and Neuroscience 32, 247-267.<br />
          [4]	Siri Carpenter. 2001. Everyday fantasia: The world of synesthesia.
          American Psychological Association 32, 3 (March 2001).<br />
          [5]	Stephen E. Palmer. 2015. What Color Is This Song? Retrieved
          September 16, 2018 from
          http://nautil.us/issue/26/color/what-color-is-this-song
        </p>
        <h4>Schematics</h4>
        <div className="App-body-tiletunes-pics">
          <img src={tiletunesschematic1} alt="Color Sensing Schematic"/>
          <img src={tiletunesschematic2} alt="Line Tracking Schematic"/>
        </div>
        <div className="App-body-project-buttons">
          <Link to="/pathtracer">
            <button type="button">
              &#8249; Previous: Path Tracer
            </button>
          </Link>
          <Link to="/work">
            <button type="button">
              Back to Portfolio
            </button>
          </Link>
          <Link to="/discobot">
            <button type="button">
              Next Up: Disco Bot &#8250;
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default TileTunes;
