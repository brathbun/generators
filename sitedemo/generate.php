<?php

    $tag = htmlspecialchars_decode($_POST['tagBoxValue']);
    $type = $_POST['adsizeSelect'];
    $demosite = stripslashes($_POST['demosite']);

    //Random AlphaNumeric String
    $length = rand(4,6);
    $random = substr(md5(rand(0, 1000000)), 0, $length);

    $filepath= 'go/demo_'.$random.'.html';
    
    if (!empty($_POST['client'])) {
        $client = $_POST['client'];
        $page_title .= $client . ' Demo';
        $filepath = str_replace('go/','go/'.urlencode($client).'_',$filepath);
        $page_title = str_replace('_',' ',$page_title);
    }

    switch ($demosite) {
        case 'momiqsite':
            $sitebg = 'momiq_testpage_backdrop.jpg';
            $sitebgcolor = '#F3FCFF';
            if ($type == 'leader') {
                $adsize = '#adtag{width:728px;height:90px;position:absolute;top:122px;right:587px;}';
            } elseif ($type == 'box') {
                $adsize = '#adtag{width:300px;height:250px;position:absolute;top:621px;right:516px;}';
            }            
            break;
        case 'ellasite':
            $sitebg = 'ella_testpage_backdrop.jpg';
            $sitebgcolor = '#fff';
            if ($type == 'leader') {
                $adsize = '#adtag{width:728px;height:90px;position:absolute;top:120px;right:587px;}';
            } elseif ($type == 'box') {
                $adsize = '#adtag{width:300px;height:250px;position:absolute;top:224px;right:471px;}';
            }               
            break;
        case 'giantsite':
            $sitebg = 'giantrealm_testpage_backdrop.jpg';
            $sitebgcolor = '#333';
            if ($type == 'leader') {
                $adsize = '#adtag{width:728px;height:90px;position:absolute;top:97px;right:587px;}';
            } elseif ($type == 'box') {
                $adsize = '#adtag{width:300px;height:250px;position:absolute;top:212px;right:475px;}';
            }              
            break;
        case 'biblesite':
            $sitebg = 'ladbible_testpage_backdrop.jpg';
            $sitebgcolor = '#e3e7e6';
            if ($type == 'leader') {
                $adsize = '#adtag{width:728px;height:90px;position:absolute;top:61px;right:586px;}';
            } elseif ($type == 'box') {
                $adsize = '#adtag{width:300px;height:250px;position:absolute;top:528px;right:480px;}';
            }            
            break;
        case 'femalefirstsite':
            $sitebg = 'femalefirst_testpage_backdrop.jpg';
            $sitebgcolor = '#efefef';
            if ($type == 'leader') {
                $adsize = '#adtag{width:728px;height:90px;position:absolute;top:3px;right:587px;}';
            } elseif ($type == 'box') {
                $adsize = '#adtag{width:300px;height:250px;position:absolute;top:220px;right:490px;}';
            }               
            break;  
        case 'greatchefsite':
            $sitebg = 'greatchefs_testpage_backdrop.jpg';
            $sitebgcolor = '#fff';
            if ($type == 'leader') {
                $adsize = '#adtag{width:728px;height:90px;position:absolute;top:27px;right:493px;}';
            } elseif ($type == 'box') {
                $adsize = '#adtag{width:300px;height:250px;position:absolute;top:704px;right:485px;}';
            }              
            break;  
        case 'djmagsite':
            $sitebg = 'djmag_testpage_backdrop.jpg';
            $sitebgcolor = '#000';
            if ($type == 'leader') {
                $adsize = '#adtag{width:728px;height:90px;position:absolute;top:18px;right:573px;}';
            } elseif ($type == 'box') {
                $adsize = '#adtag{width:300px;height:250px;position:absolute;top:119px;right:474px;}';
            }            
            break;  
        case 'westlondonsite':
            $sitebg = 'westlondon_testpage_backdrop.jpg';
            $sitebgcolor = '#fff';
            if ($type == 'leader') {
                $adsize = '#adtag{width:728px;height:90px;position:absolute;top:40px;right:484px;}';
            } elseif ($type == 'box') {
                $adsize = '#adtag{width:300px;height:250px;position:absolute;top:287px;right:475px;}';
            }            
            break;
        case 'nocigarsite':
            $sitebg = 'nocigar_testpage_backdrop.jpg';
            $sitebgcolor = '#fff';
            if ($type == 'leader') {
                $adsize = '#adtag{width:728px;height:90px;position:absolute;top:108px;right:484px;}';
            } elseif ($type == 'box') {
                $adsize = '#adtag{width:300px;height:250px;position:absolute;top:211px;right:484px;}';
            }              
            break;                                  
    }

    $htmlpage = fopen($filepath, 'w');
    fwrite($htmlpage, "<!DOCTYPE html>
<html>
<head>
<meta charset=\"utf-8\">
<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
<title>{$page_title} - Burstmediadesign.com</title>
<meta name=\"description\" content=\"{$page_title}\">
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
<link href=\"favicon.ico\" rel=\"shortcut icon\" />
<link href=\"http://fonts.googleapis.com/css?family=Roboto:700,500,300italic\" rel=\"stylesheet\" type=\"text/css\">
<link rel=\"stylesheet\" href=\"../go/css/style.css\">
<style>body{background:{$sitebgcolor};}$adsize</style>
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