
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





//     function getInputValue(){
//     // Selecting the input element and get its value 
//     var inputVal = document.getElementById("message").value;

//     console.log(inputVal)

// }           
         
        
         
        })
        })()