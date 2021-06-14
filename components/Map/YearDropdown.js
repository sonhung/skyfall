import React, { useState } from 'react'
import { Menu, Dropdown } from 'antd';
import css from 'styled-jsx/css'
import DownArrow from '../../assets/images/down-arrow.svg';

const YEARS = {
  0: {
    title: '2020'
  },
  1: {
    title: '2019'
  },
  2: {
    title: '2018'
  },
  3: {
    title: '2017'
  }
}

const YearDropdown = () => {
  const [year, setYear] = useState('0');

  const onClick = ({ key }) => {
    setYear(key)
  };
  const menu = (
    <Menu onClick={onClick} style={{ background: '#343535'}} theme="dark">
      <Menu.Item key="0">
        <a className="">2020</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a>2019</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a>2018</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a>2017</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <div className="sky-dropdown" onClick={e => e.preventDefault()}>
        {YEARS[year]?.title}
        <img src={DownArrow} className="sky-image" />
        <style jsx>{styles}</style>
      </div>
    </Dropdown>
  )
}

export default YearDropdown;


const styles = css`
  .sky-dropdown {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    cursor: pointer;
  }
  .sky-image {
    margin-left: 18px;
  }
`
