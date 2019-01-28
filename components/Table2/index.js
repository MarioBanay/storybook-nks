import React from 'react';
import classes from './index.css';

export default class Table2 extends React.Component {

  deleteFavorite = (id) => {
    this.props.clickedOnFavorites(id);
}

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
        {this.props.quantity ? null : <td><input type="text" value={data.quantity} onChange={this.props.onChange}></input></td>} 
        <td><div className={classes.Button} onClick={() => this.deleteFavorite(data.id)}>{data.button}</div></td>
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