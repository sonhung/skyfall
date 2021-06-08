import React from 'react'
import css from 'styled-jsx/css'
import { Table } from 'antd'

const dataSource = [
  {
    key: '1',
    index: '1',
    region: 'Southern Abania',
    size: '91.8k',
    number: '61k',
  },
  {
    key: '1',
    index: '2',
    region: 'Northen Abania',
    size: '23.8k',
    number: '61k',
  },
  {
    key: '1',
    index: '3',
    region: 'Central Abania',
    size: '72.8k',
    number: '82k',
  },
];

const columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
  },
];

const RegionRating = () => {
  return (
    <div className="table">
      <div className="table-title">Region rating</div>
      <Table dataSource={dataSource} columns={columns} pagination={false}  className="data-table" />
      <style jsx>{styles}</style>
    </div>
  )
}

export default RegionRating

const styles = css`
  .table {
    margin-top: 30px;
  }
  .table-title {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #316B8A;
    margin-bottom: 19px;
  }
`
