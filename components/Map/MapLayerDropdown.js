import React, { useState } from 'react'
import { Menu, Dropdown } from 'antd';
import css from 'styled-jsx/css'
import DownArrow from '../../assets/images/down-arrow.svg';

const LAYERS = {
  0: {
    title: 'Crops'
  },
  1: {
    title: 'Average size of fields'
  },
  2: {
    title: 'Number of fields'
  },
  3: {
    title: 'Fields score'
  }
}

const MapLayerDropdown = () => {
  const [layer, setLayer] = useState('0');

  const onClick = ({ key }) => {
    setLayer(key)
  };

  const menu = (
    <Menu onClick={onClick} style={{ background: '#343535'}} theme="dark">
      <Menu.Item key="0">
        <a>Crops</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a>Average size of fields</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a>Number of fields</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a>Fields score</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <div className="sky-dropdown" onClick={e => e.preventDefault()}>
        {LAYERS[layer]?.title}
        <img src={DownArrow} className="sky-image" />
        <style jsx>{styles}</style>
      </div>
    </Dropdown>
  )
}

export default MapLayerDropdown;


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
