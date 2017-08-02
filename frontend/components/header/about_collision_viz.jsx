import React from 'react';

import ModalTemplate from './modal_template';

const AboutCollisionViz = props => {
  return (
    <ModalTemplate {...props}>
      <h3>About CollisionViz</h3>
      <p>
        A visualization of motor vehicle collisions in NYC on 6/22/2017.
      </p>
      <p>
        Move/zoom the map, and the collision counter will update accordingly.
      </p>
      <p>
        Click on map icons for collision details.
      </p>
      <div className='modal-link-div'>
        <a href='https://github.com/davidfeng88/CollisionViz' target="_blank">
          GitHub Repo
        </a>
      </div>
    </ModalTemplate>
  );
};

export default AboutCollisionViz;