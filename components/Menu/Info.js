import React from 'react'
import css from 'styled-jsx/css'
import RegionRatingTable from './RegionRatingTable'
import CropRanking from './CropRankingTable'
import PopularCropTable from './PopularCropsTable'

const Infomation = () => {
  return (
    <div className="info">
      {/* top info */}
      <div className="between">
        <div>
          <div className="between-label">Total size of fields, ha</div>
          <div className="between-text">170.2K</div>
        </div>
        <div>
          <div className="between-label">Average field size</div>
          <div className="between-text">1.2 ha</div>
        </div>
      </div>
      {/* region rating */}
      <RegionRatingTable />
      <CropRanking />
      <PopularCropTable />
      <style jsx>{styles}</style>
    </div>
  )
}

export default Infomation

const styles = css`
  .info {
    height: calc(100vh - 176px);
    overflow: auto;
    padding: 25px;
  }
  .between {
    display: flex;
    justify-content: space-between;
  }
  .between-label {
    font-size: 14px;
    color: #7D7E8A;
    font-weight: 500;
  }
  .between-text {
    font-size: 24px;
    color: #191A1A;
    font-weight: 600;
  }
`
