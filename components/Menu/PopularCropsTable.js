import React from 'react'
import css from 'styled-jsx/css'
import { Table } from 'antd'
import CropDistribution from './CropDistribution'

const dataSource = [
  {
    key: '1',
    index: '1',
    region: 'Southern Abania',
    distribution: [5,4,3,2,1],
  },
  {
    key: '1',
    index: '2',
    region: 'Northen Abania',
    distribution: [5,4,3,2,1],
  },
  {
    key: '1',
    index: '3',
    region: 'Central Abania',
    distribution: [5,4,3,2,1]
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
    title: 'Crop distribution',
    dataIndex: 'distribution',
    key: 'distribution',
    render: distribution => (
      <CropDistribution distribution={distribution} />
    ),
  }
];

const PopularCropTable = () => {
  return (
    <div className="table">
      <div className="table-title">Popular crops by region</div>
      <Table dataSource={dataSource} columns={columns} pagination={false}  className="data-table" />
      <style jsx>{styles}</style>
    </div>
  )
}

export default PopularCropTable

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
