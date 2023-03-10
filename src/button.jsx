// import React from "react";
// //import { PropTypes } from "prop-types";
// import Button from 'react-bootstrap/Button';

// // const defaultProps = {
// //     variant: 'primary',
// //     size: 'small'
// // }

// const ButtonComponent = () => {
//     return(
//         <>
//             <div>
//             <Button variant="primary">Primary</Button>{' '}
//             <Button variant="secondary">Secondary</Button>{' '}
//             <Button variant="success">Success</Button>{' '}
//             <Button variant="danger">Danger</Button>{' '}
//             </div>
//         </>
//     );
// }

// // ButtonComponent.propTypes = {
// //     size: PropTypes.oneOf(['small', 'medium', 'large']),
// //     label: PropTypes.string.isRequired,
// //     variant: PropTypes.string,

// // }

// export default ButtonComponent;

import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default function Button (props) {
  const { variant, label, ...rest } = props
  return (
    <button className={`button ${variant}`} {...rest}>
      {label}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),

  // backgroundColor: PropTypes.string,

  // // size: PropTypes.oneOf(['small', 'medium', 'large']),
  
  label: PropTypes.string.isRequired,
  
  // onClick: PropTypes.func,

  // variant: PropTypes.Button,
};


Button.defaultProps = {
  //backgroundColor: null,
  variant: 'success',
  //size: 'medium',
  //onClick: undefined,
  //age: 17,

  label: 'button',
};
