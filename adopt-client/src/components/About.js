import React from 'react';
import AvailablePet from '../containers/AvailablePet';
import './About.css';
import descriptionImg from '../images/about/patrick-hendry-221863-unsplash.jpg';
import missionImg from '../images/about/nicolas-tessari-218491-unsplash.jpg';
import availableImg from '../images/about/wyatt-ryan-367017-unsplash.jpg';

const About = () => (
  <div id="about">
    <section 
      id="description"
      style={{ backgroundImage: `url(${descriptionImg})` }}
    >
      <h2 data-aos="fade-up">About us</h2>
      <p data-aos="fade-up">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id tempus neque, sed maximus eros. Cras sit amet nulla lectus. Fusce eget faucibus sem. Vivamus sed ultrices ligula, ultrices molestie arcu. Duis nec ex congue, venenatis erat sed, finibus risus. Curabitur in dolor lorem. Fusce massa sem, fringilla quis arcu at, sodales dictum urna.
      </p>
    </section>
    <section 
      id="mission"
      style={{ backgroundImage: `url(${missionImg})` }}
    >
      <h2 data-aos="fade-up">Our Mission</h2>
      <p data-aos="fade-up">
        Sed pharetra tortor sem, nec fermentum nunc posuere nec. Sed id odio ac ligula facilisis venenatis. Aliquam erat volutpat. Nullam id convallis dolor. Proin ut pellentesque arcu, vitae gravida turpis. Donec congue lacus non turpis sollicitudin condimentum vitae sit amet nulla. Fusce convallis tempus dapibus.
      </p>
    </section>
    <section 
      id="available"
      style={{ backgroundImage: `url(${availableImg})` }}
    >
      <h2 data-aos="fade-up">Animals looking for a home</h2>
      <div className="animals"  data-aos="fade-up">
        <AvailablePet animal="dogs" />
        <AvailablePet animal="cats" />
        <AvailablePet animal="birds" />
        <AvailablePet animal="frogs" />
      </div>
    </section>
  </div>
);

export default About;