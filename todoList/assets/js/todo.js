$("ul").on("click", "li", function(){
  $(this).toggleClass("completed")
}) //add on parent, important!!
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove()//$(this) refers to $(this).parent()
  })
  event.stopPropagation()//not trigger parent events
})

$("input[type='text']").keypress(function(event){
  if(event.which===13){
    var todoItem=$(this).val()
    $(this).val("")
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoItem+"</li>")
  }
})
$(".fa-plus-square").on("click",function(){
  $("input[type='text']").slideToggle(800);
})