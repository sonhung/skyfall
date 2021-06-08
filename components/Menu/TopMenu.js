import React from 'react'
import css from 'styled-jsx/css'
import Logo from '../../assets/images/logo.png'
import CountryDropdown from './CountryDropdown'
import RegionDropdown from './RegionDropdown'

const TopMenu = () => {
  return (
    <div className="top-menu">
      <img src={Logo} className="logo" />
      <div className="text">
        Data for{` `}
        <span className="year">2018</span>
      </div>
      <div className="top-drop-donwn">
        <CountryDropdown />
        <RegionDropdown />
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default TopMenu;

const styles = css`
  .top-menu {
    padding: 28px;
    background: #F4F5FE;
    border-radius: 0px 0px 35px 35px;
    height: 176px;
  }
  .logo {
    height: 24px;
  }
  .text {
    font-size: 20px;
    margin-top: 24px;
    line-height: 29px;
    color: #191A1A;
  }
  .year {
    color: #359D37;
    font-weight: 700;
  }
  .top-drop-donwn {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
`