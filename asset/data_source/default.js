// const defaultProfile = {
//     header:[
//         {name:"About",status:true,icon:"icon-about", color:"#008073"},
//         {name:"Experiance",status:true,icon:"icon-experiance", color:"#00bcd4"},
//         {name:"Projects",status:true,icon:"icon-projects",color:"#3f51b5"},
//         {name:"Skill",status:true,icon:"icon-skill",color:"#9c27b0"},
//         {name:"Awards",status:true,icon:"icon-awards",color:"#F44336"},
//         {name:"Education",status:true,icon:"icon-education",color:"#ff9800"},
//         {name:"Contact",status:true,icon:"icon-contact",color:"#795548"},
//         {name:"Resume",status:true,icon:"icon-resume",color:"#424242"}
//     ],
//     body_conatiner:{
//         profile_details:{
//             welcomemsg:"",
//             name:"Gaurav Kumar Rana",
//             pic:"asset/images/pic.png",
//             profile_title:"Front End Developer",
//             email:"gauravforcs@gmail.com",
//             profile_tagline:[
//                 {tagline:"I am Front End / UI / UX Developer."},
//                 {tagline:"I'm passionate about making things that make an impact."},
//                 {tagline:"I build awesome things for Web and Mobile."}
//             ],
//             About:{
//                 status:true,
//                 heading:{
//                     text:"About",
//                 }
//             }   
//         }
//     },
//     footer:{
//         social:[
//             {name:"Facebook",status:true,url:"https://www.facebook.com/gaurav.evergreen"},
//             {name:"Instagram",status:true,url:"https://www.instagram.com/rana.gaurav17/"},
//             {name:"Twitter",status:true,url:"#"},
//             {name:"Google Plus",status:true,url:"https://plus.google.com/+gauravkumarRanaranagaurav17"}
//         ],
//         community:[
//             {name:"Hacker Rank",status:true,url:"https://www.hackerrank.com/windo_gaurav?hr_r=1"},
//             {name:"Git Hub",status:true,url:"https://github.com/Gaurav-Kumar-Rana"},
//             {name:"Stackoverflow",status:true,url:"#"}
//         ],
//         email:[
//             {name:"Gmail",status:true,url:"mailto:rana.gaurav17@gmail.com"},
//             {name:"Gartner",status:true,url:"mailto:gaurav.rana@gartner.com"}
//         ],
//         blog:[],
//         professional:[
//             {name:"Linkedin",status:true,url:"https://www.linkedin.com/in/gaurav-rana-b841457b/"},
//             {name:"Skype",status:true,url:"https://join.skype.com/invite/L8fl5B8VRbx7"}
//         ]
//     }
// };

const defaultProfile = {
    header:[
        {name:"Menu 1",status:false,icon:"icon-about"},
        {name:"Menu 2",status:false,icon:"icon-experiance"},
        {name:"Menu 3",status:false,icon:"icon-projects"},
        {name:"Menu 4",status:false,icon:"icon-skill"},
        {name:"Menu 5",status:false,icon:"icon-award"},
        {name:"Menu 6",status:true ,icon:"icon-education",color:"#008073"}
    ],
    body_conatiner:{
        profile_details:{
            name:"Bob",
            pic:"asset/images/pic.png",
            profile_title:"XXXXX-XXXXX",
            email:"xxxxxxxxxx@xxxxxxxxxx.xxx",
            profile_tagline:[
                {tagline:"Message 1"},
                {tagline:"Message 2"},
                {tagline:"Message 3"}
            ]
        }
    },
    footer:{
        social:[
            {name:"Facebook",status:false,url:"https://www.facebook.com/gaurav.evergreen"},
            {name:"Instagram",status:false,url:"https://www.instagram.com/rana.gaurav17/"},
            {name:"Twitter",status:true,url:"#"},
            {name:"Google Plus",status:false,url:"https://plus.google.com/+gauravkumarRanaranagaurav17"}
        ],
        community:[
            {name:"Hacker Rank",status:false,url:"https://www.hackerrank.com/windo_gaurav?hr_r=1"},
            {name:"Git Hub",status:true,url:"https://github.com/Gaurav-Kumar-Rana"},
            {name:"Stackoverflow",status:false,url:"#"}
        ],
        email:[
            {name:"Gmail",status:false,url:"mailto:rana.gaurav17@gmail.com"},
            {name:"Gartner",status:true,url:"mailto:gaurav.rana@gartner.com"}
        ],
        blog:[],
        professional:[
            {name:"Linkedin",status:true,url:"https://www.linkedin.com/in/gaurav-rana-b841457b/"},
            {name:"Skype",status:false,url:"https://join.skype.com/invite/L8fl5B8VRbx7"}
        ]
    }
};

export default defaultProfile;