var readstatus = "off";

$(document).ready(function(){

    //Make the toolbar appear from the start.
    $("#toolbar").removeClass("disappear").addClass("appear");

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
        
        
            //Add in submissions
            function populateAccusations() {
                fetch('https://formspree.io/forms/xeoqkpjr/submissions', {
                    headers: {
                        'Authorization': 'Bearer YOUR_API_KEY'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    // Get all submissions
                    let submissions = data.submissions;
                    
                    // Shuffle submissions using Fisher-Yates algorithm
                    for (let i = submissions.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [submissions[i], submissions[j]] = [submissions[j], submissions[i]];
                    }
                    
                    // Take first 8 submissions after shuffle
                    const selectedSubmissions = submissions.slice(0, 8);
                    
                    // Create spans for each selected submission
                    selectedSubmissions.forEach((submission, index) => {
                        // Create new span if it doesn't exist
                        if (!$(`#accusation${index + 1}`).length) {
                            $('#accusationsbox').append(`<span id="accusation${index + 1}" class="accusation"></span>`);
                        }
                        
                        // Add the text to the span
                        $(`#accusation${index + 1}`).text(submission.body.text);
                    });
                })
                .catch(error => console.error('Error:', error));
            }
            
            // Call this function when you want to populate the accusations
            // For example, when the relevant section becomes visible
            populateAccusations();


            


    //Make things draggable.
$("#moretonletter").draggable(
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

    //Toolbar functionality
    $(".reset").click(function(){
        $(".ui-draggable").attr("style","");
        $(".reset").removeClass("appear").addClass("disappear");
        });
    
    setTimeout(() => {
        $(".loadingscreen").removeClass("appear").addClass("disappear");
        }, 4000);


        setTimeout(() => {
            $("#chesterletter").addClass("comeonboardchester").removeClass("comeoffboardchester");
            }, 5000);

    setTimeout(() => {
        $("#moretonletter").addClass("comeonboard").removeClass("comeoffboard");
        }, 6000);

       
    setTimeout(() => {
        $(".flip").addClass("appear").removeClass("disappear");
        $(".read").addClass("appear").removeClass("disappear");
        }, 8000); 





        $(".read").click(function(){
            $("#moretonletter, #chesterletter").css(
                "opacity", "0"
            )
    
            if (readstatus == "off") {
            setTimeout(() => {
    
                $("#moretonletter, #chesterletter p").css({
                    'font-family': '"chapbookregular", serif',
                    'font-size': '0.8vw'
                    });
    
                    readstatus = "on";
                }, 1200)
            }   else if (readstatus == "on") {
                setTimeout(() => {
    
                    $("#moretonletter, #chesterletter p").removeAttr("style");
                    readstatus = "off";
                    }, 1200)

            }
                
            setTimeout(() => {
                $("#moretonletter, #chesterletter").css(
                    "opacity", "1"
                )
            }, 2000)
    

    });

    //Set the accusations...

    

    $(".flip").click(function(){

                $(".markfront").toggleClass("markflip").toggleClass("markflipback");
                $(".markback").toggleClass("markflip").toggleClass("markflipback");
                
        });

});