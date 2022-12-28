<?php
function call_api( $endpoint, $params = []) {

  $parameters = '';
  if (count($params) > 0) {
      $parameters = '?'.http_build_query($params);
  }

  $curl = curl_init();
  curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://v3.football.api-sports.io/'.$endpoint.$parameters,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_HTTPHEADER => array(
      'x-rapidapi-key: insertapikeyhere'
    ),
  ));
  $response = curl_exec($curl);
  $arr = json_decode($response, TRUE);
  file_put_contents("indfixs.json", trim(json_encode($arr['response']),'[]').',', FILE_APPEND);
  curl_close($curl);
  return $response;
}

function call_api_statistics( $endpoint, $params = []) {

  $parameters = '';
  if (count($params) > 0) {
      $parameters = '?'.http_build_query($params);
  }

  $curl = curl_init();
  curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://v3.football.api-sports.io/'.$endpoint.$parameters,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_HTTPHEADER => array(
      'x-rapidapi-key: insertapikeyhere'
    ),
  ));
  $response = curl_exec($curl);
  $arr = json_decode($response, TRUE);
  file_put_contents("indstats.json", trim(json_encode($arr),'[]').',', FILE_APPEND);
  curl_close($curl);
  return $response;
}

function call_api_fixture(&$fixture_ids, $endpoint, $params = []) {
    $parameters = '';
    if (count($params) > 0) {
        $parameters = '?'.http_build_query($params);
    }
    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => 'https://v3.football.api-sports.io/'.$endpoint.$parameters,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'GET',
      CURLOPT_HTTPHEADER => array(
        'x-rapidapi-key: insertapikeyhere'
      ),
    ));
    $response = curl_exec($curl);
    $arr = json_decode($response, TRUE);
    
    file_put_contents("fixtures.json", json_encode($arr['response']), FILE_APPEND);
    foreach($arr['response'] as $elem)  {
      array_push($fixture_ids,  $elem['fixture']['id']);
    }
    curl_close($curl);
    return $response;
}

function call_player_api($endpoint, $params = []) {
    $parameters = '';
    if (count($params) > 0) {
        $parameters = '?'.http_build_query($params);
    }
    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => 'https://v3.football.api-sports.io/'.$endpoint.$parameters,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'GET',
      CURLOPT_HTTPHEADER => array(
        'x-rapidapi-key: insertapikeyhere'
      ),
    ));
    $response = curl_exec($curl);
    //file_put_contents("teams2.json", $response, FILE_APPEND);
    //generate json file
    //$response = json_decode($response);
    $arr = json_decode($response, TRUE);
    file_put_contents("teams2.json", trim(json_encode($arr['response']),'[]').',', FILE_APPEND);
    curl_close($curl);
    sleep(12);
    return $response;
}

//Run this to get all the teams dont forget to add brackets at the end and the start to the final json file
#$teams = call_api('teams', ['league' => 203, 'season' => 2022]);

//Run this to get the last 9 fixtures dont forget to add brackets at the end and the start to the individual fixtures json file
$fixture_ids = array();
$fixtures = call_api_fixture($fixture_ids, 'fixtures', ['league' => 203, 'last' => 9]);
var_dump($fixture_ids);
foreach($fixture_ids as $fix_ids) {
  sleep(12);
  # API response doesn't have the fixture id, so instead of writing the response field like call_api, call_api_statistics writes
  #the whole response to have the fixture id parameter given as well
  call_api_statistics('fixtures/statistics', ['fixture' => $fix_ids]);
} 

/* 
Run this code to create a json file with players in super league, there are 39 pages for this season in the api
dont forget to add brackets at the end and the start to the final json file
for ($x = 1; $x <= 39; $x++) {
    call_player_api('players', ['league' => 203, 'season' => 2022, 'page' => $x]);
} */
?>