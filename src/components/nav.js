import React from 'react'
import amlogo from "../img/amlogocanv.png"
import ToggleMenu from "./togglemenu"
import Menu from "./menu"
import discord from "../img/discord.png"
import facebook from "../img/facebook.jpg"

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            subVis: false  
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.hoverMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({visible: !this.state.visible})
    }
    hoverMenu() {
        this.setState({visible: !this.state.visible})
    }

    render() {
      return (
        <>
          <section class="">
        {/* <img class="w-1/4 flex " src={amlogo} alt="The Aftermath Logo"></img> */}
        <nav>
            <div class="-mb-px flex space-between justify-center">
            <img class="w-1/4 flex " src={amlogo} alt="The Aftermath Logo"></img>
            <button><a class="rounded-lg shadow-lg bg-gray-600 p-3 antialiased" href="index.html">Home</a></button>
            <button><a class="rounded-lg shadow-lg bg-gray-600 p-3 antialiased" href="Schedule.html">Schedule</a></button>
            <button><a class="rounded-lg shadow-lg bg-gray-600 p-3 antialiased" href="Explore.html">Explore</a></button>
            <button onHover={this.toggleMenu}><a class="rounded-lg shadow-lg bg-gray-600 p-3 antialiased" href="#">New Players</a></button>
                <div class="dropdown-content">
                    <a class={this.state.visible} href="Packing.html">Packing</a>
                    <a class="hidden" href="Rulebook.html">Rulebook</a>
                    <a class="hidden" href="Directions.html">Directions</a>
                    
                </div>
                </div>
                </nav>


<a href='https://www.facebook.com/groups/solaraftermathgrp/'><img class="SMIcon2"src={facebook} alt="Facebook Link"></img></a>
<a href='https://discordapp.com/invite/GXFDjvX'><img class="SMIcon" src={discord} alt="Discord Link"></img></a>

</section>
        </>
      );
    }
  }

  export default Nav
