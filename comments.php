<html>
<head>
    <title>
        ABOUT SWINE GAIMZ
    </title>
    <meta charset="UTF-8">
    <!--<link rel="stylesheet" type="text/css" href="style/subpage.css">-->
</head>
<body>
<div>
    <h1>
        COMMENTS, QUESTIONS 'N' FO'SHIZZLE.
    </h1>
    <form method="post">
        Name:<br>
        <input type="text" name="name"><br>
        Comment:<br>
        <input type="text" name="content">
        <br><br>
        <input type="submit" value="Submit">
    </form>
    <br>
    <?php
    //Loads file
    $xml = simplexml_load_file('comments.xml');
    //If file doesn't exist, create it.
    if($xml === FALSE){
        $xml = new SimpleXMLElement('<comments></comments>');
        $xml->asXML('comments.xml');
    }
    //Check for new comment.
    if(isset($_POST['name']) && isset($_POST['content'])){
        $comment = $xml->addChild('comment');
        $comment->addChild('name', $_POST['name']);
        $comment->addChild('content', $_POST['content']);
        $xml->asXML('comments.xml');
    }

    //Prints xml as a list
    echo '<ul style="list-style-type: none">';
    foreach($xml as $node){
        echo '<li><b>'.$node->name.':</b></li>';
        echo '<li>'.$node->content.'</li><br>';
    }
    echo '</ul>';
    ?>
</div>
</body>
</html>