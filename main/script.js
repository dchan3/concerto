window.daEvents = {
    bleah: new Array(),
    eh: function(evts) {
        this.bleah = evts;
    }
};

$(window).on("load", function() {
     if (!window.location.href.substring(window.location.href.lastIndexOf("?") + 1).match(/city=[a-zA-Z]/)) {
     $.getJSON("http://api.songkick.com/api/3.0/search/locations.json?location=clientip&apikey=jSekVKcNCSbfC91H&jsoncallback=?",
             function (data) {
                 $("#loctitle").append(data.resultsPage.results.location[0].metroArea.displayName + ", " + data.resultsPage.results.location[0].metroArea.state.displayName);
             });

         $.getJSON("http://api.songkick.com/api/3.0/events.json?location=clientip&apikey=jSekVKcNCSbfC91H&jsoncallback=?",
             function (data) {
                 var events = data.resultsPage.results.event;
                 window.daEvents.eh(events);
                 if (events !== undefined) {
                     for (var i = 0; i < events.length; i++) {
                         var node = $('<div><img src="0001.png"></div>');
                         var number = Math.floor(Math.random() * 11) + 1;
                         var retval = "note ";
                         switch (number) {
                             case 1:
                                 retval += "d";
                                 break;
                             case 2:
                                 retval += "e";
                                 break;
                             case 3:
                                 retval += "f";
                                 break;
                             case 4:
                                 retval += "g";
                                 break;
                             case 5:
                                 retval += "a";
                                 break;
                             case 6:
                                 retval += "b";
                                 break;
                             case 7:
                                 retval += "c";
                                 break;
                             case 8:
                                 retval += "d1";
                                 break;
                             case 9:
                                 retval += "e1";
                                 break;
                             case 10:
                                 retval += "f1";
                                 break;
                             case 11:
                                 retval += "g1";
                                 break;
                         }
                         node.addClass(retval);
                         $(".staff").append(node);
                     }
                 }
             });
     }
     else {
         var query = window.location.href.substring(window.location.href.lastIndexOf("?") + 1).split("=")[1];
         var locID = {
             p: "",
             meh: function(data) {
                 $("#loctitle").append(data.resultsPage.results.location[0].metroArea.displayName + ", " + data.resultsPage.results.location[0].metroArea.state.displayName);
                 this.p = data.resultsPage.results.location[0].metroArea.id;
                 funky.pok(this.p);
             }
         };

         var funky = {
             pok: function(p) {$.getJSON("http://api.songkick.com/api/3.0/metro_areas/" + p +"/calendar.json?&apikey=jSekVKcNCSbfC91H&jsoncallback=?",
             function (merr) {
                 var events = merr.resultsPage.results.event;
                 window.daEvents.eh(events);
                 if (events !== undefined) {
                     for (var i = 0; i < events.length; i++) {
                         var node = $('<div><img src="0001.png"></div>');
                         var number = Math.floor(Math.random() * 11) + 1;
                         var retval = "note ";
                         switch (number) {
                             case 1:
                                 retval += "d";
                                 break;
                             case 2:
                                 retval += "e";
                                 break;
                             case 3:
                                 retval += "f";
                                 break;
                             case 4:
                                 retval += "g";
                                 break;
                             case 5:
                                 retval += "a";
                                 break;
                             case 6:
                                 retval += "b";
                                 break;
                             case 7:
                                 retval += "c";
                                 break;
                             case 8:
                                 retval += "d1";
                                 break;
                             case 9:
                                 retval += "e1";
                                 break;
                             case 10:
                                 retval += "f1";
                                 break;
                             case 11:
                                 retval += "g1";
                                 break;
                         }
                         node.addClass(retval);
                         $(".staff").append(node);
                     }
                 }
             });
             }
         };

         $.getJSON("http://api.songkick.com/api/3.0/search/locations.json?query=" + query + "&apikey=jSekVKcNCSbfC91H&jsoncallback=?", locID.meh);
     }
});

 $(document).ready(function() {
     $("#toggleSetLoc").toggle();
     $(".eventinfo").hide();
     $("body").on('click', '.note', function() {
         var j = $(this).prevAll().length;
         $("#artist").text(window.daEvents.bleah[j].performance[0].displayName);
         $("#venue").text(window.daEvents.bleah[j].venue.displayName);
         $("#time").text(window.daEvents.bleah[j].start.date + " " + window.daEvents.bleah[j].start.time);
         $(".eventinfo").hide();
         $(".eventinfo").toggle(100);
     });

     $("body").on('click', '.eventinfo', function() {
         $(".eventinfo").hide();
     });

     $("#loc").hover(function() {
         $("#toggleSetLoc").toggle("fast", function() {

         });
     });
 });