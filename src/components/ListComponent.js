import React, { Component } from 'react';
import autoBind from 'react-autobind';

import dataService from '../services/dataService';

class ListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        autoBind(this);
    }

    componentDidMount() {
        this.getItemsList();
    }

    async getItemsList() {
        let items = await dataService.getItemsList();

        this.setState({
            items
        });
    }

    anyItems() {
        let items = this.state.items;

        return items && items.length;
    }

    render() {
        if (!this.anyItems) return (
            <div>No items.</div>
        );

        return (
            <div>

            </div>
        );
    }
}

export default ListComponent;

