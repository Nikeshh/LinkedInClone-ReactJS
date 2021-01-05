import React from 'react';
import { Avatar } from "@material-ui/core";
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
             <div className="sidebar__top">
                 <img src="https://media-exp1.licdn.com/dms/image/C5616AQHO5XADWuTFHg/profile-displaybackgroundimage-shrink_350_1400/0/1607784254806?e=1615420800&v=beta&t=KCaAzetH1SdPGKRyEmTwwxH2mrSRPbpuE0ljeByz2YU" alt="" />
                 <Avatar className="sidebar__avatar" />
                 <h2>Nikeshh V</h2>
                 <h4>nikeshhbaskaran01@gmail.com</h4>
             </div>

             <div className="sidebar__stats">
                 <div className="sidebar__stat">
                     <p>Who viewed you</p>
                     <p className="sidebar__statNumber">2,543</p>
                 </div>
                 <div className="sidebar__stat">
                     <p>Views on post</p>
                     <p className="sidebar__statNumber">2,448</p>
                 </div>
             </div>

             <div className="sidebar__bottom">
                 <p>Recent</p>
                 {recentItem("reactjs")}
                 {recentItem("programming")}
                 {recentItem("softwareengineering")}
                 {recentItem("design")}
                 {recentItem("developer")}
             </div>
        </div>
    )
}

export default Sidebar;
