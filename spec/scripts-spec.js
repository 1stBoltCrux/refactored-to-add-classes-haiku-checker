import {Poem} from './../src/scripts.js'

describe('Test', function(){
  var poem;

  beforeEach(function(){
    poem = new Poem('I am first with five', 'Then seven in the middle', 'Five again to end')
  });

  it('should test whether poem contains non-alphabetical characters aside from ".", ",", and "\'" ', function(){
    let newPoem1 = poem.checkCharacters();
    console.log(newPoem1);
    expect(newPoem1).toEqual(true);
  });

  it('should test whether the poem has three lines', function(){
    let newPoem2 = poem.checkEmpty();
    console.log(newPoem2);
    expect(newPoem2).toEqual(true);
  });
});
