import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';



import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import {Pic} from './utility';

const styles = {
    root: {
        flexGrow: 1,
      },
      grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
      list: {
        width: 250,
      },
      profile_Details:{
        padding:16,
      },
      font14:{
          fontSize:14
      },
      font12:{
          fontSize:12
      },
      font10:{
          fontSize:10
      }
  };

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            top: false,
            left: false,
            bottom: false,
            right: false
        };
    }
    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
    };

    render(){
        const { classes,settings } = this.props;
        const metadata = this.props.metadata.header;
        const profile_Details = this.props.metadata.body_conatiner.profile_details;
        const picURL = profile_Details.pic;
        
        return(
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Hidden only={['sm','xs']}>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <Pic picURL={picURL} />
                            </IconButton>
                        </Hidden>
                        <Hidden only={['md','lg']}>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            <div className="text-left">{this.props.settings.website_heading}</div>
                        </Typography>
                        <Hidden only={['sm','xs']}>
                            {metadata.map((menu,key) => (menu.status?<Button key={key} color="inherit">{menu.name}</Button>:null))}    
                        </Hidden>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.left} onClick={this.toggleDrawer('left', false)}>
                    <IconButton tabIndex={0} className={classes.menuButton + " sidebar-closebtn"} color="inherit" onClick={this.toggleDrawer('left', false)}>
                        <CloseIcon />
                    </IconButton>
                    <Typography className={classes.profile_Details} variant="div">
                        <IconButton color="inherit" aria-label="Profile pic">
                            <Pic picURL={picURL}/>
                        </IconButton>
                        <List>
                            <ListItem className={"paddingLR0 " + classes.font14}>{profile_Details.name}</ListItem>
                            <ListItem className={"padding0 " + classes.font12}>{profile_Details.profile_title}</ListItem>
                            <ListItem className={"paddingLR0 " + classes.font10}>{profile_Details.email}</ListItem>
                        </List>
                    </Typography>
                    <Divider />
                    <List className={classes.list}>
                        {metadata.map((menu,key) => (menu.status?<ListItem button key={key} color="inherit">{menu.name}</ListItem >:null))}
                    </List>
                </Drawer>
            </div>
        )
    }
}
Header.propTypes = {
    classes: PropTypes.object.isRequired,
    metadata:PropTypes.object.isRequired,
    settings:PropTypes.object.isRequired
  };
export default withStyles(styles)(Header);
