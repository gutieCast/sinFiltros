import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Contacto } from './Contacto'
import { Privacidad } from './Privacidad'
import { MediaKit } from './MediaKit'
import { Donaciones } from './Donaciones'
import { SocialPartners } from './SocialPartners'


const Options = () => {
    return (
        <Switch>
            <Route path='/options/contacto' component={Contacto} />
            <Route path='/options/privacidad' component={Privacidad} />
            <Route path='/options/media-kit' component={MediaKit} />
            <Route path='/options/donaciones' component={Donaciones} />
            <Route path='/options/social-partners' component={SocialPartners} />
        </Switch>
    )
}

export { Options }
