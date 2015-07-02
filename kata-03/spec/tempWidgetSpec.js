// display temperature (ajax call)
// display update button
// when user clicks on button widget should update temperature

describe("TempWidget", function(){
    var $parent, widget;

    beforeEach(function(){
        $parent = $('<div class="test-parent"></div>').appendTo('body');
    });

    it('tempWidget should exist', function(){
        expect(TempWidget).toBeDefined();
    });
});