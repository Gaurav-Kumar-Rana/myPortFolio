import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Material Components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const style = theme => ({
    root:{
        flexGrow: 1,
        padding: "0 16px",
        textAlign: "center",
        marginTop:64,
        transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"
    },
    headertag:{
        paddingTop:"2rem",
        lineHeight: "4.5rem"
    },
    tagline:{
        margin: 0,
        lineHeight: 1.7,
        fontSize: "1.3125rem"
    },
    actionbtn:{
        margin:8
    }
})
class BodyContainer extends React.Component {
    render(){
        const {classes, metadata, settings} = this.props;
        const profile = metadata.body_conatiner.profile_details;
        const tags = profile.profile_tagline;
        const profileName = profile.name;
        const bodySettings = settings.website_body;
        const btns = bodySettings.action_btns;
        return(
            <main className={classes.root}>
                <Typography variant="display3" className={classes.headertag}>
                    {profileName}
                </Typography>
                <Typography component="div">
                    {tags.map((tag,key) => (<p key={key} className={classes.tagline}>{tag.tagline}</p>))}
                    {btns.map((btn,key)=>(btn.status?<Button key={key} variant={btn.variant} color={btn.type} className={classes.actionbtn}>{btn.name}</Button>:null))}
                </Typography>
                <Typography component="div">
                    sdfs
                </Typography>
            </main>
        )
    }
};
BodyContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    metadata: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired
};
export default withStyles(style)(BodyContainer);