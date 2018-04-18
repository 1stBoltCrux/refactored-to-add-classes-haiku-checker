import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('#form1').submit(function(event) {
    event.preventDefault();
    let line1 = $("#lineOne").val();
    let line2 = $("#lineTwo").val();
    let line3 = $("#lineThree").val();
    let poem = new Poem(line1, line2, line3);
  });
});
