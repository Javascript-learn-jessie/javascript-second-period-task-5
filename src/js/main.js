$(document).ready(function () {
    var i = 1;
    var addText, addDate;
    var delValue = addText;
    $(function () {
      $("#choose-dialog").dialog({
        autoOpen: false,
        height: 300,
        width: 350,
        modal: true,
        buttons: {
          "确定": function () {
            console.log("2222");
            var option = $("#type option:selected").val();
            $(this).dialog("close");
            if (option == "text") {
              addText = "addText";
              $(`<div class="text"><br><input id=${addText} class="text" type='text'/><input id='del' class='del' type='button' value='删除'/><br></div>`).insertAfter("#preview");
              // i++;
              console.log(i);
            } else {
              addDate = "addDate";
              $(`<div class="date"><br><input id=${addDate} class="date" type='date'/><input id='del' class='del' type='button' value='删除'/><br></div>`).insertAfter("#preview");
              //i++;
              console.log(i);
            }
          },
          Cancel: function () {
            $(this).dialog("close");
          }
        }
      });
    });
    $(document).on("click", "#add", function () {
      // $("#add").button().click(function () {
      $("#choose-dialog").dialog("open");
    });
    $(document).on("click", "#preview", function () {
      $('input.del').remove();
      $('#add').remove();
      $('#preview').text("Edit");
      $('#preview').attr("id", "edit");
    });
    $(document).on("click", "#edit", function () {
      $('#edit').text("Preview");
      $('#edit').attr("id", "preview");
      $("<button id='add'>Add</button>").insertBefore("#preview");
      $("<input id='del' class='del' type='button' value='删除'/>").insertAfter("input.text");
      $("<input id='del' class='del' type='button' value='删除'/>").insertAfter("input.date");
    });
  
    $(document).on("click", "#del", function () {
      $(this).parent().first().remove();
    });
  
  });