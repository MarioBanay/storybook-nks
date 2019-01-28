import React from 'react';
import classes from './index.css';

export default class NavigationMenu extends React.Component {
    render() {
        let tableItems = this.props.data.map((item, index) =>
            <tr key={index} className={classes.tableRow}>
                <td className={classes.tableData}>
                    {item.link}
                </td>
            </tr>
        );

        return (
            <div className={classes.NavigationMenu}>
                <table className={classes.Table}>
                    <tbody>
                        {tableItems}
                    </tbody>
                </table>
            </div>
        );
    }
}