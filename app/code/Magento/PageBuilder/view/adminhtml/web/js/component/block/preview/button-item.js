/*eslint-disable */
define(["mage/translate", "Magento_PageBuilder/js/component/block/preview/block"], function (_translate, _block) {
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var Button =
  /*#__PURE__*/
  function (_PreviewBlock) {
    _inheritsLoose(Button, _PreviewBlock);

    /**
     * Button constructor
     *
     * @param {Block} parent
     * @param {ConfigContentBlock} config
     */
    function Button(parent, config) {
      var _this;

      _this = _PreviewBlock.call(this, parent, config) || this;
      _this.buttonPlaceholder = (0, _translate)("Edit Button Text");
      return _this;
    }
    /**
     * After child render record element
     * returns {object}
     */


    var _proto = Button.prototype;

    _proto.childrenStyle = function childrenStyle() {
      return {
        display: "inline-block"
      };
    };
    /**
     * Focus out of the element
     */


    _proto.onFocusOut = function onFocusOut() {
      this.parent.parent.preview.isLiveEditing(null);
    };

    return Button;
  }(_block);

  return Button;
});
//# sourceMappingURL=button-item.js.map