$("form").submit(function(event) {
	event.preventDefault();

  let newItem = $("input").val();
  if (newItem != "") {
    let itemName = `<div class="itemName">` + newItem + `</div>`;
    let checkBtn = `<button class="checkItem">Check</button>`;
    let deleteBtn = `<button id="deleteItem">Delete</button>`;

    let itemBlock = `<div class="itemBlock">` + itemName + checkBtn + deleteBtn + `</div>`;
    $("#itemList").append(`<li class="itemlst">` + itemBlock + `</li>`)
	}

  $("input").val("")
});

$("#itemList").on("click", "button", function(event) {

  if ($(this).attr("class") == "checkItem")
		$(this).parent().parent().toggleClass("checkedItem");
	else
		$(this).parent().parent().remove();

});
