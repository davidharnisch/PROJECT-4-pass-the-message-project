
    (function() {
        //Select the input element
        const form = document.querySelector('#message-form')
        //Set up Submit Button
        form.addEventListener('submit', function(e){
            // prevent the form's default submission action
            e.preventDefault()
            //Get user's input from from

        var inputVal = document.getElementById("message").value;
        document.querySelector(".message-content").innerHTML = inputVal;


        document.getElementById("message-form").reset();
          
        if (inputVal == "") {
         document.querySelector(".feedback").style.display = "block";

     setTimeout(function(){ document.querySelector(".feedback").style.display = "none"; }, 2000);

            return false;
          }; 
        
        
         
        })
        })()