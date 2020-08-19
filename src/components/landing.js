import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Nav from './nav'
const Landing = () => {
        return (
            <>
                <div class="container">
                <Nav />
      <section class="bannerarea">
        <img class="banner" src="img/chronicle-1.png" alt="Aftermath Banner"></img>
        </section>
      
      <section class="content">
              <img src="/img/wolves.jpg" class='articleImg' alt="Placeholder image"></img>
            
                <h2>Welcome to Solar: Aftermath</h2>
                
                <p>Aftermath is a live action role play (larp) game and is part of the Southern Organization of Live Action Reenactments. Located in Hattiesburg, MS. We hold monthly events that last for an entire weekend. View our <a href="Schedule.html">Schedule</a> to see when the next event is. Prices are $40 for a full event and $20 for a half event.  </p>
                  <br/>
                  <h2><strong>First time players will receive their first event for free!</strong></h2>
                  <br/>
                <section>
                <h2>Aftermath is currently suspending events until further notice due to COVID-19. Please check us out on <a href="https://www.facebook.com/groups/solaraftermathgrp">Facebook</a> to keep up with any updates on resuming events, and take part in some of our at home adventures and contests! Thank you!</h2>
              </section>


            <section class="copy">
              <br/>
              <h2 class='articleImg'>Latest Chronicle Update
                </h2>
                <br/>
              <p class='articleImg'>I hope these words find you well. I thought I would get used to 'em, I did. The screams. This place seems wrong somehow. Moreso than the broken world already made it. The city itself is the badness that is suckin' the life from us. I rather the rippas' any day over some of the new screams I have heard as of late. Warlords and monsters crash at our gates and are found wanting. Yet the screams of the innocent being burned alive within our walls, these shake an old man to his bone. Noble, strong men and women wander, lost to the real, crawling, seetheing intent bubbling below. And where do we put our hopes? In the Guilds that control us? Bloody handprints on the wall? The monsters in men's skin that people call <strong>heroes</strong>? I think not. Their deeds sway the sheep but not I, Mother. I have found him. The one who will deliver this city from itself. Only he can rip the infection of <strong>heroes</strong> from the near dead corpse of this city. While the people cheer the heroes, they dig their own graves. Oh happy day, Mother. I come to meet you soon.<br/> <br/>I am not fooled. ~Yo'Teh Renart.</p>
            </section>
            <img src='img/duel.png' alt='Two Players Fighting with Larp Safe Weapons'></img>
          </section>
      </div>
            </>
        )
    }

export default Landing