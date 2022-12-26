<?php
function call_api($endpoint, $params = []) {

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
    file_put_contents("fixtures.json", trim(json_encode($arr['response']),'[]'), FILE_APPEND);
    print_r($arr['response']);
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
   
    file_put_contents("players.json", trim(json_encode($arr['response']),'[]').',', FILE_APPEND);
    curl_close($curl);
    sleep(12);
    return $response;
}

function players_data($league, $season, $page = 1, $players_data = []) {

    $players = call_api('players', ['league' => $league, 'season' => $season, 'page' => $page]);
    $players_data = array_merge($players_data, $players->response);

    if ($players->paging->current < $players->paging->total) {

        $page = $players->paging->current + 1;
        if ($page%2 == 1) {
            sleep(12);
        }
        $players_data = players_data($league, $season, $page, $players_data);
    }
    return $players_data;
}

//Run this to get all the teams dont forget to add brackets at the end and the start to the final json file
$teams = call_api('teams', ['league' => 203, 'season' => 2022]);

//Run this to get the last 9 fixtures dont forget to add brackets at the end and the start to the final json file
#$fixtures = call_api('fixtures', ['league' => 203, 'last' => 9]);


/* 
Run this code to create a json file with players in super league, there are 39 pages for this season in the api
dont forget to add brackets at the end and the start to the final json file
for ($x = 1; $x <= 39; $x++) {
    call_player_api('players', ['league' => 203, 'season' => 2022, 'page' => $x]);
}  */


/* // Get all the players from this competition
$players = players_data(203, 2022);
var_dump($players); // To display the results if necessary
?> */