import React from 'react'

import HomeProvider from './HomeProvider'
import HomeView from './HomeView'

function Home(props:any) {
  return (
    <HomeProvider {...props}>
        <HomeView {...props}/>
    </HomeProvider>
  )
}

export default Home