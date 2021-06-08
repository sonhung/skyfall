import React from 'react'
import MapComponent from '../components/Map';
import LeftMenu from  '../components/Menu';
import css from 'styled-jsx/css'

const Home = () => {
  return (
    <div className="home-page">
      <div className="menu">
        <LeftMenu />
      </div>
      <div className="map-box">
        <MapComponent />
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Home

const styles = css`
  .home-page {
    display: flex;
  }
  .menu {
    width: 393px;
  }
  .map-box {
    width: calc(100vh - 393px);
  }
`
