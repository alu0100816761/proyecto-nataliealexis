const principal = () => {
console.log('estoy en main');
$(document).ready(function() {
  $('#parse').click(function() {
    try {
      var result = pl0.parse($('#input').val());
      $('#output').html(JSON.stringify(result,undefined,2));
    } catch (e) {
      $('#output').html('<div class="error"><pre>\n' + JSON.stringify(e, null,4) + '\n</pre></div>');
    }
  });

  $("#examples").change(function(ev) {
    var f = ev.target.files[0]; 
    var r = new FileReader();
    r.onload = function(e) { 
      var contents = e.target.result;
      
      input.innerHTML = contents;
    }
    r.readAsText(f);
  });

});};
module.exports = principal;


