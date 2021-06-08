import React from 'react'
import { Menu, Dropdown } from 'antd';
import css from 'styled-jsx/css'
import DownArrow from '../../assets/images/down-arrow.svg';

const CountryDropdown = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a >Albania</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <div className="sky-dropdown" onClick={e => e.preventDefault()}>
        in Albania
        <img src={DownArrow} className="sky-image" />
        <style jsx>{styles}</style>
      </div>
    </Dropdown>
  )
}

export default CountryDropdown;


const styles = css`
  .sky-dropdown {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #7D7E8A;
    cursor: pointer;
  }
  .sky-image {
    margin-left: 18px;
  }
`
