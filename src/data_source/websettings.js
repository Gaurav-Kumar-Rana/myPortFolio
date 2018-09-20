const defaultWebSettings = {
    website_header:{
        heading:"Portfolio",
        menuicon:"asset/images/icons/menuicon.svg",
        Appbar:{
            position:"fixed",
            color:"default"
        },
        Drawer:{
            open:true,
            variant:"persistent", 
            anchor:"left"
        }
    },
    website_body:{
        action_btns:[
            {name:"Action",status:true,type:"primary", variant:"contained"},
            {name:"Link",status:true,type:"primary", variant:"outlined"}
        ]
    },
    wbsite_footer:{
        title:"Folllow on",
        sections:["Social","Community","Email","Blog","Professional"],
        copyright:["©"]
    }
};

export default defaultWebSettings;