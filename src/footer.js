import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import {FooterIcon} from './utility';

const style = {
    root:{
        flexGrow: 1,
        padding:16
    },
    sectionList:{
        width: 64,
        display: "inline-flex",
        paddingLeft:0
    }
};
class Footer extends React.Component {
    render(){
        const {classes,metadata,settings} = this.props;        
        const footer = settings.wbsite_footer;
        let index = 0;
        return(
            <div variant="div" className={classes.root}>
                <Typography variant="title">{footer.title}</Typography>
                {
                    footer.sections.map((sec,key) => (
                        <List key={key}>
                            <Typography variant="body2">{sec}</Typography>
                            {   metadata.footer[sec.toLocaleLowerCase()].length ?
                                metadata.footer[sec.toLocaleLowerCase()].map((sol) =>(
                                    <ListItem key={index++} className={classes.sectionList}>
                                        <FooterIcon type={sol.name.toLocaleLowerCase()} title={sol.name} url={sol.url}/>
                                    </ListItem>
                                )) : null
                            }
                        </List>
                    ))
                }
            </div>
        )
    }
}
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    metadata: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired
};
export default withStyles(style)(Footer);