$(window).scroll(function () {
    var scroll = $(document).scrollTop();
    var s = {
        "nohuman": scroll >= 0 && scroll < 1600,
        "human1": scroll >= 1600 && scroll < 2000,
        "human2": scroll >= 2000 && scroll < 2400,
        "human3": scroll >= 2400 && scroll < 2800,
        "human4": scroll >= 2800 && scroll < 3200,
    }
    console.log(scroll)
    
    if (scroll > 1500) {
        switch (true) {
            case s.nohuman:
                $('#human_1').addClass('d-none').removeClass('animated fadeInDown')
                $('#eye').addClass('d-none').removeClass('animated fadeInDown')

                break;
            case s.human1:
                $('#eye').removeClass('d-none').addClass('animated fadeInDown')
                $('#human_1').removeClass('d-none').addClass('animated fadeInDown')
                $('#human_2').addClass('d-none').removeClass('animated fadeInDown')
                $('#human_3').addClass('d-none').removeClass('animated fadeInDown')
                $('#heart').addClass('d-none').removeClass('animated fadeInDown')
                break;
            case s.human2:
                $('#eye').addClass('d-none').removeClass('animated fadeInDown')
                $('#heart').removeClass('d-none').addClass('animated fadeInDown')
                $('#human_1').addClass('d-none').removeClass('animated fadeInDown')
                $('#human_2').removeClass('d-none').addClass('animated fadeInDown')
                $('#human_3').addClass('d-none').removeClass('animated fadeInDown')
                $('#kidney').addClass('d-none').removeClass('animated fadeInDown')
                break;
            case s.human3:
                $('#foot').addClass('d-none').removeClass('animated fadeInDown')
                $('#kidney').removeClass('d-none').addClass('animated fadeInDown')
                $('#heart').addClass('d-none').removeClass('animated fadeInDown')
                $('#human_2').addClass('d-none').removeClass('animated fadeInDown')
                $('#human_3').removeClass('d-none').addClass('animated fadeInDown')
                $('#human_4').addClass('d-none').removeClass('animated fadeInDown')
                break;
            case s.human4:
                $('#foot').removeClass('d-none').addClass('animated fadeInDown')
                $('#kidney').addClass('d-none').removeClass('animated fadeInDown')
                $('#human_3').addClass('d-none').removeClass('animated fadeInDown')
                $('#human_4').removeClass('d-none').addClass('animated fadeInDown')
                break;

            default:
                
        }
    }
});

$(".mat-input").focus(function () {
    $(this).parent().addClass("is-active is-completed");
});

$(".mat-input").focusout(function () {
    if ($(this).val() === "")
        $(this).parent().removeClass("is-completed");
    $(this).parent().removeClass("is-active");
})



$(document).ready(function () {
    $("#con1").click(function () {
        $('#cond1').removeClass('d-none');
        $('#cond2').addClass('d-none');
        $('#cond3').addClass('d-none');
        $('#cond4').addClass('d-none');
        $('#cond5').addClass('d-none');
        $('#cond6').addClass('d-none');
       
    });
});

