console.log("A Master Betrayed!");
console.log("Testing Version 0.9.9.9");

var idpart;
var idparts;
var comeupid;
var parentid;
var inid;
var audiopause;
var currentaudioprocess;
var screenxmouseper;
var screenymouseper;
var totalaudiowidth; 
var leftpercentage;
var audiodrag;
var audiooffset;
var amdragging = false;
var currentmousex;
var currentmousey;
var currentdragpercent;
var audioplaying = false;
var cuptalktimer = 10;
var startflicker = false;
var flickersize = 20;
var doneonce = false;
var currentaudioflutter;
var fluttertimer = 50;
var flutterreset = false;
var modelloaded = false;
var currentmodel = "";
var thispaper;
var readstatus = "off";
var part1done = false;
var part2done = false;
var c15Flipped = false;
var flutterCheckAmount = 0;
var thissub = null;
var thisplayer = null;
var closeactive = false;
var html = document.documentElement;
var seascapeplaying = true;
var submitted = false;


//=============================================

$(document).ready(function(){

//Browser Detect

function detectBrowser() {
    // Check for Chrome
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    
    // Check for Firefox
    const isFirefox = typeof InstallTrigger !== 'undefined';
    
    return {
        isChrome: isChrome,
        isFirefox: isFirefox
    };
}

    const browser = detectBrowser();

    if (browser.isChrome || browser.isFirefox) {
        //Do nothing!
    } else {
$("#browsernote").css("display", "flex");
    }




$("#againbutton").click(function(){
    window.location.replace("http://bonfiredog.co.uk/resources/amasterbetrayed");
});

$("#againbutton2").click(function(){
    window.location.replace("http://bonfiredog.co.uk/resources/amasterbetrayed/kldsnfldsfi");
});

setTimeout(() => {
$(".loadingscreen").removeClass("appear").addClass("disappear");
}, 4000);


            document.addEventListener("mousemove", logKey,{passive: true});
 
                //Move The Flickering.
               function logKey(e) {
                  if ($("#shadow").hasClass("shadow_focus") == false) {
 
            currentmousex = e.clientX;
            currentmousey = e.clientY;
            
            screenxmouseper = (e.clientX / $(window).width()) * 100;
            screenymouseper = ((e.clientY + $(document).scrollTop()) / $("body").height()) * 100;


                    $("#cursor").css(
                        "top", currentmousey + "px"
                    );

                    $("#cursor").css(
                        "left", currentmousex + "px"
                    );

           
                $(".flicker").css(  "mask-image",
              "radial-gradient(circle at top " + screenymouseper + "% left " + screenxmouseper + "%, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0,1) " + flickersize +"%, rgba(0, 0, 0, 0) " + flickersize +"%, rgba(0, 0, 0,1) " + flickersize +"%)"
                );
            
        } 
               }
           

               setInterval(flutterCheck, 1);
       
               function flutterCheck() {
                if (flutterCheckAmount > 0) {
                    flutterCheckAmount -= 1;
                }
               }
   
setInterval(flutter, 1);
       
function flutter() {
    if (currentaudioflutter != null) {
    if (audioplaying == true && currentaudioflutter.hasClass("stflipforward") && flutterCheckAmount == 0) {
    if (fluttertimer > 0) {
        fluttertimer -= 1
    } else {
        var rotate = getRndInteger(-5,5);

        currentaudioflutter.css("transition", "all 20ms ease-in-out");
        currentaudioflutter.css("transform", "translateX("+rotate+"px)");
        setTimeout(resetFlutter, transition + 10);
        fluttertimer = 20;
    }
    } else {
        currentaudioflutter.attr("style", "");
    }
}
}

    function resetFlutter() {
        currentaudioflutter.css("transition", "all 50ms ease-in-out");
        currentaudioflutter.css("transform", "none");
    }





    




//Set height of shadow
var targetheight = $("#boardtop").height() + $("#boardbackground").height();
var targetmain = $(".mainbody").height();

$("#chalklines").css("height", targetmain);



//Set height of all papers based on their onboard paper
$(".paperoutline").each(function() {
    var thisonboard = $(this).siblings(".onboard_paper");
    var onboardheight = thisonboard.height();
    $(this).css("height", onboardheight);
});

$(".paperoutline").each(function() {
    var thisonboard = $(this).siblings(".onboard_front");
    var onboardheight = thisonboard.height();
    $(this).css("height", onboardheight);
});

//Jump Scroll: show what do you think button
$("#cta_button").click(function(){
$("html, body").animate({
    scrollTop: $(".maincontent").offset().top
}, 1000);
setTimeout(() => {
$(".wdyt").removeClass("wdytdisappear").addClass("wdytappear");
  }, 1500); 
  $("#more").removeClass("disappear").addClass("appear");
});

//Appear & Disappear More & WDYT Button
$(window).scroll(function() {
    var windowbottom = $(window).scrollTop() + $(window).height()
if (
($(window).scrollTop() > $("#boardbackground").offset().top) &&
(windowbottom < $("#submissionpaper").offset().top) &&
submitted == false 
)
{
    if ($(".overlay #toolbar").hasClass("disappear")) {
    $("#more").removeClass("disappear").addClass("appear");
    $(".wdyt").removeClass("wdytdisappear").addClass("wdytappear");
    }

} else {
    $("#more").removeClass("appear").addClass("disappear");
    $(".wdyt").removeClass("wdytappear").addClass("wdytdisappear");
}
});

$(".subtitles").scroll(function() {
    if($(this).scrollTop() >= $(this).height()) {
        $(this).siblings(".st_downarrow").css("opacity", "0");
    } else {
        $(this).siblings(".st_downarrow").css("opacity", "1");
    }
});

// SELECTING BOARD ITEMS -----------------------------------------------------|

//Select Paper 
$(".onboard_paper").click(function() {
    idpart = $(this).parent().attr("id");
    idparts = idpart.substring(1);
    comeupid = "#c" + idparts;
    comeupcaptionid = "#cc" + idparts;
    comeuptranscriptid = "#ccc" + idparts;
    comeuptranscriptidalt = "#cccc" + idparts;
    comeuptranscriptidalts = "#ccccc" + idparts;
    comeuptranscriptidaltss = "#cccccc" + idparts;
    comeuptranscriptidaltsss = "#ccccccc" + idparts;
    comeuptranscriptidaltssss = "#cccccccc" + idparts;
    thispaper = $(this);
    $(".overlay").css("pointer-events", "all");

    var comeupcontainer = $(comeupid).siblings(".papercontainer");
    $("#shadow").css("pointer-events", "all");
    $(".wdyt").removeClass("wdytappear").addClass("wdytdisappear");
    $("#more").removeClass("appear").addClass("disappear");
    $(this).addClass("flyOff");
    setTimeout(() => {
    var classToAdd = comeupid.substring(1) + "_" + "comeUp";
    $(comeupid).addClass(classToAdd);
    $(comeupid).addClass("comeUp");
    comeupcontainer.addClass("appear");
      }, 1500);

      setTimeout(() => {
        closeactive = true;
          }, 4000);
    
      setTimeout(() => {
      var captionclassToAdd = comeupcaptionid.substring(1) + "_" + "comeUp";
    $(comeupcaptionid).addClass(captionclassToAdd);
    $(comeupcaptionid).addClass("comeUpCap");
    }, 2000);
    
    setTimeout(() => {
    var transcriptclassToAdd = comeuptranscriptid.substring(1) + "_" + "comeUp";
    $(comeuptranscriptid).addClass(transcriptclassToAdd);
    $(comeuptranscriptid).addClass("comeUpTrans");
    }, 2500);

    setTimeout(() => {
        var transcriptclassToAdd = comeuptranscriptidalt.substring(1) + "_" + "comeUp";
        $(comeuptranscriptidalt).addClass(transcriptclassToAdd);
        $(comeuptranscriptidalt).addClass("comeUpTrans1");
        }, 2700);

        setTimeout(() => {
            var transcriptclassToAdd = comeuptranscriptidalts.substring(1) + "_" + "comeUp";
            $(comeuptranscriptidalts).addClass(transcriptclassToAdd);
            $(comeuptranscriptidalts).addClass("comeUpTrans2");
            }, 2900);

            setTimeout(() => {
                var transcriptclassToAdd = comeuptranscriptidaltss.substring(1) + "_" + "comeUp";
                $(comeuptranscriptidaltss).addClass(transcriptclassToAdd);
                $(comeuptranscriptidaltss).addClass("comeUpTrans3");
                }, 3100);

                setTimeout(() => {
                    var transcriptclassToAdd = comeuptranscriptidaltsss.substring(1) + "_" + "comeUp";
                    $(comeuptranscriptidaltsss).addClass(transcriptclassToAdd);
                    $(comeuptranscriptidaltsss).addClass("comeUpTrans4");
                    }, 3300);

                    setTimeout(() => {
                        var transcriptclassToAdd = comeuptranscriptidaltssss.substring(1) + "_" + "comeUp";
                        $(comeuptranscriptidaltssss).addClass(transcriptclassToAdd);
                        $(comeuptranscriptidaltssss).addClass("comeUpTrans5");
                        }, 3500);
    
    setTimeout(() => {
    $("#shadow").removeClass("shadow_normal").addClass("shadow_focus");
    $("body").css("overflow-y", "hidden");
    $("#toolbar").removeClass("disappear").addClass("appear");
    if (thispaper.hasClass("readfont")) {
        $(".read").removeClass("closed");
    }
    if (thispaper.hasClass("flipper")) {
        $(".flip").removeClass("closed");
    }
      }, 1000)
    
    });


//Close Open Paper
$(".close").click(function(){
    if (closeactive == true) {
    if (audioplaying == true) {
        audioplaying = false;
    }
    $(".overlay").css("pointer-events", "none");
    $(".threedeeloadingsign").removeClass("disappear").addClass("appear");

    if (seascapeplaying == true) {

    }
//Look for the currently open elements.
var toClose = $(".comeUp, .comeUpCap, .comeUpTrans, .comeUpTrans1, .comeUpTrans2, .comeUpTrans3, .comeUpTrans4, .comeUpTrans5");
var upClass =  $(".comeUp").attr("id") + "_" + "comeUp";
var upClassCap = $(".comeUpCap").attr("id") + "_" + "comeUp";
var upClassTrans = $(".comeUpTrans").attr("id") + "_" + "comeUp";
var upClassTrans1 = $(".comeUpTrans1").attr("id") + "_" + "comeUp";
var upClassTrans2 = $(".comeUpTrans2").attr("id") + "_" + "comeUp";
var upClassTrans3 = $(".comeUpTrans3").attr("id") + "_" + "comeUp";
var upClassTrans4 = $(".comeUpTrans4").attr("id") + "_" + "comeUp";
var upClassTrans5 = $(".comeUpTrans5").attr("id") + "_" + "comeUp";
var audioPause = $(".comeUp").children(".player").children(".char_comeup_legend").children(".audiocontainer").children("audio");
var refID = $(".comeUp").attr("id").substring(1);
var toOpen = "#p" + refID;
//Get them off the screen.
$(".comeup_wife, .wifeline, .comeup_caption p, .comeup_caption h2, .captionbox, .comeup_caption ul, .statement_frag, #frag_1, #frag2, #frag3, #frag4, #frag5, #frag6, #frag7, #frag8, #frag9, #frag10, #frag11, #frag12, .markleft, .markright").removeAttr("style");
readstatus = "off";

if (thissub != null) {
thissub.removeClass("stflipforward");
thissub.addClass("stflipback");
}
if (thisplayer != null) {
thisplayer.addClass("stflipforward");
thisplayer.removeClass("stflipback");
}

$(".markfront").addClass("markflip").removeClass("markflipback");
$(".markback").removeClass("markflip").addClass("markflipback");
        


toClose.attr("style", "");
toClose.removeClass("comeUp").removeClass("comeUpCap").removeClass("comeUpTrans").removeClass("comeUpTrans1").removeClass("comeUpTrans2").removeClass(upClassTrans).removeClass(upClassTrans1).removeClass(upClassTrans2).removeClass(upClassTrans3).removeClass(upClassTrans4).removeClass(upClassTrans5).removeClass(upClass).removeClass(upClassCap);
$("#shadow").css("pointer-events", "none");
$("#shadow").removeClass("shadow_focus").addClass("shadow_normal");
$("body").css("overflow-y", "scroll");
$("#toolbar").removeClass("appear").addClass("disappear");
setTimeout(() => {
    $(".read").addClass("closed");
    $(".reset").removeClass("appear").addClass("disappear");
    $(".flip").addClass("closed");
    },1000);
//Bring the onboard paper back
setTimeout(() => {
    $(toOpen).children(".onboard_paper").removeClass("flyOff");
    $(".wdyt").removeClass("wdytdisappear").addClass("wdytappear");
    $("#more").removeClass("disappear").addClass("appear");
    }, 1000)
// ----- Audio Functions
audioPause.animate({volume: 0}, 2000);
setTimeout(() => {audioPause[0].pause();},2000);
setTimeout(() => {clearInterval(currentaudioprocess);},2002);
setTimeout(() => {audioPause.animate({volume: 1})},2200);

closeactive = false;
    }
});

//Playing With Audio

$("#volumecontrol").click(function(){
    if (seascapeplaying == true) {
    $(this).attr("src", "media/volumeoff.png");
    seascapeplaying = false;
    
    } else if (seascapeplaying == false) {
        $(this).attr("src", "media/volumeon.png");
    seascapeplaying = true;
    }
    
    });


 






//Clicking The 'Read' Button 

$(".read").click(function(){
    
        $("#cc8, #c7, #cc9, #ccc12, #c10, #cc10, .captionbox, #cc2c, #cc2a, #cc2, #cc2b, #cc2d, #cc2e, #cc5, #cc5c, #cc5d, #cc5e, #cc5a, #cc5b, #c15, #cc15, #cl_front, #chesterletter, #moretonletter, #cc16").css(
            "opacity", "0"
        )

        setTimeout(() => {
        if (readstatus == "off") {
 
            $(".comeup_caption p, .comeup_caption h2, .captionbox, .comeup_caption h3, .comeup_caption ul, .statement_frag,#frag2, #frag3, #frag4, #frag5, #frag6, #frag7, #frag8, #frag9, #frag10, #frag11, #frag12, .markleft, .markright").css({
                'font-family': '"chapbookregular", serif',
            'font-size': '1.1vw'
            });

            $(".crossout1, .crossout2").css("opacity", "0");

            
            $(".comeup_wife, #chesterletter, #moretonletter").css({
                'font-family': '"chapbookregular", serif',
                'font-size': '1.1vw'
                });

                $("#wifelettercircle1, #wifelettercircle2, #wifelettercircle3, #wifelettercircle4, #wifelettercircle5").css('opacity', '0');

    
                $(".wifeline").css(
                    "opacity", "0"
                );
                readstatus = "on";

        }   else if (readstatus == "on") {
            $(".comeup_wife, .wifeline, .comeup_caption p, .comeup_caption h2, .captionbox, .comeup_caption ul, .statement_frag, #frag_1, #frag2, #frag3, #frag4, #frag5, #frag6, #frag7, #frag8, #frag9, #frag10, #frag11, #frag12, .markleft, .markright, #chesterletter, #moretonletter, .crossout1, .crossout2").removeAttr("style");
            
            $("#wifelettercircle1, #wifelettercircle2, #wifelettercircle3, #wifelettercircle4, #wifelettercircle5").css('opacity', '1');
            readstatus = "off";
        }
    }, 1000);
            
        setTimeout(() => {
            $("#cc8, #c7, #cc9, #ccc12, #c10, #cc10, .captionbox, #cc2c, #cc2a, #cc2, #cc2b, #cc2d, #cc2e, #cc5, #cc5c, #cc5d, #cc5e, #cc5a, #cc5b, #c15, #cc15, #cl_front, #chesterletter, #moretonletter, #cc16").css(
                "opacity", "1"
            )
        }, 1600);
  

       




});


$("#submissionpaper textarea").click(function(){

    part1done = true;

    if (part1done == true && part2done == true) {
        $("#submit").removeClass("disappear").addClass("appear");
    }

});

$("#drawingCanvas").click(function(){
$("#instruction").css("opacity", "0");


part2done = true;

if (part1done == true && part2done == true) {
    $("#submit").removeClass("disappear").addClass("appear");
}
});
  

//Submission

$("#submit").click(function(){
    const submittedText = $("#submissionpaper textarea").val().trim();
    submitted = true;
    if (submittedText) {
        fetch('https://formspree.io/f/xeoqkpjr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: submittedText,
                timestamp: new Date().toISOString()
            })
        });
    }

});


