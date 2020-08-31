import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import skull from './imgs/surfacebrush.gif';
import paperfigure from './imgs/surfacebrush-paper-figure.jpg';
import heart from './imgs/surfacebrush-heart.gif';
import bonsaiapple from './imgs/surfacebrush-bonsai-apple.png';
import bonsaiprint from './imgs/surfacebrush-bonsai-print.png';
import bonsaiprintable from './imgs/surfacebrush-bonsai-printable.png';

class SurfaceBrush extends Component {
  render() {
    return (
      <div className="App-body-project">
        <h2>SurfaceBrush</h2>
        <h3>Apr. – May 2020</h3>
        <input type="image" src={skull} alt="SurfaceBrush Skull"/>
        <h4>Introduction</h4>
        <p>Mid-air 3D sketching tools in VR like Google TiltBrush enable
          artists to draw in 3D directly with 3D input; however, these outputs
          are disconnected from common 3D modeling output formats, especially
          those used for physical fabrication. We decided to reimplement our own
          version of&nbsp;
          <a href="https://www.cs.ubc.ca/labs/imager/tr/2019/SurfaceBrush/"
          target="_blank" rel="noopener noreferrer">SurfaceBrush</a> (SIGGRAPH
          2019), a paper that presents a method to convert varying-width
          ribbon-like 3D brush strokes to manifold 3D surfaces. SurfaceBrush's
          pipeline starts from inter-stroke matching with vertex matching,
          then continues to mesh strip generation, manifold consolidation, and
          closing the gaps before final post-processing steps, as shown below
          in Figure 1 from the paper.
        </p>
        <input type="image" src={paperfigure} alt="SurfaceBrush Paper Pipeline"/>
        <h4>Overview</h4>
        <p>1. Vertex Matching<br />
          2. Mesh Strip Generation<br />
          3. Closing the Gaps & Laplacian Smoothing<br />
          4. Results<br /><br />
          This project was done in collaboration with Selena Ling, Katie Scholl,
          and Henry Stone. I worked on the vertex matching, mesh strip
          generation, and closing the gap steps as described below. Our
          implementation was done in C++ with Qt.<br/><br/>
          View the presentation slides&nbsp;
          <a href="https://docs.google.com/presentation/d/1TpYpSUx6yfOkGCWr4-QzJVK6UMLK0tboKBYM6Rpn65M/edit?usp=sharing"
          target="_blank" rel="noopener noreferrer">
            here
          </a>.
        </p>
        <h4>Vertex Matching</h4>
        <p>I worked on the vertex matching computation, which computes the
          optimal left and right match for each vertex from its respective left
          and right candidate sets via the&nbsp;
          <a href="https://en.wikipedia.org/wiki/Viterbi_algorithm"
          target="_blank" rel="noopener noreferrer">Viterbi algorithm</a>. This
          involved finding the maximum matching score across all strokes via a
          vertex-to-vertex matching score and persistence score.
        </p>
        <h4>Mesh Strip Generation</h4>
        <p>We divided the 3 cases presented in the paper as the quad, triangle,
          and fan cases, respectively. One bug we ran into was having strips
          repeated in multiple directions (due to the left and right matchings
          for each stroke), which we fixed by checking whether the strip's
          normal or its flipped version were already in our vertex map.
        </p>
        <h4>Closing the Gaps</h4>
        <p>I worked on boundary smoothing, using the simple update according to
          the change in angle of the triangle normals as explained in the paper.
          I also implemented Laplacian smoothing as a small extension to create
          smoother manifold output meshes. We also were able to reuse our code
          for vertex matching and mesh strip generation between to close the
          gaps with the modifications listed in the paper, running this process
          mulitple times. A GIF of how the gaps were closed in multiple passes
          for the heart is shown below.
        </p>
        <input type="image" src={heart} alt="Heart"/>
        <h4>Results</h4>
        <p>A GIF of our entire pipeline for the skull can be found below.</p>
        <input type="image" src={skull} alt="Skull"/>
        <p>We were also able to successfully input our bonsai tree output mesh
          into Portalware (my 3D mid-air smartphone AR sketching project),
          drawing apples on top of the bonsai, and also successfully load it
          into 3D printing software, showcasing the many 3D modeling
          applications the SurfaceBrush pipeline offers.
        </p>
        <div className="App-body-surfacebrush-imgs">
          <input type="image" src={bonsaiapple}
          alt="Bonsai with sketched AR apples"/>
          <input type="image" src={bonsaiprint}
          alt="Bonsai in 3D printing software"/>
          <input type="image" src={bonsaiprintable}
          alt="Bonsai ready for printing in 3D printing software"/>
        </div>
        <div className="App-body-project-buttons">
          <Link to="/crochetmatic">
            <button type="button">
              &#8249; Previous: CrochetMatic
            </button>
          </Link>
          <Link to="/work">
            <button type="button">
              Back to Portfolio
            </button>
          </Link>
          <Link to="/pathtracer">
            <button type="button">
              Next Up: Path Tracer &#8250;
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SurfaceBrush;
