import React from 'react'
import {Link} from "react-router-dom";
import '../styling/header.css';
import { motion } from "framer-motion"
import Trent from '../images/trent.gif'
import hammer from '../images/hammer.png'
import mage from '../images/mage2.gif'





function Nav() {
    return (
        
        <div className="NavSize">

        <nav className="main-nav">

    
            <ul>
                <Link to="/">Home</Link>
                <Link to="/admin/manage-items"><img src={mage} alt="mage"className="mage"></img>Manage Items</Link>
                <Link to="/create-items">Create Items <img src={hammer} alt="hammer"></img> </Link>

            </ul>
            <motion.div  >
                <motion.div
            
            drag
            
             >
                <img src={Trent} className="trent "alt="trent" />
                </motion.div>    </motion.div>  
    
        </nav>
        </div>
        
    )
}

export default Nav