// --------------------------------------------------------------- |

//WDYT moves to last section.
$(".wdyt").click(function(){
    $(this).removeClass("wdytappear").addClass("wdytdisappear");
    $("html, body").animate({
        scrollTop: $("#submissionpaper").offset().top
    }, 1000);
});

//Starting & Stopping Audio
$(".playbutton").click(function(){
    var currentaudio = $(this).siblings("audio")[0];
    if (seascapeplaying == true) {
     
    }
    currentaudio.play();


    $(".player").each(function(){
        if ($(this).parent().hasClass("comeUp")) {
        currentaudioflutter = $(this);
        }
        });
    if (audioplaying == false) {
        audioplaying = true;
    }
    var audid = $(currentaudio).attr("id");
    currentaudioprocess = setInterval( function() { audioUpdate(audid); },1000);
});

$(".pausebutton").click(function(){
var currentaudio = $(this).siblings("audio")[0];
currentaudio.pause();
if (audioplaying == true) {
    audioplaying = false;
}
clearInterval(currentaudioprocess);

if (seascapeplaying == true) {
 
}
});

$(".restartbutton").click(function(){
    var currentaudio = $(this).siblings("audio")[0];
    currentaudio.currentTime = 0;
    currentaudio.play();

    $(".char_comeup_pic").each(function(){
        if ($(this).parent().hasClass("comeUp")) {
        currentaudioflutter = $(this).parent();
        }
        });
    if (audioplaying == false) {
        audioplaying = true;
    }
    var audid = $(currentaudio).attr("id");
    currentaudioprocess = setInterval( function() { audioUpdate(audid); },1000);

});

