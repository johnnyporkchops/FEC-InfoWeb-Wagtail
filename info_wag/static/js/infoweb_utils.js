//pdf dialo
$(function() {



    $('a[href*=".pdf"]').on("click", function(e) {
        e.preventDefault();
        var pdf_src = $(this).attr("href");
        pdf_src=(pdf_src).replace(/www\.fec\.gov/g, "fecds005.fec.gov");//fixes firefox embed isue
        var pdf_src_link = $(this).attr("href");
        $("#dialog object").attr('data', pdf_src);
        $("#dialog span").html('<embed src="' + pdf_src + '" type="application/pdf">');
        $("#dialog").dialog({
            width: 600,
            height: 800,
            modal: true,
            overlay: {
                backgroundColor: "#000",
                opacity: 0.9
            },

            close: function(ev, ui) {
                $(this).dialog('destroy');
            }
        })
        var dialog = $("#dialog").dialog();

        dialog.data("uiDialog")._title = function(title) {
            title.html(this.options.title);
        };

        dialog.dialog('option', 'title', "<a href='" + pdf_src_link + "'>" + pdf_src_link + "</a>");

    });

});

//email this (share with FEC staff)

$(function() {
    $('#email_this, .email_this').on("click", function(e) {
        e.preventDefault()

        $('#email_dialog').dialog({
            show: 'clip',
            width: 600,
            height: 'auto',
            modal: true,
            title: 'Share Via Email',
            overlay: {
                backgroundColor: "#000",
                opacity: 0.9
            }
        })


        var $doctitle = window.parent.document.title;
        $(":input[name='page']").val($doctitle)

        var $docurl = window.parent.location.href;
        $(":input[name='url']").val($docurl)
    })


    $('#emfrm').submit(function(e) {
        e.preventDefault()
        var $share_sender = $(":input[name='share_sender']").val();
        var $share_with = $(":input[name='share_with']").val();
        var $message = $(":input[name='message']").val();
        var $docurl = $(":input[name='url']").val();
        var $doctitle = $(":input[name='page']").val();
        $.ajax({
            type: "POST",
            url: "/cgi-bin/test_mail_share.pl",
            data: "share_sender=" + $share_sender + "@fec.gov&share_with=" + $share_with + "@fec.gov&message=" + $message + "&page=" + $doctitle + "&url=" + $docurl
                //  ,
                // error: function(result) {
                //     var data_received = $(result).find("h1");
                //     alert(data_received );
                // },
                // success: function(result) {
                //     alert(result);
                // }
                //});
        });

        $('#success_dialog_shr').dialog({
            width: 500,
            height: 300,
            modal: true,
            title: 'Successsfully Shared'

        })
        $('#success_dialog_shr').html("<p>This webppage/URL has been sent to: " + $share_with + "@fec.gov, and copied to your email as well.</p><p>Page: " + $doctitle + "</p><p>URL: " + $docurl + "</p>")

        //close form dialog when this opens   
        $(this).closest(".ui-dialog-content").dialog("close");
    });


});



//report

$(function() {
    $('#report, .report').on("click", function(e) {
        e.preventDefault()
        $('#report_dialog').dialog({
            show: 'clip',
            width: 600,
            height: 500,
            modal: true,
            title: 'Report an Issue',
            overlay: {
                backgroundColor: "#000",
                opacity: 0.9
            }
        })

        var $report_address;


        var $doctitle = window.parent.document.title;
        $(":input[name='subject']").val($doctitle)

        var $docurl = window.parent.location.href;
        $(":input[name='url']").val($docurl)
    })

    $('#report_frm').submit(function(e) {
        e.preventDefault();
        var $sender = $(":input[name='sender']").val()
        var $report_address = 'dorothy.yeager@fec.gov'
        var $issue = $(":input[name='issue']").val()
        var $issue_desc = $(":input[name='issue_desc']").val()
        var $url = $(":input[name='url']").val()
        var $doctitle = $(":input[name='subject']").val()

        $.ajax({
            type: "POST",
            url: "/cgi-bin/test_mailD.pl",
            data: "sender=" + $sender + "@fec.gov&issue=" + $issue + "&issue_desc=" + $issue_desc + "&url=" + $url

        });

        $('#success_dialog').dialog({
            width: 500,
            height: 300,
            modal: true,
            title: 'Thank You For Your Submission'

        })
        $('#success_dialog').html("<p>Your issue has been sent to: " + $report_address + "<br>and copied to your email as well</p><p>Issue: " + $issue + "</p><p>URL: " + $url + "</p><p>Description: " + $issue_desc + "</p><p><i>We will look into this and will contact you when it has been resolved</i></p>");


        //close form dialog when this opens                             
        $(this).closest(".ui-dialog-content").dialog("close");

    });
});
//breadcrumbs

