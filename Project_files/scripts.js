 $(window).scroll(function(){
        var scroll = $(document).scrollTop();
        var s = {
            "nohuman" : scroll >= 0 && scroll < 1600,
            "human1" : scroll >= 1600 && scroll < 2000,
            "human2" : scroll >= 2000 && scroll < 2400,
            "human3" : scroll >= 2400 && scroll < 2800,
            "human4" : scroll >= 2800 && scroll < 3200,
        }
        console.log(scroll)
        console.log(s.human1)
        if( scroll > 1500 ){
            switch (true) {
                case s.nohuman :
                $('#human_1').addClass('d-none').removeClass('animated fadeInDown')
                $('#eye').addClass('d-none').removeClass('animated fadeInDown')

                break;
            case s.human1 :
            $('#eye').removeClass('d-none').addClass('animated fadeInDown')
                $('#human_1').removeClass('d-none').addClass('animated fadeInDown')
                $('#human_2').addClass('d-none').removeClass('animated fadeInDown')
                $('#human_3').addClass('d-none').removeClass('animated fadeInDown')
                $('#heart').addClass('d-none').removeClass('animated fadeInDown')
                break;
            case s.human2 :
            $('#eye').addClass('d-none').removeClass('animated fadeInDown')
            $('#heart').removeClass('d-none').addClass('animated fadeInDown')
                $('#human_1').addClass('d-none').removeClass('animated fadeInDown')
                $('#human_2').removeClass('d-none').addClass('animated fadeInDown')
                $('#human_3').addClass('d-none').removeClass('animated fadeInDown')
                $('#kidney').addClass('d-none').removeClass('animated fadeInDown')
                break;
             case s.human3 :
             $('#foot').addClass('d-none').removeClass('animated fadeInDown')
             $('#kidney').removeClass('d-none').addClass('animated fadeInDown')
             $('#heart').addClass('d-none').removeClass('animated fadeInDown')
             $('#human_2').addClass('d-none').removeClass('animated fadeInDown')
             $('#human_3').removeClass('d-none').addClass('animated fadeInDown')
             $('#human_4').addClass('d-none').removeClass('animated fadeInDown')
                break;
                case s.human4 :
                $('#foot').removeClass('d-none').addClass('animated fadeInDown')
                $('#kidney').addClass('d-none').removeClass('animated fadeInDown')
             $('#human_3').addClass('d-none').removeClass('animated fadeInDown')
             $('#human_4').removeClass('d-none').addClass('animated fadeInDown')
                break;
                
            default:
                console.log('Sorry, we are out of ' + '.');
            }
        }
    });

$(".mat-input").focus(function(){
$(this).parent().addClass("is-active is-completed");
});

$(".mat-input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
})



$(document).ready(function() {
    $("#con1").click(function(){
        $('#cond1').removeClass('d-none');
        $('#cond2').addClass('d-none');
        $('#cond3').addClass('d-none');
        $('#cond4').addClass('d-none');
        $('#cond5').addClass('d-none');
        $('#cond6').addClass('d-none');
    }); 
});

$(document).ready(function() {
    $("#con2").click(function(){
        $('#cond2').removeClass('d-none');
        $('#cond1').addClass('d-none');
        $('#cond3').addClass('d-none');
        $('#cond4').addClass('d-none');
        $('#cond5').addClass('d-none');
        $('#cond6').addClass('d-none');
    }); 
});
$(document).ready(function() {
    $("#con3").click(function(){
        $('#cond3').removeClass('d-none');
        $('#cond1').addClass('d-none');
        $('#cond2').addClass('d-none');
        $('#cond4').addClass('d-none');
        $('#cond5').addClass('d-none');
        $('#cond6').addClass('d-none');
    }); 
});
$(document).ready(function() {
    $("#con4").click(function(){
        $('#cond4').removeClass('d-none');
        $('#cond1').addClass('d-none');
        $('#cond2').addClass('d-none');
        $('#cond3').addClass('d-none');
        $('#cond5').addClass('d-none');
        $('#cond6').addClass('d-none');
    }); 
});
$(document).ready(function() {
    $("#con5").click(function(){
        $('#cond5').removeClass('d-none');
        $('#cond1').addClass('d-none');
        $('#cond2').addClass('d-none');
        $('#cond3').addClass('d-none');
        $('#cond4').addClass('d-none');
        $('#cond6').addClass('d-none');
    }); 
});
$(document).ready(function() {
    $("#con6").click(function(){
        $('#cond6').removeClass('d-none');
        $('#cond1').addClass('d-none');
        $('#cond2').addClass('d-none');
        $('#cond3').addClass('d-none');
        $('#cond4').addClass('d-none');
        $('#cond5').addClass('d-none');
    }); 
});
$(document).ready(function() {
    $("#conBtn").click(function(){
        $('#total').removeClass('d-none');
        $('#cond6').addClass('d-none');
        $('#cond1').addClass('d-none');
        $('#cond2').addClass('d-none');
        $('#cond3').addClass('d-none');
        $('#cond4').addClass('d-none');
        $('#cond5').addClass('d-none');
    }); 
});
$(document).ready(function() {
    $("#conBtn").click(function(){
        $('#total').removeClass('d-none');
        $('#cond6').addClass('d-none');
        $('#cond1').addClass('d-none');
        $('#cond2').addClass('d-none');
        $('#cond3').addClass('d-none');
        $('#cond4').addClass('d-none');
        $('#cond5').addClass('d-none');
    }); 
});