function audioUpdate(currentplayingaudio) {
    if (amdragging == false) {
    var trackparent = document.getElementById(currentplayingaudio);
    var track = $("#" + currentplayingaudio).siblings(".positionindicator");
    var tracknub = track.children("#positionnub");

    //Get current seconds as a percentage of total.
    var currentpercent = (trackparent.currentTime / trackparent.duration) * 100;

    //Get the total width of the track element.
    var trackwidth = track.width();

    //Find the pixel value of the currentpercent.
    var currentpx = (trackwidth / 100) * currentpercent;

    //Apply this to the slider.
    tracknub.css("left", currentpx);
    }
}

$(".maphs").click(function(){
//Get the correct id for the caption box itself.
var thiscaptionid = $(this).attr("id") + "_caption";
var thisoffclass = $(this).attr("id") + "captionoff";
var thisonclass = $(this).attr("id") + "captionon";

//Bring the new one on-screen.
$("#"+thiscaptionid).attr("style", "");

if ($("#"+thiscaptionid).hasClass(thisonclass)) {
    $("#"+thiscaptionid).removeClass(thisonclass).addClass(thisoffclass);
} else {
    $("#"+thiscaptionid).removeClass(thisoffclass).addClass(thisonclass);
}

});







//Transcripts  As Foldable Oridomi Objects
var $folded = $('.audiotranscript').oriDomi({
    vPanels: [40,60],
    hPanels: 1,
    shading: 'hard',
    speed: 1000,
    shadingIntensity: 1,
    maxAngle:300,
    easingMethod: 'ease-in-out' 
    });

    var $folded2 = $('.statementinner').oriDomi({
        vPanels: 10,
        hPanels: 1,
        shading: 'hard',
        speed: 1000,
        shadingIntensity: 1,
        maxAngle:80,
        easingMethod: 'ease-in-out' 
        });

        var $folded3 = $('.statementouter').oriDomi({
            vPanels: 10,
            hPanels: 1,
            shading: 'hard',
            speed: 1000,
            shadingIntensity: 1,
            maxAngle:70,
            touchEnabled:false,
            easingMethod: 'ease-in-out' 
            });
