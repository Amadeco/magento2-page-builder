/*eslint-disable */
define(["underscore", "Magento_PageBuilder/js/utils/object"], function (_underscore, _object) {
  /**
   * Copyright © Magento, Inc. All rights reserved.
   * See COPYING.txt for license details.
   */

  /**
   * @api
   */
  var InlineBlock =
  /*#__PURE__*/
  function () {
    "use strict";

    function InlineBlock() {}

    var _proto = InlineBlock.prototype;

    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    _proto.fromDom = function fromDom(value) {
      return !(value === "none");
    }
    /**
     * Convert value to knockout format, if buttons are displayed they should be inline block
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string}
     */
    ;

    _proto.toDom = function toDom(name, data) {
      var value = (0, _object.get)(data, name);

      if (!_underscore.isUndefined(value) && value === false) {
        return "none";
      }

      return "inline-block";
    };

    return InlineBlock;
  }();

  return InlineBlock;
});
//# sourceMappingURL=inline-block.js.map