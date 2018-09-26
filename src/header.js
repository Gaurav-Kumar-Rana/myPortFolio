import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Material Components
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
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
//Custom Components
import {Pic} from './utility';

const styles = theme => ({
    root: {
        //flexGrow: 1,
        //display:"none"
    },
    drawer:{
        width:245
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
        width: "15vw",
        minWidth: "220px",
        boxSizing: "border-box"
    },
    font24:{
        fontSize:24,
        color: "#008073",
        fontWeight: "normal",
        fontFamily: "cursive"
    },
    font12:{
        fontSize:16,
        color:"#795548"
    },
    font10:{
        fontSize:10
    }
});

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            top: false,
            left: isWidthUp('md', this.props.width) ? this.props.settings.website_header.Drawer.open : false,
            bottom: false,
            right: false,
            picURL: this.props.metadata.body_conatiner.profile_details.pic
        };
    }
    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
    };
    togglePic = (pic) => () =>{
        this.setState({
            picURL: pic,
          });
    }

    render(){
        const { classes,settings } = this.props;
        const metadata = this.props.metadata.header;
        const profile_Details = this.props.metadata.body_conatiner.profile_details;
        const picURL = profile_Details.pic;
        const headSetting = settings.website_header;
        const menuicon = headSetting.menuicon;
        return(
            <div className={this.state.left ? "left-menu-opened ":"left-menu-closed " + classes.root} >
                <AppBar position={headSetting.Appbar.position} color={headSetting.Appbar.color}>
                    <Toolbar>
                        {/* <Hidden only={['sm','xs']}>
                            <IconButton 
                                className={classes.menuButton} 
                                color="inherit" aria-label="Menu" 
                                onClick={this.toggleDrawer(headSetting.Drawer.anchor, true)}
                                onMouseEnter={this.togglePic(menuicon)}
                                onMouseLeave={this.togglePic(picURL)}
                                >
                                <Pic picURL={this.state.picURL}/>
                            </IconButton>
                        </Hidden> */}
                         <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(headSetting.Drawer.anchor, true)}>
                                <MenuIcon />
                        </IconButton>
                        {/* <Hidden only={['md','lg']}>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(headSetting.Drawer.anchor, true)}>
                                <MenuIcon />
                            </IconButton>
                        </Hidden> */}
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            <div className="text-left">{headSetting.heading}</div>
                        </Typography>
                        <Hidden only={['sm','xs']}>
                            {metadata.map((menu,key) => (menu.status?<Button key={key} color="inherit">{menu.name}</Button>:null))}    
                        </Hidden>
                    </Toolbar>
                </AppBar>
                <Drawer className={classes.drawer}
                    open={this.state.left} 
                    // onClick={this.toggleDrawer(headSetting.Drawer.anchor, false)} 
                    variant={headSetting.Drawer.variant} 
                    anchor={headSetting.Drawer.anchor}>
                    {/* {
                        headSetting.Drawer.variant !== "permanent" ?
                        <IconButton tabIndex={0} className={classes.menuButton + " sidebar-closebtn"} color="inherit" onClick={this.toggleDrawer(headSetting.Drawer.anchor, false)}>
                            <CloseIcon />
                        </IconButton> 
                        : 
                        <Typography variant="headline" color="inherit">
                            <div className="text-left marginLR16">{headSetting.heading}</div>
                        </Typography>
                    } */}
                    <IconButton tabIndex={0} className={classes.menuButton + " sidebar-closebtn"} color="inherit" onClick={this.toggleDrawer(headSetting.Drawer.anchor, false)}>
                        <CloseIcon />
                    </IconButton>
                    <Typography className={classes.profile_Details} component="div">
                        {/* <IconButton color="inherit" aria-label="Profile pic">
                            <Pic picURL={picURL}/>
                        </IconButton> */}
                        <List>
                            <ListItem className={"paddingLR0 " + classes.font24}>{profile_Details.name}</ListItem>
                            <ListItem className={"padding0 " + classes.font12}>{profile_Details.profile_title}</ListItem>
                            {/* <ListItem className={"paddingLR0 " + classes.font10}>{profile_Details.email}</ListItem> */}
                        </List>
                    </Typography>
                    <Divider />
                    <List className={classes.list} className="menuList">
                        {metadata.map((menu,key) => (
                            menu.status ?
                            <ListItem button key={key} color="inherit"><i className={"menu-icon "+ menu.icon} style={{"color": menu.color}}></i>{menu.name}</ListItem >
                            :
                            null))
                        }
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
export default withWidth()(withStyles(styles)(Header));