$folded.oriDomi('accordion', 70);
$folded2.oriDomi('accordion', 70);
$folded3.oriDomi('accordion', 70);

$("#morval, #wenna, #torpoint, #cove, #cliffs, #house, #pub, #duloe, #shutta, #well").click(function(){

var thisimg = $(this).children("img");

thisimg.addClass("clickmap");

setTimeout(() => {
    thisimg.removeClass("clickmap");
    }, 150);


});

$(".reset, .close").hover(function(){
$(this).children(".popup").removeClass("hidden").addClass("shown");
}, function(){
    $(this).children(".popup").removeClass("shown").addClass("hidden");
});

$(".read, .flip").hover(function(){
    $(this).children(".popupr").removeClass("hiddenr").addClass("shownr");
    }, function(){
        $(this).children(".popupr").removeClass("shownr").addClass("hiddenr");
    });



//Make things draggable.
$("#c1, #cc1, #ccc1, #cccc1, #ccccc1, #cccccc1, #ccccccc1, #cccccccc1, #c4, #cc8, #c9, #cc9, #cc10, #cc5c, #cc5b, #cc5a, #cc5e, #cc15, #c12, #cc12, #ccc12, #cc2, #cc2a, #cc2c, #cc2b, #cc2d, #cc2e, #cc16").draggable(
{
    
    start: function( event, ui ) {
        $(".reset").removeClass("disappear").addClass("appear");
        $(this).css("transform", "rotate(0deg)");
        $(this).css("transition", "none");
    },

    stop: function(event, ui) {
        $(this).css("transition", "all 1s ease-in-out");
    }
});

