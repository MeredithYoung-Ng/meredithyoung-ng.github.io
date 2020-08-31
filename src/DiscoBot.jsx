import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import discobot from './imgs/discobot.png';
import discobotpaper from './disco_bot_paper.pdf';
import discobotstoryboard1 from './imgs/discobot-storyboard1.jpg';
import discobotstoryboard2 from './imgs/discobot-storyboard2.jpg';
import discobotstatediagram from './imgs/discobot-statediagram.jpg';
import discobotprototype1 from './imgs/discobot-prototype1.png';
import discobotandroid from './imgs/discobot-android.png';
import discobottableCAD from './imgs/discobot-tableCAD.png';
import discobottable from './imgs/discobot-table.png';
import discobotprototype2 from './imgs/discobot-prototype2.png';
import discobotbeam from './imgs/discobot-beam.png';
import discobotbeambase from './imgs/discobot-beambase.png';
import discobotbase from './imgs/discobot-base.png';
import discobotschematic1 from './imgs/discobot-schematic1.png';
import discobotschematic2 from './imgs/discobot-schematic1.png';

class DiscoBot extends Component {
  render() {
    return (
      <div className="App-body-project">
        <h2>Disco Bot</h2>
        <h3>Feb. – May 2019</h3>
        <div className="App-body-project-video">
          <iframe title="Disco Bot Demo"
          src="https://www.youtube.com/embed/Pg3Pplyg3uk" frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        </div>
        <h4>Introduction</h4>
        <p>Disco Bot is an interactive gesturing and dancing tabletop robot
          designed to create dancing interactions between guests at a house
          party with better social inclusivity. Our robot combines gesturing
          with its disco ball head (affirmative nodding and a horizontal ‘no’
          motion), with dancing (horizontal 360° motion to enable twirling)
          and colored lighting. With Wizard of Oz controls via a wired
          joystick to control the horizontal base and an Android app to
          control the head motion, Disco Bot is deployed in house party
          settings to inclusively integrate individuals and groups into a
          collective and connected dance group. To achieve this, we built
          Disco Bot, which consists of a deconstructed disco ball, a 180°
          servo, a stepper motor, two Arduino Unos, a HC-05 Bluetooth module,
          and a 3D-printed mount and gears.<br /><br />
          View the paper&nbsp;
          <a href={discobotpaper} target="_blank" rel="noopener noreferrer">
            here
          </a>.
        </p>
        <h4>Overview</h4>
        <p>1.	Design Inspiration<br />
          2.	Related Work<br />
          3.	Storyboarding & State Diagrams<br />
          4.	Initial Physical Prototype & User Testing<br />
          5.	High-Fidelity Prototypes & Additional User Testing<br />
          6.	Reflection & Future Work<br /><br />
          This was a joint work with Amanda Chen, Chelsea Chan, Caley Drooff,
          Jackelyn Shen, and Shoshana Swell. My own personal goals for Disco
          Bot were to improve my CAD skills and to gain experience in
          interaction design.
        </p>
        <h4>Design Inspiration</h4>
        <p>The brainstorming process for the disco robot began with an idea to
          allow anyone to dance. We believe that everyone should feel
          comfortable dancing at a party. We wanted to focus on group
          interactions that allow people to meet each other, and dance
          together. With these goals in mind, we designed Disco Bot to have
          the power to make someone comfortable and have fun through dance.
        </p>
        <h4>Related Work</h4>
        <p>Research addressing dancing robots mostly focus on the algorithms of
          robots autonomously dancing to music. Grunberg et al. found an
          algorithm for their autonomous dancing robot to match the tempo of
          songs. These applications, however, are more closely related to robot
          choreography and simulating human dance moves [1].<br /><br />
          Keepon, a small creature-like robot, has nodding and panning control
          which can be operated remotely, but doesn’t have more sophisticated
          movement that inspires dance [2].<br /><br />
          Travis, an expressive robotic speaker dock that dances and “bobs”
          its head to the music played on it, focuses on human-robot
          interaction [3]; however, we seek to influence group interactions.
        </p>
        <h4>Storyboarding & State Diagrams</h4>
        <p>Before we began prototyping, we spent time storyboarding to help us
          envision potential group interactions.
        </p>
        <div className="App-body-project-notebook">
          <img src={discobotstoryboard1} alt="Storyboard"/>
          <img src={discobotstoryboard2} alt="Storyboard"/>
        </div>
        <p>Analyzing our storyboards enabled us to narrow down our problem
          space to the dance floor at a house party, repurposing a tabletop
          disco ball instead of one hanging from the ceiling. We then began
          building state diagrams to determine our Wizard of Oz interactions.
          After several iterations, we decided to focus on two key
          interactions: inviting newcomers and encouraging people on the
          sidelines to dance.
        </p>
        <div className="App-body-project-notebook">
          <img src={discobotstatediagram} alt="State Diagrams"/>
        </div>
        <h4>Initial Physical Prototype</h4>
        <div className="App-body-discobot-pics">
          <img src={discobotprototype1} alt="Initial Prototype"/>
        </div>
        <p>Our first prototype involved designing the U-mount to hold the disco
          ball and servo motor, allowing for both vertical 180° “nodding”
          motion of the disco ball and horizontal 360° rotational motion. We
          used two 3D-printed gears, with one tightly fit to the disco ball and
          the other attached to the servo. To control the Disco Bot, we used a
          potentiometer to control the stepper, and another potentiometer and
          three push buttons to control the disco ball’s vertical angle and
          LEDs. However, we realized that the wires attached to the disco ball
          were preventing the robot from achieving horizontal 360° motion.
        </p>
        <h4>Wireless Iteration, with Bluetooth</h4>
        <div className="App-body-discobot-pics">
          <img src={discobotandroid} alt="Android App"/>
        </div>
        <p>To solve our wiring issues, we used an HC-05 Bluetooth module
          connected to an Android app to control the LED colors and disco ball
          head tilt. We created a table platform mount (below) for the
          additional subsequent electronics, mounting an Arduino Uno upside
          down above the breadboards to conserve vertical space.
        </p>
        <div className="App-body-discobot-pics">
          <img id="leftimg" src={discobottableCAD} alt="Table Platform CAD"/>
          <img src={discobottable} alt="Table Platform"/>
        </div>
        <p>We also redesigned the base and taller U-mount into separate pieces
          (base and 2 columns) for easier printing.
        </p>
        <div className="App-body-discobot-pics">
          <img src={discobotprototype2} alt="Bluetooth Prototype"/>
        </div>
        <h4>User Testing</h4>
        <p>Our first user testing experiment was with a house party environment
          and Wizard of Oz testing procedure. The DJ controlled the music
          selection and horizontal movement through the hidden wired joystick,
          with Disco Bot placed on the DJ booth table. Another group member
          subtly controlled the vertical movement and lighting through the
          Android app. We had 7 undergraduate participants.<br /><br />
          Participants seemed visibly uncomfortable when entering the room, so
          we focused on a welcoming interaction: when a group walked in, the
          disco ball displayed a blue pattern, and followed the subjects as
          they walked into the room through horizontal movement.<br /><br />
          Focusing on gestures (e.g., affirmative head bobs) that caused people
          to recognize Disco Bot as a friendly fellow dancing figure was
          successful. We increased its bobbing frequency according to the
          rhythm of the music during the testing session. Users thought the
          robot was bobbing with the music and dancing with them. Several users
          approached the robot to further investigate how it worked.<br /><br />
          Upon analyzing post-experiment surveys, we found that most users
          enjoyed the experience, noting how Disco Bot seemed “like a friend”
          and how human-like our Disco Robot seemed. One user noted how the
          beams seemed like arms and how the disco ball seemed like a head
          with a mohawk.
        </p>
        <h4>Final Prototype</h4>
        <div className="App-body-discobot-pics">
          <img id="leftimg" src={discobotbeam} alt="Beam CAD"/>
          <img src={discobotbeambase} alt="Interlocking Beam & Base CAD"/>
        </div>
        <p>We redesigned the beams with interlocking slots in the base so that
          the beams holding the disco ball head would be more secure (above).
        </p>
        <div className="App-body-discobot-pics">
          <img src={discobotbase} alt="Final Base CAD"/>
        </div>
        <p>We also redesigned the base into two parts as the stepper motor
          melted the previous PLA base: one small cross-shaped piece sat on the
          stepper that interlocked tightly with the U-mount base (above).<br />
          <br />
          We added a spring and weight to test more anthropomorphic interactions
          through an antenna, based on our user testing results. We drew an
          eyeball on the tape holding the small weight to the spring to create
          a more personalized, anthropomorphized version of our Disco Bot.
        </p>
        <div className="App-body-discobot-pics">
          <img src={discobot} alt="Final Prototype"/>
        </div>
        <h4>Additional User Testing</h4>
        <p>We maintained similar testing conditions in our next study (four
          undergraduates). The study began with a welcoming design with blue
          lighting and horizontal movement that tracked people entering the
          room. We tracked the person we thought would be most likely to dance
          (whoever was bobbing their head to the beat of the music),
          occasionally bobbing the disco ball head at them to gesture them to
          dance. Then, we added a green spotlight and head bobs when this
          person began dancing. This provided an affirmative incentive for
          people to dance. This green spotlight moved horizontally with the
          person who was dancing, plus vertical movement to make the disco ball
          head bob with the dancer. We then focused on tracking a different
          non-dancing guest. When someone wasn’t dancing in the testing session,
          the robot would turn red and bob toward the person to dance similarly
          to the earlier spotlight interaction.<br /><br />
          Additionally, we specifically tested the antenna. People appeared to
          view the Disco Bot as a friend, increasing the distance they would
          move to approach it. Some people even tried gesturing at the robot
          to get its attention, and one participant even started talking to it.
          <br /><br />
          When surveyed, they said that they felt more curious and comfortable
          when the antenna was on the robot. They said that the antenna did not
          really seem to make the robot catch their attention with the extra
          motion more than without it; however, we observed that the extra
          visual stimulation increased participants’ gaze towards Disco Bot.
        </p>
        <h4>Reflection & Future Work</h4>
        <p>This was my first time approaching a hardware project entirely from
          a design mindset—I learned a lot of valuable skills like
          storyboarding and state diagrams, as well as the value in using a
          sketchbook. I’m also much more comfortable with CAD. In the future,
          I’m interested in doing more physical computing x design projects.
          <br /><br />
          Future work includes rebuilding the Disco Bot with metal rods and
          spacers for better structural integrity. We could also laser cut the
          table platform with acrylic a smaller vertical height for space and
          weight efficiency. A stronger stepper motor would provide more
          precise rotational motion and be less likely to heat up. In addition,
          a continuous and more reliable servo would enable a greater range of
          disco ball head motion. It would also be interesting to perform user
          testing with and without the use of a 3D-printed shell, to further
          test the effects of the Disco Bot’s current anthropomorphic
          appearance. We also would perform user testing with more quantitative
          measures to further test our hypotheses.<br /><br />
          Fun Fact: The music in our video, discohaze, is actually by our
          teammate Chelsea Chan (JAIE)!
        </p>
        <h4>Schematics</h4>
        <div className="App-body-discobot-pics">
          <img src={discobotschematic1} alt="Disco Bot Schematic"/>
          <img src={discobotschematic2} alt="Joystick Schematic"/>
        </div>
        <h4>References</h4>
        <p>[1]	Grunberg, David & Ellenberg, Robert & E. Kim, Youngmoo & Oh,
          Paul. (2009). Creating an autonomous dancing robot. ACM International
          Conference Proceeding Series. 321. 221-227. 10.1145/1644993.1645035.
          <br />
          [2]	M. P. Michalowski, S. Sabanovic and H. Kozima, "A dancing robot
          for rhythmic social interaction," 2007 2nd ACM/IEEE International
          Conference on Human-Robot Interaction (HRI), Arlington, VA, 2007,
          pp. 89-96.
          http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6251721&isnumber=6251673
          <br />
          [3]	Hoffman, G., & Vanunu, K. (2013). Effects of Robotic
          Companionship on Music Enjoyment and Agent Perception. Proceedings of
          the 3rd ACM/IEEE International Conference on Human-Robot Interaction.
        </p>
        <div className="App-body-project-buttons">
          <Link to="/tiletunes">
            <button type="button">
              &#8249; Previous: Tile Tunes
            </button>
          </Link>
          <Link to="/work">
            <button type="button">
              Back to Portfolio
            </button>
          </Link>
          <Link to="/pvdcm">
            <button type="button">
              Next Up: PVDCM &#8250;
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default DiscoBot;
