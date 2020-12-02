import React from 'react';
import {Link} from '@reach/router'

const BackArrow = (props) => {
  return (
    <div>
      <Link to='/'>
      <span> <i class="fas fa-arrow-left"></i></span>
      </Link>
    </div>
  );
}

export default BackArrow;