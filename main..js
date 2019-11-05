$('#projects').tabs();
//$('#link').sortable({axis:'x', containment:'#projects'});
$('ol').sortable({axis:'y', containment:'#projects'});

$('#btn_newList').click( function() { 
  var listName = prompt('Please enter your list name');
  
  while (listName === '') {
    listName = prompt('Please enter your list name');
  }

  $('#tab').append("<li id='link'><button id='btn'><a href='#'>" + listName + '</a></button></li>');
  $('#projects').tabs("refresh");

  $('#projects').append("<ol id='" + listName + "'></ol>");
  
});

$('#btn_newTask').click( function() {
  var taskName = prompt('Please enter your task');
  
  while (taskName === '') {
    taskName = prompt('Please enter your task');
  }

  if(taskName !== null){
  //alert(taskName);
  // do refresh first so the index of tabs change
  $('#projects').tabs("refresh");
  var activeTabIndex = $('#projects').tabs('option', 'active' ) ;

  alert(activeTabIndex);
  //var activeTabName = $("#tab > #link > #btn:nth-child(" + activeTabIndex + ") > a").attr("href");
  activeTabIndex +=1;
  var activeTabName = $("#link > #btn:nth-child( " + activeTabIndex + " ) > a").attr("href");

  console.log(activeTabName)
  alert(activeTabName);
  $(activeTabName).append("<li><input type='checkbox'>" + taskName + "</li>");}
});

// we can't do like that because the click event will not workk on the new task, so we need to it to the parent div 
// $('input[type=checkbox]').click( function() {
//   $(this).closest('li').slideDown( function() {
//     $(this).remove();
//   });
// });

$('#projects').on('click', 'input[type=checkbox]', function() {
  var removed = $(this).closest('li').text()
    $(this).closest('li').slideUp( function() {
      $(this).remove();
      
    });
    $('.rm-list').append('<li>' + removed + '</li>');
  });

  