import React from 'react';
import './About.css';
import '../icons/icofont/css/icofont.css';

const About = () => (
  <div id="about">
    <section id="description">
      <h2>About us</h2>
      <p>
        Pastrami buffalo pork belly pancetta cow bresaola. Shankle flank ribeye andouille beef, spare ribs chuck frankfurter beef ribs kielbasa ball tip chicken swine ham hock. Shoulder pork rump, chuck turducken tongue capicola jowl pancetta andouille. Short ribs chicken bacon, turkey buffalo swine brisket chuck tri-tip tenderloin pork loin kielbasa ham. Chicken pork meatball, ham hock venison short loin rump ribeye burgdoggen beef ribs landjaeger strip steak flank pork loin meatloaf. Doner frankfurter pork loin alcatra.
      </p>
    </section>
    <section id="mission">
      <h2>Our Mission</h2>
      <p>
        Spicy jalapeno bacon ipsum dolor amet strip steak pig pastrami rump kielbasa pork loin, boudin short loin burgdoggen doner corned beef ham filet mignon landjaeger fatback. Chuck capicola kielbasa, ham flank biltong brisket ball tip boudin picanha frankfurter leberkas. Beef ribs ham hock cow brisket beef sirloin ground round porchetta kevin shankle pork belly. Jerky strip steak sirloin, turducken pastrami cupim spare ribs.
      </p>
    </section>
    <section>
      <h2>Animals looking for a home</h2>
      <div className="animals">
        <div>
          <i className="icofont icofont-animal-dog-alt"></i>
        </div>
        <div>
          <i className="icofont icofont-animal-cat"></i>
        </div>
        <div>
          <i className="icofont icofont-animal-pigeon-alt"></i>
        </div>
        <div>
          <i className="icofont icofont-animal-frog"></i>
        </div>
      </div>
    </section>
  </div>
);

export default About;