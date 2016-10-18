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
    $("#new-house").hide()
    $("#search").hide()
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

  $("#search-box").keyup(function(){
    if($("#search-box").val().length >2){
      searchHouse($("#search-box").val())
    } else {
      $("#search-result").html("")
    }
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
        `
        <div class="row" style="margin:5px; background-color: #c9ede9">
          <div class="col-lg-12" style="margin-bottom:10px; margin-top:10px"><span class="label label-primary">${result[i].title}</span></div>
          <div class="col-lg-4">
            <img src="https://maps.googleapis.com/maps/api/staticmap?markers=color:red%7Clabel:C%7C${result[i].google_map.lat},${result[i].google_map.lng}&size=250x250&key=AIzaSyBjA9s2q4vk2TCvQ9O81qrqbv5rx4lqKj0"><br>
          </div>
          <div class="col-lg-8">
            <div class="panel panel-primary">Title: ${result[i].title}</div>
            <div class="panel panel-primary">Address: ${result[i].address}</div>
            <div class="panel panel-primary">Description: ${result[i].description}</div>
            <div class="panel panel-primary">Price: ${result[i].price}</div>
            <div class="panel panel-primary">Phone_Number: ${result[i].phone_number}</div>
            <div class="panel panel-primary">Email: ${result[i].email}</div>
            <div class="panel panel-primary">Picture: ${result[i].picture}</div>
          </div>
        </div>
        `
        allHouse = allHouse + component
      }
      $("#all-house").html(allHouse)
    }
  })
}

let searchHouse = function(query){
  $.ajax({
    url: `http://localhost:3000/api/${query}`,
    type: "GET",
    success: function(result){
      let allHouse = ""
      for(let i in result){
        let component = ""
        component = component +
        `
        <div class="row" style="margin:5px; background-color: #c9ede9">
          <div class="col-lg-12" style="margin-bottom:10px"><span class="label label-primary">${result[i].title}</span></div>
          <div class="col-lg-4">
            <img src="https://maps.googleapis.com/maps/api/staticmap?markers=color:red%7Clabel:C%7C${result[i].google_map.lat},${result[i].google_map.lng}&size=250x250&key=AIzaSyBjA9s2q4vk2TCvQ9O81qrqbv5rx4lqKj0"><br>
          </div>
          <div class="col-lg-8">
            <div class="panel panel-primary">Title: ${result[i].title}</div>
            <div class="panel panel-primary">Address: ${result[i].address}</div>
            <div class="panel panel-primary">Description: ${result[i].description}</div>
            <div class="panel panel-primary">Price: ${result[i].price}</div>
            <div class="panel panel-primary">Phone_Number: ${result[i].phone_number}</div>
            <div class="panel panel-primary">Email: ${result[i].email}</div>
            <div class="panel panel-primary">Picture: ${result[i].picture}</div>
          </div>
        </div>
        `
        allHouse = allHouse + component
      }
      $("#search-result").html(allHouse)
    }
  })
}
