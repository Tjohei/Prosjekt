
For this project we're using the following technologies:

HTML
CSS
Javascript
XML
PHP

----

The website is primarily built using HTML, with CSS for styling and Javascript for dynamically changing the content and
rotating the menu.
XML is used for the sitemap, and can be found at "about/sitemap.xml", which is processed and shown in "about.html".

PHP is only used in contact.php to send an email after a user has filled out the contact form.
If you want to check that this works, fill out the contact form and press submit,
then go to "http://www.mailinator.com" and check the inbox of "swinegaimz".

Credits and sources are shown at the bottom of the page, when you hover over "Credits & Sources"

index.html will give an error for "scrolling='no'" in the iframe when running it through the w3 validator.
We searched for alternatives and found the attribute "seamless", but since this isn't implemented in all browsers yet,
we decided to keep using "scrolling='no'".
Source: http://www.w3schools.com/tags/att_iframe_seamless.asp