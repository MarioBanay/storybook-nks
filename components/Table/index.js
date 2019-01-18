import React from 'react';
import classes from './index.css';
import Button from '../RoundIconButton/index';

export default class Table extends React.Component {
  render() {
    let tableHeader = this.props.tableHeader.map((item, key) =>
      <th key={key}>{item.name}</th>
    );

    let tableData = this.props.tableData.map((data, index) =>
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{data.image}</td>
        <td>{data.name}</td>
        <td>{data.button}</td>
      </tr>

    );

    return (
      <table className={classes.SimpleTable}>
        <tbody>
          <tr>
            {tableHeader}
          </tr>
          {tableData}
        </tbody>
      </table>
    );
  }
}