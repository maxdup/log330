

$(function () { 
    $('#save-folder-tree').jstree({
      "core" : {
        "animation" : 100,
        "check_callback" : true,
        "multiple" : false,
        "themes" : { "stripes" : true },
      },
      "types" : {
        "#" : {
          "valid_children" : ["root"]
        },
        "root" : {
          "valid_children" : ["default"]
        },
        "default" : {
          "valid_children" : ["default","file"]
        },
        "file" : {
          "icon" : "glyphicon glyphicon-file",
          "valid_children" : []
        }
      },
      "plugins" : [
        "contextmenu", "dnd", "search",
        "state", "types", "wholerow", "checkbox"
      ],

    }); 

    $('#save-folder-tree').jstree(true).settings.core.multiple = false;

    $('#save-folder-tree').on('click' , function() {
      var selectedNode = $(this).jstree('get_selected');
      console.log(selectedNode);
      if(typeof(savedPages[selectedNode]) != 'undefined') {
        var singleSavedPage = savedPages[selectedNode];
        $.ajax({
          url: "savedPage.html",
          context: document.body
        }).done(function(data) {
          $('#page_info_container').html(data);
          $('#page_info_container #page_title').html(singleSavedPage.title);
          $('#page_info_container #page_url').html(singleSavedPage.url);
          $('#page_info_container #page_author').html(singleSavedPage.author);
        });
      }
    });
    restore_options();
});







