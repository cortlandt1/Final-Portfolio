import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import '../GroupApp/GroupApp.css'
import CodePen from '../CodePen/CodePen.js'


const styles = {
  root: {
    flexGrow: 1,
  },
  grid: {
  }
};

function GroupApp(props) {
  const { classes } = props;
  return (
    <>
        <div className='contain1'>
            <div className='app1'> 
                <span className="image"></span>
            </div>            
            <div className='app-info1'>
              <div className="header1">
                <h2>
                  {props.title}
                </h2>
              </div>  
                  <ul>
                    <li>
                      {props.point1}
                    </li>
                    <p></p>
                    <li>
                      {props.point2}
                    </li>
                    <p></p>
                    <li>
                      {props.point3}
                    </li>
                  </ul>
                  <div className="button-contain">
                  <a href="https://cortlandt1.github.io/TrailFinder/" target="_blank">
                    <button className="button1">Open Site</button>
                  </a>  
                  <a href="https://github.com/cortlandt1/TrailFinder" target="_blank">  
                    <button className="button2">Github</button>
                  </a>  
                  </div>  
            </div>

        </div>
    </>
  );
}

GroupApp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (GroupApp);


//"dBwZNW"
//cortlandt1