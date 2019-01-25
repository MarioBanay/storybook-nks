import React from 'react';
import classes from './index.css';

export default class Table extends React.Component {
  render() {
    let tableHeader = this.props.tableHeader.map((item, key) =>
      <th key={key}>{item.name}</th>
    );

    let tableData = this.props.tableData.map((data, index) =>
      <tr key={index}>
        <td>{index + 1}</td>
        <td><img className={classes.beerImage} src={data.image} /></td>
        <td>{data.name}</td>
        <td>{data.description}</td>
        <td><div className={classes.Button}>{data.button}</div></td>
      </tr>

    );

    return (
      <table>
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