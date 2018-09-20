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
        padding: "0",
        textAlign: "center",
        marginTop:50,
        transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
        backgroundImage:"url('/asset/images/slide1.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition:"center"
    },
    brief:{
        display: "table",
        width: "100%",
        height:"calc(100vh - 50px)",

    },
    briefchild:{
        display: "table-cell",
        verticalAlign:"middle",
        paddingBottom: 200
    },
    headertag:{
        paddingTop:"2rem",
        lineHeight: "4.5rem"
    },
    taglineconatiner:{
        
        [theme.breakpoints.down('sm')]: {
            width: "85%",
        },
        [theme.breakpoints.up('md')]: {
            width: "50%",
        },
        margin: "0px auto",
        background: "#f5f5f5cc",
        padding: "7px",
        borderRadius: "3px",
        backgroundImage: "url(/asset/images/bg.png)",
        boxShadow: "0px 1px 3px 0px #000"
    },
    tagline:{
        lineHeight: 1.7,
        fontSize: "1.3125rem",
        margin:4
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
                <Typography component="div" className={classes.brief}>
                    <div className={classes.briefchild}>
                        {/* <Typography variant="display3" className={classes.headertag}>
                        {false?profileName:null}
                        </Typography> */}
                        <p className={classes.taglineconatiner}>
                            {tags.map((tag,key) => (<p key={key} className={classes.tagline}>{tag.tagline}</p>))}
                            {btns.map((btn,key)=>(btn.status?<Button key={key} variant={btn.variant} color={btn.type} className={classes.actionbtn}>{btn.name}</Button>:null))}
                        </p>
                    </div>
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