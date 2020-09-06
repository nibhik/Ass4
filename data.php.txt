<?php

class RestaurantData {

  private $restaurantList;

  function __construct(array $restaurantList) {
    if(sizeof($restaurantList) > 0) {
      $this->restaurantList = $restaurantList;
    } else {
      throw new Exception("No such data");
    }
  }

  public function getRestaurantlist() {
    $rescipesList = [];

    foreach($this->restaurantList as $rescipes) {
      $rescipesList[] = array(
        "id" => $rescipes['id'],
        "name" => $rescipes['name']
      );
    }

    return json_encode($rescipesList);
  }

  public function getRestaurantdata($id) {
    $response = ["Invalid "];

    if($id) {
      foreach($this->restaurantList as $rescipes) {
        if ($id == $rescipes['id']) {
          $response = $rescipes;
          break;
        }
      }
    }

    return json_encode($response);
  }
}