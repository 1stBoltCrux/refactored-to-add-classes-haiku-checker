import {Line} from './../src/line.js'


describe('Test', function(){
  var line1;
  var line2;
  var line3;

  beforeEach(function(){
    line1 = new Line('I am first with five');
    line2 = new Line('Then seven in the middle');
    line3 = new Line('Five again to end');
  });

  it('should test whether line contains non-alphabetical characters aside from ".", ",", and "\'" ', function(){
    let line1Characters = line1.checkCharacters();
    console.log(line1Characters);
    expect(line1Characters).toEqual(true);
  });

});
