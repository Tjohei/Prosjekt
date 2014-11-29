<!DOCTYPE html>
<html>
<head>
    <title>
        ABOUT SWINE GAIMZ
    </title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="style/subpage.css">
</head>
<body>
<div>
    <h1>
        Business inquiries
    </h1>
    <p>
        For business related inquiries please call 815-493-00 or send an email using the form below.

    <h2>
        However, as there is probably nothing to complain about, go away.
    </h2>
    <p>
        Nulla nec faucibus quam, vitae fringilla massa. Sed tincidunt dapibus diam, at malesuada magna. In ullamcorper malesuada convallis. Donec ac sapien nulla. Aenean fermentum fringilla magna in euismod. Aenean dui urna, maximus vel cursus et, fermentum ac neque. Nullam aliquam venenatis ex in lobortis. Ut ac est non diam posuere mollis non non mi. Ut condimentum pulvinar rutrum. Phasellus in nunc ipsum. Fusce in metus turpis. Nullam eget eros justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi tristique urna quis ex mattis, vel lacinia ipsum cursus.

    <?php
        if (isset($_POST['submit'])){
            echo "<br><br><b>Email has been sent!</b>";

            $to = "swinegaimz@mailinator.com";
            $subject = "[Contact] Name: ".$_POST['name'];
            $txt = $_POST['comment'];
            $headers = "From: ".$_POST['email']."\r\n";

            mail($to,$subject,$txt,$headers);

            $_POST = array();
        }
    ?>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        Name:<br>
        <input type="text" name="name" required>
        <br>
        E-mail:<br>
        <input type="text" name="email" required>
        <br>
        Phone number (Not required):<br>
        <input type="number" name="phone">
        <br>
        Comment:<br>
        <textarea rows="10" cols="60" name="comment"></textarea>
        <br>
        <input type="submit" name="submit" value="Send">
    </form>

</div>
</body>
</html>