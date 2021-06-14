import * as React from 'react'
import css from 'styled-jsx/css'
import MapLayerDropdown from './MapLayerDropdown'
import YearDropdown from './YearDropdown'
import FilterDropdown from './FilterDropdown'

function ControlPanel(props) {

  return (
    <div className="control-panel">
      <div className="box">
        <div className="label">Map layer</div>
        <MapLayerDropdown />
      </div>
      <div className="box box-border">
        <div className="label">Filter</div>
        <FilterDropdown />
      </div>
      <div className="box">
        <div className="label">Year</div>
        <YearDropdown />
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}

export default React.memo(ControlPanel);

const styles = css`
  .control-panel {
    min-width: 316px;
    max-width: 100%;
    height: 84px;
    background: #fff;
    position: fixed;
    top: 23px;
    display: flex;
    justify-content: space-between;
    background: #191A1A;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px 20px 0px;
  }
  .label {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #D2D1D1;
    margin-bottom: 6px;
  }
  .box {
    padding: 18px 20px;
  }
  .box-border {
    border-left: 1px solid #343535;
    border-right: 1px solid #343535;
  }
`
