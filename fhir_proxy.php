<?php
  $url = $_GET['json_url'];
  $url = "http://fhirtest.uhn.ca/" . $url;

  $data = file_get_contents($url);
  echo $data;
?>