//Make things draggable.
$(".captionbox, #cc3, #cc5, #c16").draggable(
    {
      
        start: function( event, ui ) {
            $(".reset").removeClass("disappear").addClass("appear");
            $(this).css("transition", "none");
        },
        stop: function(event, ui) {
            $(this).css("transition", "all 1s ease-in-out");
        }
    });
    

//Loading the correct model to the paper.

$(".loadmodel").click(function(){
switch ($(this).parent().attr("id")) {
case "p5":
currentmodel = "#c5 iframe";
$(currentmodel).attr("src", "3d/knife/index.html");
break;
case "p5c":
currentmodel = "#c5c iframe";
$(currentmodel).attr("src", "3d/loveidol/index.html");
break;
case "p5b":
currentmodel = "#c5b iframe";
$(currentmodel).attr("src", "3d/lantern/index.html");
break;
case "p5a":
currentmodel = "#c5a iframe";
$(currentmodel).attr("src", "3d/mask/index.html");
break;
case "p5e":
currentmodel = "#c5e iframe";
$(currentmodel).attr("src", "3d/charm/index.html");
break;
case "p5d":
currentmodel = "#c5d iframe";
$(currentmodel).attr("src", "3d/locket/index.html");
break;
}
$(currentmodel).on('load', function(){
$(".threedeeloadingsign").removeClass("appear").addClass("disappear");
});


modelloaded = true;
});


