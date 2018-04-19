import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Line} from './line.js';

$(document).ready(function(){
  $('#form1').submit(function(event) {
    event.preventDefault();
    let userLine1 = $("#lineOne").val();
    let userLine2 = $("#lineTwo").val();
    let userLine3 = $("#lineThree").val();
    let line1 = new Line(userLine1);
    let line2 = new Line(userLine2);
    let line3 = new Line(userLine3);
    let haikuTest1 = line1.inputToWordArray();
    let haikuTest2 = line2.inputToWordArray();
    let haikuTest3 = line3.inputToWordArray();
    if (haikuTest1 === 5 && haikuTest2 === 7 && haikuTest3 === 5) {
      $("#output").text("your poem is awful, but it is a haiku");
    } else {
      $("#output").text("your poem is not only awful, but it is also not a haiku");
    }

  });
});
