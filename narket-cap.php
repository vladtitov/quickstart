 
 $url ='https://api.coinmarketcap.com/v1/ticker/';
 
 $ch = curl_init();
 curl_setopt($ch,CURLOPT_URL,$url); 
 curl_exec($ch);