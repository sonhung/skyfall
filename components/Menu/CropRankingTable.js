import React from 'react'
import css from 'styled-jsx/css'
import { Table, Tag } from 'antd'

const RANKING_COLOR = {
  1: 'red',
  2: 'orange',
  3: 'gold',
  4: 'green',
  5: 'blue',
  6: 'gray',
}

const dataSource = [
  {
    key: '1',
    index: '1',
    crop: 'Maize',
    size: '91.8k',
    leader: 'Southern Albania',
  },
  {
    key: '2',
    index: '2',
    crop: 'Maize',
    size: '91.8k',
    leader: 'Southern Albania',
  },{
    key: '3',
    index: '3',
    crop: 'Maize',
    size: '91.8k',
    leader: 'Southern Albania',
  },{
    key: '4',
    index: '4',
    crop: 'Maize',
    size: '91.8k',
    leader: 'Southern Albania',
  },{
    key: '5',
    index: '5',
    crop: 'Maize',
    size: '91.8k',
    leader: 'Southern Albania',
  }
];

const columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index',
    render: index => (
      <span>
        <Tag key={index} className="table-ant-tag" color={RANKING_COLOR[index]}>
          {index}
        </Tag>
      </span>
    ),
  },
  {
    title: 'Crop',
    dataIndex: 'crop',
    key: 'crop',
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: 'Leader',
    dataIndex: 'leader',
    key: 'leader',
  },
];

const CropRanking = () => {
  return (
    <div className="table">
      <div className="table-title">Crop ranking in regions</div>
      <Table dataSource={dataSource} columns={columns} pagination={false}  className="data-table" />
      <style jsx>{styles}</style>
    </div>
  )
}

export default CropRanking

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
