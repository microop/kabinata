<?php

$html['header'] = file_get_contents('header.tpl');
$html['footer'] = file_get_contents('footer.tpl');

if (isset($_GET['page'])) {
	$html['body'] = file_get_contents($_GET['page'] . '.tpl');
} else {
	$html['body'] = file_get_contents('home.tpl');
}

foreach($html as $key => $text) {
	$html[$key] = str_replace('##' . $_GET['page'] . '##', 'is-active', $text);
}

echo $html['header'] . $html['body'] . $html['footer'];
?>