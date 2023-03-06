/*==============================================================*/
// Contact Form  JS
/*==============================================================*/
(function ($) {
    "use strict"; // Start of use strict
    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            // PATRIZIO
            // index.html
            /* <a href="../en-US/about.html" id="lang" title="Vivasoft s.r.l. en-US" class="nav-link"><font color="white">en-US </font> 
                <img src="../assets/images/en-US.jpeg" alt="Vivasoft S.R.L." style="border: 1px solid #ffffff;" />
            </a> */
            var lang = document.getElementById("langMail");
            lang = lang.innerText.trimEnd();
            if (lang == "en-US") {
                submitMSG(false, "Il form é stato compilato correttamente?");
            }

            if (lang == "it-IT") {
                submitMSG(false, "Have you completed the form correctly?");
                // submitMSG(false, "Did you fill in the form properly?");
            }
            
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });


    function submitForm(){
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var msg_subject = $("#msg_subject").val();
        var phone_number = $("#phone_number").val();
        var message = $("#message").val();


        $.ajax({
            type: "POST",
            url: "../assets/php/form-process.php",
            data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&phone_number=" + phone_number + "&message=" + message,
            success : function(text){
                if (text == "success"){
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false,text);
                }
            }
        });
    }

    function formSuccess(){
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }

    function formError(){
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "h4 tada animated text-success";
        } else {
            var msgClasses = "h4 text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict