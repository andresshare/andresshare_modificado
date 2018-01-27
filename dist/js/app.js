AOS.init({
    duration: 1200,
  })

$(document).ready(function() {
    var frm = $('#contactForm');
    frm.bootstrapValidator({
        fields: {
            Name: {
                validators: {
                    notEmpty: {
                        message: 'Your name is required'
                    }
                }
            },
            Email: {
                validators: {
                    notEmpty: {
                        message: 'Your email is required'
                    },
                    emailAddress: {
                        message: 'Your email is not valid'
                    }
                }
            },
            Message: {
                validators: {
                    notEmpty: {
                        message: 'Your message is required'
                    }
                }
            }
        }

    })
        
    .on('success.form.bv', function(e) {
            e.preventDefault();
            $('#contactForm').hide();
            $('#status').html("Sending form, please wait...");
            $('#status').html("Thank you, I've received your message.");
        });
});

// $(document).ready(function() {
//     $(document).on('submit', '#contactForm', function() { 
        
                
//                 var data = $(this).serialize();  
        
//                 $.ajax({  
//                     type : 'POST',
//                     url  : 'connect/cn.php',
//                     data:  new FormData(this),
//                     contentType: false,
//                           cache: false,
//                     processData:false,
        
//                     success :  function(data) {  
//                         $('#contactForm')[0].reset();
//                         $("#status").html(data);
//                     }
//                 });
        
//                 return false;
//             });
        
// });

