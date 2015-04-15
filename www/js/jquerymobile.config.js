console.log('Initializing JQuery Mobile...');

var toast=function(msg){
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h3>"+msg+"</h3></div>")
        .css({ display: "block",
            opacity: 0.90,
            position: "fixed",
            padding: "7px",
            "text-align": "center",
            width: "270px",
            left: ($(window).width() - 284)/2,
            top: $(window).height() - 110 })
        .appendTo( $.mobile.pageContainer ).delay( 1500 )
        .fadeOut( 400, function(){
            $(this).remove();
        });
};

$(document).bind("mobileinit", function(){

// Disable jQM routing and component creation events
    // disable hash-routing
    $.mobile.hashListeningEnabled = false;
    // disable anchor-control
    $.mobile.linkBindingEnabled = false;
    // can cause calling object creation twice and back button issues are solved
    $.mobile.ajaxEnabled = false;
    // Otherwise after mobileinit, it tries to load a landing page
    $.mobile.autoInitializePage = false;
    // we want to handle caching and cleaning the DOM ourselves
    $.mobile.page.prototype.options.domCache = false;

// consider due to compatibility issues
    // not supported by all browsers
    $.mobile.pushStateEnabled = false;
    // Solves phonegap issues with the back-button
    $.mobile.phonegapNavigationEnabled = true;
    //no native datepicker will conflict with the jQM component
    $.mobile.page.prototype.options.degradeInputs.date = true;
});

