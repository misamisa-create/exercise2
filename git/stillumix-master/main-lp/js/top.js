let DISPLAY_CONTENT = [];

  $(document).ready(function(){

    window.twttr = (function(d,s,id){
    var js,
    fjs=d.getElementsByTagName(s)[0],
    p=/^http:/.test(d.location)?'http':'https';

    if(!d.getElementById(id)){
    js=d.createElement(s);
    js.id=id;
    js.src=p+"://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js,fjs);
    }

    return window.twttr || (t = {_e:[],ready:function(f){ t._e.push(f)} });

    }(document,"script","twitter-wjs"));

    twttr.ready(function(){
    twttr.events.bind('loaded',function(){
        console.log("twitter load");
    });
  });

    DISPLAY_CONTENT = twitterContents.concat(instagramContents).concat(noteContents).sort(()=> Math.random() - 0.5);

    display();

    $('#readMoreBtn').on('click', function() {
        console.log(111);
        readmore();
    });
	  
	 $('#noneBtn').on('click', function() {
        console.log(111);
		setTimeout(
          function () {
			$('.grid').isotope('layout');
          }, 
        "1000"
     );  
		 
    });

    // filter with selects and checkboxes
    var $checkboxes = $('#form-ui input');

    $checkboxes.change( function() {
        // map input values to an array
        var inclusives = [];
        // inclusive filters from checkboxes
        $checkboxes.each( function( i, elem ) {
        // if checkbox, use value if checked
        if ( elem.checked ) {
        inclusives.push( elem.value );
        }
        });

        // combine inclusive filters
        var filterValue = inclusives.length ? inclusives.join(', ') : '*';

        $('.grid').isotope({ filter: filterValue })
    });

    

});


const readmore = () => {

    const dd = DISPLAY_CONTENT.splice(0, 10)
    const elms = dd.map(element => {
        const item = $('<div class="grid-item"></div>');

        $(item).addClass(element.type);
		$('.grid-item').css('visibility', 'hidden');

        const elm = $(element.content);
        $(".grid").append($(item).append(elm));

        return item
    });

    instgrm.Embeds.process();
    twttr.widgets.load();

    setTimeout(
        function () {
            elms.forEach(element => {
              $('.grid').isotope( 'insert', element )
            });

            $('.grid-item').css('visibility', 'visible');
        }, 
        "4000"
    );  
}

const display = () => {
    
    const dd = DISPLAY_CONTENT.splice(0, 10)
    const elms = dd.map(element => {
        const item = $('<div class="grid-item"></div>');

        $(item).addClass(element.type);  
        $(item).css('visibility', 'hidden');

        const elm = $(element.content);
        $(".grid").append($(item).append(elm));

        return item
    });

   let ajaxList = [];

    ajaxObj = $.ajax( {
    "timeout": 5000,
    "url": "http" + (document.URL.match(/^https:/) ? "s" : "") + "://www.instagram.com/embed.js",
    "dataType": "script",
    "cache": false,
    } );　
    ajaxList.push(ajaxObj);

    ajaxObj = $.ajax( {
    "timeout": 5000,
    "url": "http" + (document.URL.match(/^https:/) ? "s" : "") + "://note.com/scripts/embed.js",
    "dataType": "script",
    "cache": false,
    } );　
    ajaxList.push(ajaxObj);

    $.when.apply($, ajaxList).done(function(){
        setTimeout(
            function () {

                var ifrs = $('.grid').find('iframe');
                $(ifrs).each((index, value) => {

                });

                $('grid').on('load', function() {
                     console.log("iframe の読み込みが完了しました");
                });

                $('.grid').isotope({ //コンテナのセレクタ
                 itemSelector: '.grid-item', //各アイテムのセレクタ
                 masonry: {
                  columnWidth: 100,
                  fitWidth: true // これ
                }
              });
							
              $('.grid-item').css('visibility', 'visible');
			  $('#noneBtn').click();
            }, 
            "4000"
        );
				
    }).fail(function(){
        // リクエストのいずれかの結果が失敗だった場合の処理
    });
}