$(".close").click(function() {
    if (modelloaded == true) {
        $(currentmodel).attr("src", "");
    }
});






//Resetting the papers.
$(".reset").click(function(){
$(".ui-draggable").attr("style","");
$(".reset").removeClass("appear").addClass("disappear");
});

//Dragging Nub
$("#positionnub").each(function(){
$(this).draggable({ 
axis: "x",
containment: "parent"
});
});

//Updating track percentage if dragging. 
$('#positionnub').on("dragstart", function(event, ui){
    var me = $(this);
    amdragging = true;

    //Set up the drag.
    audiooffset = $(this).parent().offset();
    totalaudiowidth = $(this).parent().width();
});

$('#positionnub').on("drag", function(event, ui){
 //Find the current mouse position within the box.
 var mousewithinx = currentmousex - audiooffset.left;

 //Find the percentage of the current X position as a function of the entire width, and move the nub with it. 
 currentdragpercent = (mousewithinx / totalaudiowidth) * 100;
});


$('#positionnub').on("dragstop", function(event, ui){
    amdragging = false;
    //Set the current audio position as a percentage of the total track length, based on the current drag percent.
    var myaudioid = $(this).parent().siblings("audio").attr("id");
    var myaudio = document.getElementById(myaudioid);
    var newTime = Math.round((myaudio.duration / 100) * currentdragpercent);
    myaudio.currentTime = newTime;
    
});

