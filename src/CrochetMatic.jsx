import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import threecol from './imgs/crochetmatic.jpg';
import onecolblender from './imgs/crochetmatic-blender-onecol.png';
import twocolblender from './imgs/crochetmatic-blender-twocol.png';
import threecolblender from './imgs/crochetmatic-blender-threecol.png';
import threecolsim from './imgs/crochetmatic-3col.png';

class Crochetmatic extends Component {
  render() {
    return (
      <div className="App-body-project">
        <h2>CrochetMatic</h2>
        <h3>Jan. – Aug. 2019</h3>
        <input type="image" src={threecol} alt="Three Column Simulation"/>
        <h4>Introduction</h4>
        <p>CrochetMatic is a novel volumetric knitting machine that can
          construct knitted 3D geometries in layers. I worked on modelling these
          geometric input models for simulation, developing a 3D stitch
          mesh-like language with a respective Blender model for each stitch
          that can be outputted as a polyline and converted to a B-spline for
          simulation of the CrochetMatic model.
        </p>
        <h4>Overview</h4>
        <p>1. Designing 3D Stitch Models<br />
          2. Converting Polylines to B-Splines<br />
          3. Results<br /><br />
          This project was done in collaboration with Steve Marschner. We also
          worked with François Guimbretière and Amrit Kwatra, who worked on
          building the physical CrochetMatic system. The project is still
          on-going, and there is still a lot more to explore regarding more
          complicated 3D knitted models.
        </p>
        <h4>Designing 3D Stitch Models</h4>
        <p>Inspired by 3D stitch meshes, I worked on modeling each individual
          stitch in Blender, designing an input language to determine physical
          compatibility. Since a proposed CrochetMatic model needs to be
          connected via one piece of yarn, I also made a script that checked the
          model for connectivity. Below are screenshots of a one-column,
          two-column, and three-column models in Blender.
        </p>
        <div className="App-body-surfacebrush-imgs">
          <input type="image" src={onecolblender} alt="One Column Blender Model"/>
          <input type="image" src={twocolblender} alt="Two Column Blender Model"/>
          <input type="image" src={threecolblender} alt="Three Column Blender Model"/>
        </div>
        <h4>Converting Polylines to B-Splines</h4>
        <p>Since the input models for the simulator required a B-spline format,
          I wrote a short script to convert the stitch polyline models from
          Blender into B-splines, and from .obj to .ys format.
        </p>
        <h4>Results</h4>
        <p>Once I had the block models in the compatible B-spline format for the
          yarnsim simulator, developed by PhD students in the lab, I tuned the
          simulation parameters to work with my CrochetMatic model inputs. The
          three column model is shown below.
        </p>
        <input type="image" src={threecolsim} alt="Three Column Simulation"/>
        <div className="App-body-project-buttons">
          <Link to="/portalware">
            <button type="button">
              &#8249; Previous: Portalware
            </button>
          </Link>
          <Link to="/work">
            <button type="button">
              Back to Portfolio
            </button>
          </Link>
          <Link to="/surfacebrush">
            <button type="button">
              Next Up: SurfaceBrush &#8250;
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Crochetmatic;
