/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Tests that the allFeeds variable has been defined
         * and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not empty.
         * This is very similar to the first test but on the URL element.
         */
		 
        it('have URL defined and the URL is not empty', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			});
        });


        /* Test that loops through each feed in the allFeeds object
         * and ensures it has a name defined, that the name is actually
         * a string of text and not an object and that the name is not empty.
         */
        it('have a name defined and the name is not empty', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(typeof feed.name).toEqual('string');
				expect(feed.name.length).toBeGreaterThan(0);
			});
        });
		 
    });


    /* Suite dealing with the menu */
    describe('The menu', function() {
        /* Test that ensures the menu element is hidden by default.
         * This is done by looking for the the class "menu-hidden" 
		 * on the 'body' element. 
		 * The program hides and shows the menu element by adding
		 * and removing this class. The class contains the CSS code
		 * that hides the element. 
         */
        it('is hidden by default', function() {
			var hidden = $('body').hasClass('menu-hidden');
            expect(hidden).toBe(true);
        });

         /* Test that ensures the menu changes visibility when 
          * the menu icon is clicked. The test assumes the menu  
		  * is hidden by default -- tested in the last test. and 
		  * So the first expectation is that on clicking the menu
		  * icon it should become visible.
		  * The second expectation is that when it is clicked again
		  * it should hide.
          */
        it('shows/hides when menu icon is clicked', function() {
			var menuItem = $('.menu-icon-link');
			menuItem.click();
			expect($('body').hasClass('menu-hidden')).toBe(false);
			menuItem.click();
			expect($('body').hasClass('menu-hidden')).toBe(true);
        });
   });

    /* Test suite to test the initial entries */
   describe('Initial Entries', function() {

        /* This test ensures that when the asynchronous loadFeed function 
         * is called and completes its work, there is at least one .entry element
         * in the .feed container.
         */
		var retFeed;
		
		beforeEach(function(done) {
			loadFeed(0);
			setTimeout(function() {
				retFeed = $('.feed').html();
				done();
			}, 500);
		});
		
		it('should get called and have at least one feed.', function() {
			expect(retFeed.length).toBeGreaterThan(0);
		});

	});

    /* TODO: Write a new test suite named "New Feed Selection" */
	describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
		 
		var firstFeed,
			secondFeed;
			
		beforeEach(function(done) {
			loadFeed(0);
			setTimeout(function() {
				firstFeed = $('.feed').html();
				done();
			}, 500);
		});
		
		it('should change the feed content', function() {
			loadFeed(1);
			setTimeout(function() {
				secondFeed = $('.feed').html();
			}, 500);
			expect(firstFeed).not.toEqual(secondFeed);
		});

	});
		 
}());
