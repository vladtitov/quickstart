<?php       
        $ip = $_SERVER['REMOTE_ADDR'];
		
        $data = json_decode(file_get_contents('php://input'));
        if($data->user=='uplight.ca@gmail.com' && $data->pass=='uplight.ca@gmail.com'){
			$subject = 'Website Registration';
			$headers = "From: support@front-desk.ca\r\n";
			$headers .= "Reply-To: vladstitov@gmail.com\r\n";
			$headers .= "CC: vladstitov@gmail.com\r\n";
			$headers .= "MIME-Version: 1.0\r\n";
			$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
			
			$message = '<html><body>';
			$message .= $data->message;
			$message .= '</body></html>';
			
        if(mail($data->to,$data->subject,$message,$headers))
			header('Content-Type: application/json');
			$out = new stdClass();
			$out->success = 'success';
			$out->ip = $ip;
			$out->message ='Email sent to '.$data->to;
			
			echo json_encode($out);
			
        }else echo 'hacker';
