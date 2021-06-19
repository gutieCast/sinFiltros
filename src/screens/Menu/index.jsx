import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import { Home } from "../Home";
import { AboutUs } from "./AboutUs"
import { Education } from "./Education"
import { Parents } from "./Parents"
import { Multimedia } from "./Multimedia"
import { Colaboration } from "./Colaboration"


const Menu = () => {
    return (
        <Switch>
            <Route path='/menu/acerca-de' component={AboutUs} />
            <Route path='/menu/educadores' component={Education} />
            <Route path='/menu/padres' component={Parents} />
            <Route path='/menu/multimedia' component={Multimedia} />
            <Route path='/menu/colabora' component={Colaboration} />
        </Switch>
    )
}

export { Menu }
