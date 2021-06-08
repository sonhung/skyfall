import React from 'react'
import css from 'styled-jsx/css'

const CropDistribution = ({distribution}) => {
  return (
    <div className="distribution">
      <div className="distribution-6">
        <div className="distribution-5">
          <div className="distribution-4">
            <div className="distribution-3">
              <div className="distribution-2">
                <div className="distribution-1">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default CropDistribution;

const styles = css`
  .distribution {
    width: 149px;
    height: 9px;
  }
  .distribution-6 {
    width: 100%;
    height: 9px;
    background: #E7E8FF;
    border-radius: 3px;
  }
  .distribution-5 {
    width: 85%;
    height: 9px;
    background: #3454FD;
    border-radius: 3px;
  }
  .distribution-4 {
    width: 80%;
    height: 9px;
    background: #34CE43;
    border-radius: 3px;
  }
  .distribution-3 {
    width: 80%;
    height: 9px;
    background: #FFDD63;
    border-radius: 3px;
  }
  .distribution-2 {
    width: 80%;
    height: 9px;
    background: #FFA36F;
    border-radius: 3px;
  }
  .distribution-1 {
    width: 70%;
    height: 9px;
    background: #FD3434;
    border-radius: 3px;
  }
`