$(function() {
    $('h2.main_category').before("<ul class='breadcrumbs'></ul>"); //dynamically add breadcrumbs to category index pages 
    //$('h1.template').before("<ul class='breadcrumbs'></ul>"); (hardcoded in for now)
    var hf = window.location.href;
    //dont show on homepage
    if ((hf == 'http://infoweb.fec.gov/')) {
        $('ul.breadcrumbs').css('display', 'none')
    }
   
    var slash = hf.lastIndexOf('/');
    if (slash == hf.length - 1) {
        hf = hf.slice(0, -1);
    }
    //turn href string into array and split on "/"-jc
    var url_arr = hf.split("/");
   
    //take out http:,/,/ of array 
    var url_arr1 = url_arr.slice(2, url_arr.length);
    
    $(function() {
        var lnk_arr = [];
        var lnk_arr1;
        $.each(url_arr1, function(index, value) {
            lnk_arr.push(value)
            var lnk_arr1 = lnk_arr.join('/');


            $('ul.breadcrumbs').append('<li><a href="http://' + lnk_arr1 + '">' + value + '</a></li>');
        })


        //set last breadcrumb to page title
        var page = document.title;
        $('ul.breadcrumbs li:last-child a').text(page).css('text-transform', 'capitalize');


        //remove underline/clickable on current page breadcrumb and add bg image-do it here instead of CSS b/c IE8 !support last/nth-child
        $('ul.breadcrumbs li:last-child a').css({
            'text-decoration': 'none',
            'pointer-events': 'none',
            'cursor': 'arrow'
        });

        //only add bg images to breadcrumbs above 750px wide, both onload and on screen resize
        var mql = window.matchMedia("screen and (min-width: 750px)")

        function mediaqueryresponse(mql) {
            if (mql.matches) {
                $('ul.breadcrumbs li:nth-child(2)').css({
                    'background': 'url(/static/images/bc_arrow.png) no-repeat scroll -.07em 0 #3A86C7'
                });
                $('ul.breadcrumbs li:nth-child(3)').css({
                    'background': 'url(/static/images/bc_arrow2.png) no-repeat scroll -.07em 0 #1E5799'
                });
                $('ul.breadcrumbs li:nth-child(4)').css({
                    'background': 'url(/static/images/bc_arrow3.png) no-repeat scroll -.07em 0 #036'
                });
            } else {
                $('ul.breadcrumbs li:nth-child(n+2)').css({
                    'background': 'none'
                })

            }
        }

        mediaqueryresponse(mql) // call listener function explicitly at run time
        mql.addListener(mediaqueryresponse) // attach listener function to listen in on state changes(resize)

    })

})

//end breadcrumbs ///////////////////

//replace title on template documents

$(function() {
    if ($('h1').hasClass('template')) {
        var title_replc = $('h1.template').text().toLowerCase();
        document.title = title_replc;
    }

});

//for sticky nav to match width of panel in smaller windows-upon resize
$(window).resize(function() {
    var pos = $(".panel").width();
    $("#nav").css('width', pos); // don't need escaping

});

//for h1.template to match width of panel in smaller windows-upon resize
$(window).scroll(function() {
    var pos = $(".panel").width();
    $("h1.template.fixed").css('width', pos); // don't need escaping
});


//for adding last modified date to h1.template
$(function() {
    var lm= $('.lastmod').text();
    
    $('h1.template').append("<span>Last Modified: " + lm + "</span>");
    $('h2.main_category').append("<span>Last Modified:<br>" + lm + "</span>");

 

});




///// main sticky navbar/scroll-to function
$(function() {
    var $nav_height = $('#nav').height();
    if (window.location.hash) {
        var loc = (window.location.hash).toString();
        var $loc_id = loc;
        var fromTop = $nav_height * 2 + 35;
        $('html, body').animate({
            scrollTop: $($loc_id).offset().top - fromTop
        })

    }

    if ($('#nav').length > 0) {
        $num = $('#nav').offset().top;
    } else {
        $num = 0
    }


    $(window).bind('scroll', function() {



         $('.section').each(function() {
            var ofst = $(this).offset().top
            var ofst_rnd = Math.round(ofst)
            var sec_id = $(this).attr('id');
            var sec_ht = $(this).height()
            $(this).offset().top - $nav_height - 40 < $(window).scrollTop() 
              ? $(".nav-bar li a[href='#" + sec_id + "']").addClass('active') 
              : $(".nav-bar li a[href='#" + sec_id + "']").removeClass('active');

            var sec_array = [];
            if ($(this).offset().top - $nav_height - 40 < $(window).scrollTop()) {
                sec_array.push(sec_id)
                nav_act = sec_array[0];
                nav_act1 = $(".nav-bar li a[href='#" + nav_act + "']")
                $(".nav-bar li a").not(nav_act1).removeClass('active');
            }
            

        })


        if ($(window).scrollTop() > $num && $('#nav').length > 0) {
            $('#nav').addClass('fixed');
            //$('body').css('margin-top',$nav_height)(jonellas page jump fix-- breaks inbound hash right now)

           

        } else if ($('#nav').length > 0) {
            $num = $('#nav').offset().top;
            $('#nav').removeClass('fixed');
            //$('body').css('margin-top',0)jonellas page jump fix-- breaks inbound hash right now)
        }
        

    });

    $('a[href^="#"]').click(function() {
        $nav_height = $('#nav').height();
        var $pad;
        var this_id = $(this).attr('href');
        var this_id1 = this_id.substr(1);
        var this_section = "#" + this_id1;


        if ($('#nav').hasClass('fixed')) {

            $pad = $nav_height
             

        } else {
            $pad = $nav_height * 2
             

        }
        
        $(this_section).animatescroll({
            padding: $pad
        });
    });

});

/////// end sticky-nav.scroll to 

$(document).on('focus', 'input.input-grow', function() {
    if (this.placeholder == ' Search') { this.placeholder = '';}

})

//mkae search input expand to user's input width
$(document).on('input', 'input.input-grow', function() {
    var size = this.value.length;
    $(this).attr('size', size == 0 ? 1 : size);
});