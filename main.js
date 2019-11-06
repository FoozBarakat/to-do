var tasks = [{
        message: 'Finish Project',
        created_at: Date.now(),
        category: '#work'
    },
    {
        message: 'Email the presentation to boss',
        created_at: Date.now(),
        category: '#work'
    },
    {
        message: 'Buy a cake for dad\'s birthday',
        created_at: Date.now(),
        category: '#personal'
    },
    {
        message: 'Research hotels in Paris',
        created_at: Date.now(),
        category: '#personal'
    },
    {
        message: 'Buy flight tickets tp Paris',
        created_at: Date.now(),
        category: '#personal'
    },
    {
        message: 'Final report',
        created_at: Date.now(),
        category: '#work'
    },
    {
        message: 'Go to the Doctor',
        created_at: Date.now(),
        category: '#personal'
    },
];

var addTask = function(task) {
    tasks.push(task)
};

var writeTask = function(message, category) {
    var task = {};
    task.message = message;
    task.created_at = Date.now();
    task.category = category;
    addTask(task);
};


function displayTask(task, list) {
    $(list).append("<li><input type='checkbox'>" + task + "</li>");
};

for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i]['message'];
    var list = tasks[i]['category'];
    displayTask(task, list);
};



//////////////////////////////////////////////////////////////////////////////////////////////

$('#projects').tabs();
$('ol').sortable({ axis: 'y', containment: '#projects' });


// New List
$('#btn_newList').click(function() {
    var listName = prompt('Please enter your list name');

    while (listName === '') {
        listName = prompt('Please enter your list name');
    }

    if (listName !== null) {

        $('#tab').append("<li class='link'><button class='btn'><a href='#"+ listName +"'>" + listName + '</a></button></li>').sortable();
        $('#ol-list').append("<ol id='"+ listName +"'></ol>");
        $('#projects').tabs("refresh");

        var count = $('#projects .ui-tabs-nav li').length;
        $('#projects').tabs('option', 'active', count - 1);
    }

});


// New Task
$('#btn_newTask').click(function() {
    var taskName = prompt('Please enter your task');

    while (taskName === '') {
        taskName = prompt('Please enter your task');
    }

    if (taskName !== null) {

        $('#projects').tabs("refresh");

        var activeTabIndex = $('#projects').tabs('option', 'active') + 1;
        //alert(activeTabIndex);

        var activeTabName = $("#tab > .link:nth-child(" + activeTabIndex + ") > button > a").attr("href");
        //alert(activeTabName);

        writeTask(taskName, activeTabName);
        displayTask(taskName, activeTabName);
        //console.log(tasks);
    }
});


// Done Task
$('#projects').on('click', 'input[type=checkbox]', function() {
    var removed = $(this).closest('li').text()

    $(this).closest('li').slideUp(function() {

        $(this).remove();

    });

    $('.rm-list').append('<li>' + removed + '</li>');

}); 