// Canvas Drawing

const canvasdraw = $('#drawingCanvas')[0];
const ctxdraw = canvasdraw.getContext('2d');
let drawing = false;

function resizeCanvas() {
    // Set the canvas resolution to match the displayed size
    const rect = canvasdraw.getBoundingClientRect();
    canvasdraw.width = rect.width;
    canvasdraw.height = rect.height;

    // Set drawing style again after resizing
    ctxdraw.strokeStyle = 'black';
    ctxdraw.lineWidth = 2;
}

   // Adjust the canvas size on window resize
   window.addEventListener('resize', resizeCanvas, {passive: true});
   resizeCanvas(); // Initial resize

// Set the drawing settings (thin, black line)
ctxdraw.strokeStyle = 'black';
ctxdraw.lineWidth = 2;

// Start drawing when mouse is pressed down
$('#drawingCanvas').on('mousedown', function(e) {
    drawing = true;
    ctxdraw.beginPath(); // Start a new path
    ctxdraw.moveTo(e.offsetX, e.offsetY); // Move to the current mouse position
});

// Draw while the mouse is moving
$('#drawingCanvas').on('mousemove', function(e) {
    if (drawing) {
        ctxdraw.lineTo(e.offsetX, e.offsetY); // Draw a line to the current position
        ctxdraw.stroke(); // Draw the line
    }
});

// Stop drawing when the mouse is released
$('#drawingCanvas').on('mouseup mouseout', function() {
    drawing = false;
    ctxdraw.closePath(); // Close the path once drawing stops
});


//Submission

//Dragging Cards
const container = document.querySelector('.cardcontainer');
const card = document.querySelector('.card');
const maxRotation = 20; // Maximum rotation in degrees

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    let rotateX = (y - centerY) / 10;
    let rotateY = (centerX - x) / 10;

    // Apply limits
    rotateX = Math.max(-maxRotation, Math.min(maxRotation, rotateX));
    rotateY = Math.max(-maxRotation, Math.min(maxRotation, rotateY));

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
});


$(".flip").click(function(){

//What is currently 'up'?

var upID = $(".comeUp").attr("id");

//Player
if (upID == "c2" || upID == "c2a" || upID == "c2c" || upID == "c2b" || upID == "c2d" || upID == "c2e") {

thissub = $("#" + upID + " .subtitles"); 
thisplayer = $("#" + upID + " .player");  

//Do The Flip!
thissub.toggleClass("stflipforward");
thissub.toggleClass("stflipback");
thisplayer.toggleClass("stflipforward");
thisplayer.toggleClass("stflipback");

flutterCheckAmount = 400;


} else if (upID == "c15") {

        $(".markfront").toggleClass("markflip").toggleClass("markflipback");
        $(".markback").toggleClass("markflip").toggleClass("markflipback");
        
}



});






});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


  