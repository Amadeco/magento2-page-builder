/*eslint-disable */
define(["knockout", "uiEvents", "Magento_PageBuilder/js/utils/array", "Magento_PageBuilder/js/component/block/factory"], function (_knockout, _uiEvents, _array, _factory) {
  /**
   * Handle event to remove block
   *
   * @param event
   * @param args
   */
  function onBlockRemoved(args) {
    args.parent.removeChild(args.block); // Remove the instance from the data store

    args.parent.stage.store.remove(args.block.id);
  }
  /**
   * Handle when an instance of an existing block is dropped onto a container
   *
   * @param {Event} event
   * @param {BlockInstanceDroppedParams} args
   */


  function onBlockInstanceDropped(args) {
    var originalParent = args.blockInstance.parent;
    args.blockInstance.parent = args.parent;
    args.parent.addChild(args.blockInstance, args.index);

    _uiEvents.trigger("block:moved", {
      block: args.blockInstance,
      index: args.index,
      newParent: args.parent,
      originalParent: originalParent
    });
  }
  /**
   * Handle a block being dropped into a container
   *
   * @param {Event} event
   * @param {BlockDroppedParams} args
   */


  function onBlockDropped(args) {
    var index = args.index || 0;
    new Promise(function (resolve, reject) {
      if (args.block) {
        return (0, _factory)(args.block.config, args.parent, args.parent.stage).then(function (block) {
          args.parent.addChild(block, index);

          _uiEvents.trigger("block:dropped:create", {
            id: block.id,
            block: block
          });

          _uiEvents.trigger(args.block.config.name + ":block:dropped:create", {
            id: block.id,
            block: block
          });

          return block;
        });
      } else {
        reject("Parameter block missing from event.");
      }
    }).catch(function (error) {
      console.error(error);
    });
  }
  /**
   * Handle a block being sorted within it's own container
   *
   * @param {Event} event
   * @param {BlockSortedParams} args
   */


  function onBlockSorted(args) {
    var originalIndex = _knockout.utils.arrayIndexOf(args.parent.children(), args.block);

    if (originalIndex !== args.index) {
      (0, _array.moveArrayItem)(args.parent.children, originalIndex, args.index);
    }
  }
  /**
   * On sorting start & end show all borders on the stage
   *
   * @param {Event} event
   * @param {SortParams} args
   */


  function onSortingStart(args) {
    args.block.stage.showBorders(true);
  }

  function onSortingStop(args) {
    args.block.stage.showBorders(false);
  }
  /**
   * Handle container related events for the stage
   *
   * @param {Stage} stage
   */


  function handleEvents(stage) {
    // Block dropped from left hand panel
    _uiEvents.on("block:dropped", function (args) {
      if (args.parent.stage.id === stage.id) {
        onBlockDropped(args);
      }
    }); // Block instance being moved between structural elements


    _uiEvents.on("block:instanceDropped", function (args) {
      if (args.parent.stage.id === stage.id) {
        onBlockInstanceDropped(args);
      }
    }); // Block being removed from container


    _uiEvents.on("block:removed", function (args) {
      if (args.parent.stage.id === stage.id) {
        onBlockRemoved(args);
      }
    }); // Block sorted within the same structural element


    _uiEvents.on("block:sorted", function (args) {
      if (args.parent.stage.id === stage.id) {
        onBlockSorted(args);
      }
    }); // Observe sorting actions


    _uiEvents.on("block:sortStart", function (args) {
      if (args.block.stage.id === stage.id) {
        onSortingStart(args);
      }
    });

    _uiEvents.on("block:sortStop", function (args) {
      if (args.block.stage.id === stage.id) {
        onSortingStop(args);
      }
    });
  }

  return {
    handleEvents: handleEvents
  };
});
//# sourceMappingURL=event-handling-delegate.js.map
