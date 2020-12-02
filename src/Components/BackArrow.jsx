import React from 'react';
import {Link} from '@reach/router'

const BackArrow = (props) => {
  return (
    <div>
      <Link to='/'>
      <span> <i className="fas fa-arrow-left"></i></span>
      </Link>
    </div>
  );
}

export default BackArrow;