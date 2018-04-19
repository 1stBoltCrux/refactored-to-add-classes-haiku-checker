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
    let line1Characters1 = line1.checkCharacters();
    let line2Characters1 = line2.checkCharacters();
    let line3Characters1 = line3.checkCharacters();
    console.log(line1Characters1, line2Characters1, line3Characters1);
    expect(line1Characters1).toEqual(true);
    expect(line2Characters1).toEqual(true);
    expect(line3Characters1).toEqual(true);
  });

  it('should test whether the poem has three lines', function(){
    let line1Characters2 = line1.checkEmpty();
    let line2Characters2 = line2.checkEmpty();
    let line3Characters2 = line3.checkEmpty();
    console.log(line1Characters2, line2Characters2, line3Characters2);
    expect(line1Characters2).toEqual(true);
    expect(line2Characters2).toEqual(true);
    expect(line3Characters2).toEqual(true);
  });

});
