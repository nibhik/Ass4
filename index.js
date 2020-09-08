var restaurantdata = [];
var rescipy = {};

$(document).ready(function () {

  $.get("http://localhost:3000/controller.php?req=restaurant_list", function (recipyData) {
    restaurantdata = recipyData;
    restaurantdata.forEach((recipy, index) => {
      $("#menudrop").append(`<option value=${index}>${recipe.name}</option>`);
    })
  });

  $("#menudrop").change((e) => {
    const item = restaurantdata[e.target.value];

    $.get(`http://localhost:3000/controller.php?req=restaurant_data&id=${item.id}`, function (rescipy) {
      $('#dataholder').append(
        `<div>
          <p> ID - ${rescipy.id} </p>
          <p> Short Name - ${rescipy.short_name} </p>
          <p> Name - ${rescipy.name} </p>
          <p> Description - ${rescipy.description} </p>
          <p> Small_Portion Name - ${rescipy.small_portion_name} </p>
          <p> Large_Portion Name - ${rescipy.large_portion_name} </p>
          <p> Price small - ${rescipy.price_small} </p>
          <p> Price Large - ${rescipy.price_large} </p>
        </div>
        `
      )
    })
  })
}); 