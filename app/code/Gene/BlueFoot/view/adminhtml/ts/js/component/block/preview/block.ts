/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import _, {Dictionary} from "underscore";
import ko from "knockout";
import Block from "../block";

interface PreviewData {
    [key: string]: KnockoutObservable<any>;
}

export default class PreviewBlock {
    parent: Block;
    config: any;
    data: PreviewData = {};

    /**
     * PreviewBlock constructor
     *
     * @param {Block} parent
     * @param {Object} config
     */
    constructor(parent: Block, config: object) {
        this.parent = parent;
        this.config = config;

        // Subscribe to this blocks data in the store
        this.parent.stage.store.subscribe(
            (data: Dictionary<{}>) => {
                const missingFields = _.difference(this.config.fields_list, _.keys(data));
                missingFields.forEach((key) => {
                    this.updateDataValue(key, '');
                });
                _.forEach(data, (value, key) => {
                    this.updateDataValue(key, value);
                });
            },
            this.parent.id
        );
    }

    /**
     * Retrieve the template for the preview block
     *
     * @returns {string}
     */
    get template(): string {
        if (this.config.preview_template) {
            return this.config.preview_template;
        }

        return '';
    }

    /**
     * Update the data value of a part of our internal Knockout data store
     *
     * @param {string} key
     * @param value
     */
    private updateDataValue(key: string, value: any) {
        if (typeof this.data[key] !== 'undefined' && ko.isObservable(this.data[key])) {
            this.data[key](value);
        } else {
            this.data[key] = ko.observable(value);
        }
    }
}