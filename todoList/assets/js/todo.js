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
    $(this).next().focus();
  }
})
$("input[type='time']").keypress(function(event){
  if(event.which===13){
    var todoItem=$(this).prev().val()
    var time=$(this).val()
    $(this).val("")
    $(this).prev().val("")
    $("ul").append("<li><span class='deletIcon'><i class='fas fa-trash-alt'></i></span> "+todoItem+"<span class='time'>"+time+"</span></li>")
  }
})
$(".fa-plus-square").on("click",function(){
  $("input").slideToggle(800);
})