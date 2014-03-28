<?php

    echo $tag = htmlspecialchars_decode($_POST['tagBoxValue']);
    echo $demosite = stripslashes($_POST['demosite']);
    echo $page_title = "PageShifter Demo";

    $random = rand(100000, 9999999);
    $filepath= 'demos/addemo_'.$random.'.html';
    
    if (!empty($_POST['client'])) {
        $client = $_POST['client'];
        $page_title .= ' for '.$client;
        $filepath = str_replace('demos/','demos/'.urlencode($client).'_',$filepath);
    }

    switch ($demosite) {
        case 'momiqsite':
            $sitebg = 'momiq_testpage_backdrop.jpg';
            $sitebgcolor = '#F3FCFF';
            break;
        case 'ellasite':
            $sitebg = 'ella_testpage_backdrop.jpg';
            $sitebgcolor = '#fff';
            break;
        case 'giantsite':
            $sitebg = 'giantrealm_testpage_backdrop.jpg';
            $sitebgcolor = '#333';
            break;
        case 'biblesite':
            $sitebg = 'ladbible_testpage_backdrop.jpg';
            $sitebgcolor = '#e3e7e6';
            break;            
    }

    $htmlpage = fopen($filepath, 'w');
    fwrite($htmlpage, "<!DOCTYPE html>
<html>
<head>
<meta charset=\"utf-8\">
<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
<title>{$page_title}</title>
<meta name=\"description\" content=\"{$page_title}\">
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
<link href=\"favicon.ico\" rel=\"shortcut icon\" />
<link href=\"http://fonts.googleapis.com/css?family=Roboto:700,500,300italic\" rel=\"stylesheet\" type=\"text/css\">
<link rel=\"stylesheet\" href=\"../demos/css/style.css\">
<style>body{background:{$sitebgcolor};}</style>
</head>
<body>

<div id=\"wrapper\">
<div id=\"container\">
<div id=\"content\">

<div id=\"maincontent\">
<img src=\"../img/{$sitebg}\" />
</div>

<div id=\"pagetitle\">{$page_title}</div>

</div>
</div>
</div>
<div id=\"adtag\">{$tag}</div>
</body>
</html>"

);
    fclose($htmlpage);
    ob_start();
    header('X-XSS-Protection: 0');
    header('Location: ' . $filepath);
    ob_end_flush();

?>