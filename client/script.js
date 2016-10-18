$(document).ready(function(){
  $("#input-submit").click(function(){
    console.log('test')
    $.ajax({
      url:'http://localhost:3000/api',
      type: 'POST',
      data: {title: $("#input-title").val(), address: $("#input-address").val(), description: $("#input-description").val(), price: $("#input-price").val(), phone_number: $("#input-phone_number").val(), email: $("#input-email").val(), picture: $("#input-picture").val(), lat: marker.getPosition().lat(), lng: marker.getPosition().lng()},
      success: function(result){
        $("#input-title").val("");
        $("#input-address").val("");
        $("#input-description").val("");
        $("#input-price").val("");        $("#input-phone_number").val("");
        $("#input-email").val("");
        $("#input-picture").val("");
        $("#message").html("Add is successful, feel free to add another")
      }
    })
  })

  $("#menu-display").click(function(){
    $.ajax({
      url: 'http://localhost:3000/api',
      type: "GET",
      success: function(result){
        for(let i in result){
          let perHouse = ""

        }
      }
    })
  })
})

      //<img src="https://maps.googleapis.com/maps/api/staticmap?markers=color:red%7Clabel:C%7C40.718217,-73.998284&size=400x300&key=AIzaSyBjA9s2q4vk2TCvQ9O81qrqbv5rx4lqKj0">