$(document).ready(function () {
    $("#con2").click(function () {
        $('#cond2').removeClass('d-none');
        $('#cond1').addClass('d-none');
        $('#cond3').addClass('d-none');
        $('#cond4').addClass('d-none');
        $('#cond5').addClass('d-none');
        $('#cond6').addClass('d-none');
        
    });
});
$(document).ready(function () {
    $("#con3").click(function () {
        $('#cond3').removeClass('d-none');
        $('#cond1').addClass('d-none');
        $('#cond2').addClass('d-none');
        $('#cond4').addClass('d-none');
        $('#cond5').addClass('d-none');
        $('#cond6').addClass('d-none');
        
    });
});
$(document).ready(function () {
    $("#con4").click(function () {
        $('#cond4').removeClass('d-none');
        $('#cond1').addClass('d-none');
        $('#cond2').addClass('d-none');
        $('#cond3').addClass('d-none');
        $('#cond5').addClass('d-none');
        $('#cond6').addClass('d-none');
        
    });
});
$(document).ready(function () {
    $("#con5").click(function () {
        $('#cond5').removeClass('d-none');
        $('#cond1').addClass('d-none');
        $('#cond2').addClass('d-none');
        $('#cond3').addClass('d-none');
        $('#cond4').addClass('d-none');
        $('#cond6').addClass('d-none');
      
    });
});
$(document).ready(function () {
    $("#con6").click(function () {
        $('#cond6').removeClass('d-none');
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

$("input[type='radio']").on("change", function (e) {
    var choice_number = e.target.dataset.choice
    choiceValue[choice_number - 1] = parseFloat(this.value)
})

$(document).ready(function () {
    $("#conBtn").click(function () {

   

        console.log(choiceValue)

        var data = {
            "uria": choiceValue[0],
            "fatique": choiceValue[1],
            "thirst": choiceValue[2],
            "vision": choiceValue[3],
            "weight": choiceValue[4],
            "hunger": choiceValue[5]
           

        }

        console.log(data)

        var a = $.ajax({
            type: "POST",
            url: "https://diabetes-flask.herokuapp.com/api/v1/predict-certainly-factor",
            data: JSON.stringify(data),
            success: console.log('well'),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).done(function (res) {
            
            console.log("api ",res.probabilityCertainlyFactor);
            let result = resResultByLength(res.probabilityCertainlyFactor)
            
            $("#resultA2").text(result.text1)
            $("#resultA2").css('color',result.color1)
             $("#resultA3").text(result.text2)
            $("#resultA3").css('color',result.color2)
            $("pic1").addClass('d-none');
            

        }).fail(function () {
            
            

            console.log('request fail')
        })
            ;
            
           
        function resResultByLength(pcf) {
            switch (true) {
                case pcf <= -0.29 && pcf >= -0.69:
                let casee3 = {
                    "text1" : 'มีความเสี่ยงค่อนข้างน้อย ',
                    "text2":'จากการวิเคราะห์อาการเบื้องต้นคุณที่โอกาสเป็นโรคเบาหวานค่อนข้างน้อย แนะนำให้รักษาสุขภาพโดย การออกกำลังกายอย่างสม่ำเสมอ พักผ่อนให้เพียงพอ ทานอาหารที่มีประโยชน์ หมั่นสังเกตตัวเองอยู่เสมอ และตรวจร่างกายเป็นประจำอย่างน้อยปีละ 1 ครั้ง',
                    "color1"  : '#7fff00',
                    "color2"  : '#000000',
                  
                  
                }
                return casee3
                
                case pcf <= 0.11 && pcf > -0.29:
                let casee2 = {
                    "text1" : 'มีความเสี่ยงปานกลาง ',
                    "text2" :'จากการวิเคราะห์อาการเบื้องต้นคุณที่โอกาสเป็นโรคเบาหวานปานกลาง แนะนำให้หาเวลว่างเข้ารับการตรวจเพื่อนำค่า ความดันเลือด ระดับน้ำตาลกลูโคสในเลือด และปริมาณอินซูลิน จากห้องแล็บ คลีนิคทั่วไป หรือโรงพยาบาล เพื่อทำการวินิจฉัยโอกาสในส่วนที่ 2 และหมั่นรักษาสุขภาพโดย การออกกำลังกายอย่างสม่ำเสมอ พักผ่อนให้เพียงพอและทานอาหารที่มีประโยชน์',
                    "color1"  : '#ffff00',
                    "color2"  : '#000000',
                  
                }
                return casee2
                break
                case pcf <= 0.51 && pcf > 0.11:
                let casee1 = {
                    "text1" : 'มีความเสี่ยงมาก',
                    "text2" : 'จากการวิเคราะห์อาการเบื้องต้นคุณมีโอกาสเป็นโรคเบาหวานสูง ควรรีบเข้ารับการตรวจเพื่อนำค่า ความดันเลือด ระดับน้ำตาลกลูโคสในเลือด และปริมาณอินซูลิน จากห้องแล็บ คลีนิคทั่วไป หรือโรงพยาบาล เพื่อทำการวินิจฉัยโอกาสในส่วนที่ 2 อย่างเร่งด่วน หรือเข้าพบแพทย์เพื่อรับคำปรึกษาหากสามารถนัดเวลาได้อย่างทันที',
                    "color1"  : '#ff0000',
                    "color2"  : '#000000',
                  
                }
                return casee1
                break
                
                
            }
        }

    })
})


var textValue = []
$("input[type='text']").on("change", function (e) {
    var text_number = e.target.dataset.text
    textValue[text_number - 1] = parseFloat(this.value)

})


$(document).ready(function () {
   
 
    $("#textBtn").click(function () {

        if (document.form1.n1.value == "") {
            alert('กรุณากรอกน้ำหนัก');
            document.form1.n1.focus();
            return false;
        }
        if (document.form1.n2.value == "") {
            alert('กรุณากรอกส่วนสูง');
            document.form1.n2.focus();
            return false;
        }
 if (document.form1.n3.value == "") {
            alert('กรุณากรอกอายุ');
            document.form1.n3.focus();
            return false;
        }
        if (document.form1.n4.value == "") {
            alert('กรุณากรอกปริมาณกรูโคส');
            document.form1.n4.focus();
            return false;
        }
        if (document.form1.n5.value == "") {
            alert('กรุณากรอกความดันเลือด');
            document.form1.n5.focus();
            return false;
        }
        if (document.form1.Xna.value == "") {
            alert('กรุณาเลือกประวัติเบาหวานทางพันธุกรรม');
            document.form1.Xna.focus();
            return false;
        }
        // if (document.form1.n7.value == "") {
        //     alert('กรุณากรอกปริมาณอินซูลิน');
        //     document.form1.n7.focus();
        //     return false;
        // }
        // if (document.form1.n8.value == "") {
        //     alert('ท้องกี่ครั้ง');
        //     document.form1.n8.focus();
        //     return false;
        // }
        
       
        
       

        var n1Val = $('input[name="n1"]').val()
        var n2Val = $('input[name="n2"]').val()

        var data = {
            "bmi": n1Val/Math.pow(n2Val,2),
            "age": textValue[0],
            "insulin": textValue[4] !== undefined ? textValue[4] : 0 ,
            "glucose": textValue[1],
            "bloodPressure": textValue[2],
            "skinThickness": textValue[3] !== undefined ? textValue[3] : 0,
           "pregnancies": textValue[5] !== undefined ? textValue[5] : 0,
            "diabetesPedigreeFunction": parseFloat(document.querySelector('input[name="Xna"]:checked').value)

           }

        console.log(data)

        var a = $.ajax({
            type: "POST",
            url: "https://diabetes-flask.herokuapp.com/api/v1/predict-diabetes",
            data: JSON.stringify(data),
            success: console.log('well'),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).done(function (res) {
            console.log(res)

            let result = textResultByLength(res.percentageRisk)
            console.log(result)
          
            $("#resultH2").text(result.text1)
           
            $("#resultH2").css('color',result.color1)
             $("#resultH3").text(result.text2)
            $("#resultH3").css('color',result.color2)
          
             
        }).fail(function () {
            $('#addressx1').removeClass('d-none');
            $('#totalper').removeClass('d-none');
            console.log('request fail')


        })
            ;
        
            function textResultByLength(percen){
                switch (true) {
                    case percen >= 0 && percen < 0.25 :
                    let case1 = {
                        "text1" : 'โอกาสน้อย ช่วง 0% ถึง 25% ',
                        "text2" : 'หมายเหตุ คุณในผลลัพธ์ช่วง 0% ถึง 25% ซึ่งมีโอกาสที่จะเป็นโรคเบาหวานน้อยมาก อยู่ให้เกินปลอดภัย แต่อย่าลืมที่จะดูแลรักษาสุขภาพอย่างสม่ำเสมอ',
                        "color1"  : '#adff2f',
                        "color2"  : '#000000',
                      
                    }
                    return case1
                    break
                    case  percen >=0.25 && percen < 0.5 :
                    let case2 = {
                        "text1" : 'โอกาสน้อยถึงปานกลาง ช่วง 26% ถึง 50% ',
                        "text2" : ' หมายเหตุ คุณในผลลัพธ์ช่วง 26% ถึง 50% ซึ่งมีโอกาสที่จะเป็นโรคเบาหวานปานกลาง ซึ่งยังสามารถเป็นโรคเบาหวานได้ แนะนำให้ดูแลรักษาสุขภาพอย่างเคร่งครัด และตรวจสุขภาพอย่างน้อยปีละ 1 ครั้ง',
                        "color1"  : '#ffff00',
                        "color2"  : '#000000',
                        
                    }
                    return case2
                    break
                    case  percen >= 0.5 && percen < 0.75:
                    let case3 = {
                        "text1" : 'โอกาสค่อนข้างสูง ช่วง 51% ถึง 75%',
                        "text2" : 'หมายเหตุ คุณในผลลัพธ์ช่วง 51% ถึง 75% ซึ่งมีโอกาสที่จะเป็นโรคเบาหวานสูง รีบนัดพบแพทย์เพื่อเข้ารับการตรวจโดยด่วน',
                        "color"  : '#ffa500',
                        "color2"  : '#000000',
                       
                    }
                    return case3
                    break
                    case  percen >= 0.75 && percen <= 1:
                    let case4 = {
                        "text1" : 'โอกาสสูงมาก ช่วง 75% ถึง 100% ',
                        "text2" : 'หมายเหตุ คุณในผลลัพธ์ช่วง 75% ถึง 100% ซึ่งมีโอกาสที่จะเป็นโรคเบาหวานสูงมาก รีบนัดพบแพทย์เพื่อเข้ารับการตรวจโดยด่วน',
                        "color1"  : '#ff0000',
                        "color2"  : '#000000',
                    }
                    return case4
                }
            }

    })
})

$(document).ready(function () {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
    
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
})