import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import diffuse from './imgs/pathtracer-CornellBox-BRDF_Importance_Sampling_1000_x3_emission.png';
import glossy from './imgs/pathtracer-CornellBox-Glossy_BRDF_Importance_Sampling_1000_x3_emission.png';
import mirror from './imgs/pathtracer-CornellBox-Mirror_1000_x3_emission.png';
import glass from './imgs/pathtracer-CornellBox-Sphere_x10_emission.png';

class PathTracer extends Component {
  render() {
    return (
      <div className="App-body-project">
        <h2>Path Tracer</h2>
        <h3>Feb. 2020</h3>
        <div className="App-body-surfacebrush-imgs">
          <input type="image" src={diffuse} alt="Diffuse Cornell Box with BRDF Importance Sampling"/>
          <input type="image" src={glossy} alt="Glossy Cornell Box with BRDF Importance Sampling"/>
          <input type="image" src={mirror} alt="Mirror Cornell Box"/>
          <input type="image" src={glass} alt="Glass Cornell Box"/>
        </div>
        <h4>Introduction</h4>
        <p>I worked on a CPU path tracer, a renderer that uses physically
          accurate light transport, for my first project in CS 2240,
          Brown's advanced computer graphics course. This was my first time
          building an extensive project with Qt in C++. The above images were
          rendered with 1000 samples.
        </p>
        <h4>Features</h4> {/* <h4>Overview</h4> */}
        <p>1. BRDFs (Ideal diffuse, Glossy specular, Ideal specular (mirror),
          Dielectric refraction (refraction + Fresnel reflection))<br />
          2. Soft shadows<br />
          3. Indirect illumination<br />
          4. Russian roulette path termination<br />
          5. Event splitting<br />
          6. Tone mapping<br />
          7. BRDF Importance Sampling (both diffuse and Phong)<br />
          8. Stratified Sampling<br /><br />
          Due to academic integrity reasons, I cannot publicly release the code
          for this project. Contact me if you want to see the code or have any
          questions!
        </p>
        <div className="App-body-project-buttons">
          <Link to="/surfacebrush">
            <button type="button">
              &#8249; Previous: SurfaceBrush
            </button>
          </Link>
          <Link to="/work">
            <button type="button">
              Back to Portfolio
            </button>
          </Link>
          <Link to="/tiletunes">
            <button type="button">
              Next Up: Tile Tunes &#8250;
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default PathTracer;
