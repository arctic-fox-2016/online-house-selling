$(document).ready(function(){
  refreshAllHouse()
  $("#all-house").hide()
  $("#search").hide()
  $("#new-house").hide()

  $("#menu-add").click(function(){
    $("#all-house").hide()
    $("#search").hide()
    $("#new-house").show()
  })

  $("#menu-display").click(function(){
    $("#all-house").show()
    $("#search").hide()
    $("#new-house").hide()
  })

  $("#menu-search").click(function(){
    $("#all-house").hide()
    $("#search").show()
    $("#new-house").hide()
  })

  $("#input-submit").click(function(){
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
        refreshAllHouse()
      }
    })
  })
})

let refreshAllHouse = function(){
  $.ajax({
    url: 'http://localhost:3000/api',
    type: "GET",
    success: function(result){
      let allHouse = ""
      for(let i in result){
        let component = ""
        component = component +
        `Title: ${result[i].title} <br>
        Address: ${result[i].address} <br>
        Description: ${result[i].description} <br>
        Price: ${result[i].price} <br>
        Phone_Number: ${result[i].phone_number} <br>
        Email: ${result[i].email} <br>
        Picture: ${result[i].picture} <br>
        <img src="https://maps.googleapis.com/maps/api/staticmap?markers=color:red%7Clabel:C%7C${result[i].google_map.lat},${result[i].google_map.lng}&size=400x300&key=AIzaSyBjA9s2q4vk2TCvQ9O81qrqbv5rx4lqKj0"><br>
        `
        allHouse = allHouse + component
      }
      $("#all-house").html(allHouse)
    }
  })
}

      //<img src="https://maps.googleapis.com/maps/api/staticmap?markers=color:red%7Clabel:C%7C40.718217,-73.998284&size=400x300&key=AIzaSyBjA9s2q4vk2TCvQ9O81qrqbv5rx4lqKj0">
