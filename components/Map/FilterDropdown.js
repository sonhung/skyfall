import React, { useState } from 'react'
import { Menu, Dropdown } from 'antd';
import css from 'styled-jsx/css'
import DownArrow from '../../assets/images/down-arrow.svg';

const FILTER = [
  {
    title: 'All Fields',
    color: 'rgb(241, 58, 20)'
  },
  {
    title: 'Rice',
    color: 'rgb(4, 123, 171)'
  },
  {
    title: 'Peas',
    color: 'rgb(93, 197, 90)'
  },
  {
    title: 'Apple',
    color: 'rgb(198, 163, 255)'
  },
  {
    title: 'Grapes',
    color: 'rgb(235, 108, 44)'
  },
  {
    title: 'Potatoes',
    color: 'rgb(193, 21, 202)'
  },
  {
    title: 'Vegetables',
    color: 'rgb(153, 170, 105)'
  },
  {
    title: 'Oilseed Crop',
    color: 'rgb(235, 108, 44)'
  }
]

const FilterDropdown = () => {
  const [filter, setfilter] = useState(0);

  const onClick = (index) => {
    setfilter(index)
  };
  const menu = (
    <Menu
      style={{
        background: '#343535',
        width: '350px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        padding: '15px',
      }}
      theme="dark"
    >
      {FILTER.map((item, index) => (
        <div
          onClick={() => onClick(index)}
          style={{
            color: item.color,
            fontWeight: 500,
            cursor: 'pointer',
            fontSize: '16px',
            padding: '5px',
          }}
          className="filter-item"
        >
          {item.title}
        </div>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <div className="sky-dropdown" onClick={e => e.preventDefault()}>
        {FILTER[filter]?.title}
        <img src={DownArrow} className="sky-image" />
        <style jsx>{styles}</style>
      </div>
    </Dropdown>
  )
}

export default FilterDropdown;


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
  .item {
    font-weight: 500;
    cursor: pointer;
    font-size: 16px;
  }
`
