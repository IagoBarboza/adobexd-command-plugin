const { Rectangle, Color } = require('scenegraph')

function createRectangle(selection) {
  const newElement = new Rectangle();

  newElement.width = 100;
  newElement.height = 50;
  newElement.fill = new Color('Purple');

  selection.insertionParent.addChild(newElement);

  newElement.moveInParentCoordinates(100,100);
}

function applyComicSans(selection) {
  if(selection.items.length !== 0) {
    selection.items.forEach((node) => {
      node.styleRanges = [{
        fontFamily: 'Comic Sans MS'
      }]
    });
  }
}

module.exports = {
  commands: {
    createRectangle,
    applyComicSans
  }
}