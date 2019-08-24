import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import '../Technologies/Technologies.css'

function Technologies(props) {
  const { classes } = props;
  return (
    <>
    <div className="tech-container">
        <span className='image1'></span>
        <span className='image2'></span>
        <span className='image3'></span>
        <span className='image4'></span>
        <span className='image5'></span>
        <span className='image6'></span>
        <span className='image7'></span>
        <span className='image8'></span>
    </div>
    </>
  );
}

Technologies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (Technologies);
