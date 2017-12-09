import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';

// Now THEY AREW DYNAMICLY LOADED
// import ArtistDetail from './components/artists/ArtistDetail';
// import ArtistCreate from './components/artists/ArtistCreate';
// import ArtistEdit from './components/artists/ArtistEdit';

// this is to be able to split components
// into separated js files wor webpack
// that way buindle will be upstreaming more js and run faster

/**@code Splitting*/

const componentRoutes = {
  // breaking routes to object
  component: Home,
  path: '/',
  indexRoute: {component: ArtistMain},
  childRoutes: [
      {
        path:"artists/new",
        getComponent(location,cb){
            //cd will return component
            // import component first
            System.import('./components/artists/ArtistCreate')
            // cb takes error first
              .then(module=> cb(null,module.default))
        }
      },
      {
        path:"artists/:id",
        getComponent(location,cb){
            //cd will return component
            // import component first
            System.import('./components/artists/ArtistDetail')
            // cb takes error first
              .then(module=> cb(null,module.default))
        }
      },
      {
        path:"artists/:id/edit",
        getComponent(location,cb){
            //cd will return component
            // import component first
            System.import('./components/artists/ArtistEdit')
            // cb takes error first
              .then(module=> cb(null,module.default))
        }
      }

  ]
};

// we remove all routs

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes}/>
  );
};

export default Routes;
