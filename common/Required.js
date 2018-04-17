import React, { Component } from 'react';
import { canUseDOM } from 'exenv';

export default class Required extends Component {

    componentWillMount() {
        if (canUseDOM) {
            const Choices = require('choices.js');

            const textRemove = new Choices(document.getElementById('choices-text-remove-button'), {
                delimiter: ',',
                editItems: true,
                maxItemCount: 5,
                removeItemButton: true,
            });

            const singleNoSearch = new Choices('#choices-single-no-search', {
                searchEnabled: false,
                removeItemButton: true,
                choices: [
                    { value: 'One', label: 'Label One' },
                    { value: 'Two', label: 'Label Two', disabled: true },
                    { value: 'Three', label: 'Label Three' },
                ],
            }).setChoices([
                { value: 'Four', label: 'Label Four', disabled: true },
                { value: 'Five', label: 'Label Five' },
                { value: 'Six', label: 'Label Six', selected: true },
            ], 'value', 'label', false);
        }
    }

    render() {
        return (
            <div>
                <p>Choices module loaded when DOM is availble using `canUseDom` and `require()`.</p>

                <label htmlFor="choices-text-remove-button">Limited to 5 values with remove button</label>
                <input className="form-control" id="choices-text-remove-button" type="text" defaultValue="preset-1,preset-2" placeholder="Enter something" />

                <label htmlFor="choices-single-no-search">Options added via config with no search</label>
                <select className="form-control" name="choices-single-no-search" id="choices-single-no-search">
                    <option value="0">Zero</option>
                </select>
            </div>
        )
    }
}
