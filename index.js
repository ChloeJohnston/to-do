var cardContainer = $(".card-container");
var submit = $('.yes');
var submit1 = $('.no');


submit.on("click", appendOpinion1);
submit1.on("click", appendOpinion2);

function appendOpinion1() {
var name = $('input');

cardContainer.append (`<p class= "task-card"> Yes, well let's be Best Friends! XD</p>`);
appendNewToDo()
$(".name")

}
function appendOpinion2() {


cardContainer.append(`<p class="task-card">No, Well that's your opinion. But.....Your opinion is wrong.`)

appendNewToDo()
$(".name")
}

function appendNewToDo (toDo) {

cardContainer.append(`<p class="task-card">${name}</p> <input type="checkbox" class="clear-button">`);

var clearButton =$('.clear-button');
clearButton.on("click", clearTask);
}


function clearTask() {
  event.target.parentNode.remove();
}
