window.daEvents = {
    bleah: new Array(),
    eh: function(evts) {
        this.bleah = evts;
    },
    cycle: 5000
};

$(document).ready(function() {
    $("#cycle").val( window.daEvents.cycle);

    var meh = function() {
    if (!window.location.href.substring(window.location.href.lastIndexOf("?") + 1).match(/city=[a-zA-Z]/)) {
        $.getJSON("http://api.songkick.com/api/3.0/search/locations.json?location=clientip&apikey=jSekVKcNCSbfC91H&jsoncallback=?",
             function (data) {
                 $("#loctitle").html('<i class="fa fa-globe"></i> Location: ' + data.resultsPage.results.location[0].metroArea.displayName + ", " + data.resultsPage.results.location[0].metroArea.state.displayName);
             });

        var today = new Date();
        if (window.daEvents.bleah.length > 0) {
            var diff = 0;
            while (diff < 0) {
                diff = Date.parse(window.daEvents.bleah[0].start.date) - today.getTime();
                if (diff < 0) {
                    var eh = window.daEvents.bleah.shift();
                    $(".staff").children()[0].remove();
                }
            }
        }

        $.getJSON("http://api.songkick.com/api/3.0/events.json?location=clientip&apikey=jSekVKcNCSbfC91H&jsoncallback=?",
             function (data) {

                 var events = data.resultsPage.results.event;
                 var ik;
                 var l = events.length - 1;

                 for (ik = 0; ik < l; ik++) {
                     if (Date.parse(events[ik].start.date) - today.getTime() > 5259492000) {
                        break;
                     }
                 }
                 while (l > ik) {
                     events.pop();
                     l--;
                 }
                 var oldEvents = window.daEvents.bleah;
                 window.daEvents.eh(events);
                 if (events !== undefined) {
                     $("#objectsRet").text('Objects Returned: ' + events.length);
                     for (var i = 0; i < events.length; i++) {
                         if (oldEvents.map(function (o) {
                                 return o.displayName;
                             }).indexOf(events[i].displayName) < 0) {
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
                 }
             });

     }
     else {
         var query = window.location.href.substring(window.location.href.lastIndexOf("?") + 1).split("=")[1];
         var locID = {
             p: "",
             meh: function(data) {
                 $("#loctitle").html('<i class="fa fa-globe"></i> Location: ' + data.resultsPage.results.location[0].metroArea.displayName + ", " + data.resultsPage.results.location[0].metroArea.state.displayName);
                 this.p = data.resultsPage.results.location[0].metroArea.id;
                 funky.pok(this.p);
             }
         };

         var funky = {
             pok: function(p) {$.getJSON("http://api.songkick.com/api/3.0/metro_areas/" + p +"/calendar.json?&apikey=jSekVKcNCSbfC91H&jsoncallback=?",
             function (data) {
                 var today = new Date();
                 if (window.daEvents.bleah.length > 0) {
                     var diff = 0;
                     while (diff < 0) {
                         diff = Date.parse(window.daEvents.bleah[0].start.date) - today.getTime();
                         if (diff < 0) {
                             window.daEvents.bleah.shift();
                             $(".staff").children()[0].remove();
                         }
                     }
                 }
                 var events = data.resultsPage.results.event;
                 var ik;
                 var l = events.length - 1;
                 for (ik = 0; ik < l; ik++) {
                     if (Date.parse(events[ik].start.date) - today.getTime() > 5259492000) {
                         break;
                     }
                 }
                 while (l > ik) {
                     events.pop();
                     l--;
                 }
                 var oldEvents = window.daEvents.bleah;
                 window.daEvents.eh(events);
                 if (events !== undefined) {
                     $("#objectsRet").text('Objects Returned: ' + events.length);
                     for (var i = 0; i < events.length; i++) {
                         if (oldEvents.map(function (o) {
                                 return o.displayName;
                             }).indexOf(events[i].displayName) < 0) {
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
                 }
             });
             }
         };

         $.getJSON("http://api.songkick.com/api/3.0/search/locations.json?query=" + query + "&apikey=jSekVKcNCSbfC91H&jsoncallback=?", locID.meh);



     }
    }



    meh();
    setInterval(meh, window.daEvents.cycle);

     $("#toggleSetLoc").toggle();
     $(".eventinfo").hide();


     $("body").on('click', '.note', function() {
         var j = $(this).prevAll().length;
         var note = $(this).attr('class');
         $("#artist").text(window.daEvents.bleah[j].performance[0].displayName);
         $("#venue").text(window.daEvents.bleah[j].venue.displayName);
         if (window.daEvents.bleah[j].start.time !== null) {
            $("#time").text(new Date(Date.parse(window.daEvents.bleah[j].start.date + " " + window.daEvents.bleah[j].start.time)));
         }
         else {
            $("#time").text(new Date(Date.parse(window.daEvents.bleah[j].start.date)).toDateString());
         }
         $(".eventinfo").hide();
         $(".eventinfo").toggle(100);
        var audio = new Audio("mp3notes/" + note + ".mp3");
        audio.play();
     });

     $("body").on('click', '.eventinfo', function() {
         $(".eventinfo").hide();
     });

     $("#loc").hover(function() {
         $("#toggleSetLoc").toggle("fast", function() {

         });
     });

    $("#cycle").change(function (){
        window.daEvents.cycle = Number($(this).val());
    })
 });
