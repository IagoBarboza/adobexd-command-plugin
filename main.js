const { Rectangle, Color, Text } = require('scenegraph')

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
        fontFamily: 'Comic Sans MS',
        fill: new Color('blue')
      }]
    });
  }
}

function createRainbowText(selection) {
  const rainbowText = new Text();

  const textData = [
    { text: 'R', color: 'red' },
    { text: 'A', color: 'orange' },
    { text: 'I', color: 'violet' },
    { text: 'N', color: 'green' },
    { text: 'B', color: 'blue' },
    { text: 'O', color: 'indigo' },
    { text: 'W', color: 'yellow' }
  ];

  rainbowText.text = textData.map(item => item.text).join('');
  
  rainbowText.styleRanges = textData.map(item => ({
    length: item.text.length,
    fill: new Color(item.color)
  }));

  rainbowText.fontSize = 80;

  selection.insertionParent.addChild(rainbowText);

  rainbowText.moveInParentCoordinates(200, 200);

}

module.exports = {
  commands: {
    createRectangle,
    applyComicSans,
    createRainbowText
  }
}