/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import ContentTypeInterface from "./content-type.d";

export default interface ContentTypeCollectionInterface extends ContentTypeCollectionInterface {
    children: KnockoutObservableArray<any>,

    addChild(child: ContentTypeInterface, index?: number);

    setChildren(children: KnockoutObservableArray<ContentTypeInterface>);

    removeChild(child: any): void;
}