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
        'x-rapidapi-key: insertapihere'
      ),
    ));
    $response = curl_exec($curl);

    //file_put_contents("teams2.json", $response, FILE_APPEND);
    //generate json file
    //$response = json_decode($response);
    $arr = json_decode($response, TRUE);

    print_r($arr['response']);
    file_put_contents("player.json", json_encode($arr['response'][0]), FILE_APPEND);
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
        'x-rapidapi-key: 235e454fcae9384e53a2b83531038be1'
      ),
    ));
    $response = curl_exec($curl);

    //file_put_contents("teams2.json", $response, FILE_APPEND);
    //generate json file
    //$response = json_decode($response);
    $arr = json_decode($response, TRUE);
   
    file_put_contents("playerwithresponseforlop23456.json", trim(json_encode($arr['response']),'[]').',', FILE_APPEND);
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

// Get all the teams from this competition
//$teams = call_api('teams', ['league' => 203, 'season' => 2022]);
//var_dump($teams); // To display the results if necessary */

//$players2 = call_player_api('players', ['league' => 203, 'season' => 2022, 'page' => 1]);

 for ($x = 1; $x <= 39; $x++) {
    call_player_api('players', ['league' => 203, 'season' => 2022, 'page' => $x]);
  } 

/* // Get all the players from this competition
$players = players_data(203, 2022);
var_dump($players); // To display the results if necessary
?> */