// $(document).ready(function() {
//     $("#textBtn").click(function(){
//         $('#totalper').removeClass('d-none');

//         var address1=document.getElementById("address1").value;  
//         $("#addressx1").text(address1);
//         var address2=document.getElementById("address2").value;  
//         $("#addressx2").text(address2);
//         var address3=document.getElementById("address3").value;  
//         $("#addressx3").text(address3);
//         var address4=document.getElementById("address4").value;  
//         $("#addressx4").text(address4);
//         var address5=document.getElementById("address5").value;  
//         $("#addressx5").text(address5);
//         var address6=document.getElementById("address6").value;  
//         $("#addressx6").text(address5);
//     }); 
// });


// $(".choice_1:radio").on("change", function(){
//     var total = 0;
//     $(".choice_1:radio:checked").each(function(){
//         total += Number(this.value);
//     });
    
//     $("#total").text(total.toFixed(2));
// });

    var choiceValue = []

    $("input[type='radio']").on("change",function(e){
        var choice_number = e.target.dataset.choice
        choiceValue[choice_number - 1] = parseFloat(this.value)
    })

$(document).ready(function() {
    $("#conBtn").click(function(){
        
        

        console.log(choiceValue)

        var data = {
            "value1": choiceValue[0],
            "value2": choiceValue[1],
            "value3": choiceValue[2],
            "value4": choiceValue[3],
            "value5": choiceValue[4],
            "value6": choiceValue[5]
         
        }

        console.log(data)

        var a = $.ajax({
            type: "POST",
            url: "https://diabetes-flask.herokuapp.com/api/v1/predict-certainly-factor",
            data: JSON.stringify(data),
            success: console.log('well'),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
          }).done(function(res) {
            let result = resResultByLength(res.percentageCertainlyFactor)
            
            console.log(result);

          }).fail(function(){
            $('#cond7').removeClass('d-none');
           
            console.log('request fail')
          })
          ;
        
        function resResultByLength(pcf){
            switch (true) {
                case a <= 0.51 && a > 0.11 :
                return 'มีความเสียงมาก'
                break
                case  a <= 0.11 && a > -0.29 :
                return 'มีความเสี่ยงปานกลาง'
                break
                case  a <= -0.29 && a > -0.69:
                return 'มีความเสี่ยงค่อนข้างน้อย'
            }
        }
            
    })
})



var textValue = []
$("input[type='text']").on("change",function(e){
    var text_number = e.target.dataset.text
    textValue[text_number - 1] = parseFloat(this.value)
   
})

$(document).ready(function() {
    $("#textBtn").click(function(){
        
        
       

        var data = {
            "value1": 0,
            "value2": textValue[0],
            "value3": textValue[1],
            "value4": textValue[2],
            "value5": textValue[3],
            "value6": document.querySelector('input[name="Xna"]:checked').value
         
        }

        console.log(data)

        var a = $.ajax({
            type: "POST",
            url: "https://diabetes-flask.herokuapp.com/api/v1/predict-certainly-factor",
            data: JSON.stringify(data),
            success: console.log('well'),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
          }).done(function(res) {
            let result = textResultByLength(res)
            console.log(result);
            
          }).fail(function(){
            $('#addressx1').removeClass('d-none');
            console.log('request fail')
            
          
          })
          ;
        
        //   function textResultByLength(percen){
        //     switch (true) {
        //         case a >= 0 && a < 0.25 :
        //         return 'มีความเสียงมาก'
        //         break
        //         case  a >=0.25 && a < 0.5 :
        //         return 'มีความเสี่ยงปานกลาง'
        //         break
        //         case  a >= 0.5 && a < 0.75:
        //         return 'มีความเสี่ยงค่อนข้างน้อย'
        //         break
        //         case  a >= 0.75 && a <= 1:
        //         return 'มีความเสี่ยงค่อนข้างน้อย'
        //     }
        // }
   
            
    })
})