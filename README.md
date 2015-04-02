# Feedreader Project

Project where you are given a partly completed web-based application that reads RSS feeds. The assignment is to complete the test suite. 

1. First (existing) test checks that feeds to be called are defined and actually have text in them. When the allFeeds array is emptied it turns red and returns an error. As soon as there is one feed defined it turns green with 0 failures.
2. Second test is very similar to the first one but it checks that the URL is defined and that it is not empty. 
3. The same test is done on the name of the feed to make sure it is defined and not empty. Both of these are easily tested by removing the URL or name entries or setting them to an empty string.
4. The next test suite checks the hidden menu. First that it is hidden by default. To do this we check whether it has the 'menu-hidden' class.
5. Next we test what happens when the menu icon is clicked. To do this, we first store whether the body element has the 'menu-hidden' class, we then click and check the body element again. Then by testing these two states we can check that if it is hidden and clicked it will show and vice-versa. 
6. For the asynchronous tests we need to pass the done() function on beforeEach so it will wait for the result. The first test is to check that there are entries in the feed container.
7. The second asynchronous test is to make sure that content is changing when an item in the menu is clicked. This we do by storing the current headline of the first item and comparing it to the first headline after a menu item is clicked. 
