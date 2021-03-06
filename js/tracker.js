var feed = 'http://i-foi.org/feed/?cat=2';
var predef = [
  {
    type: 'sig',
    title: null,
    date: moment('05-04-2015', 'MM-DD-YYYY'),
    date_flag: false,
    rating: null,
    sig: 'Resumption of Session',
    subs: [
      'House should start Second Reading Debate.'
    ],
    content: null,
    uri: null
  },
  {
    type: 'sig',
    title: null,
    date: moment('06-12-2015', 'MM-DD-YYYY'),
    date_flag: false,
    rating: null,
    sig: 'Adjournment Sine Die',
    subs: [
      'Sponsorship must have been completed',
      'Period of Interpellation must have been substantially started.'
    ],
    content: null,
    uri: null
  },
  {
    type: 'sig',
    title: null,
    date: moment('07-27-2015', 'MM-DD-YYYY'),
    date_flag: false,
    rating: null,
    sig: 'Start of Third Regular Session of Congress',
    subs: [
      'Continuation of Period of Interpellation must be calendared immediately'
    ],
    content: null,
    uri: null
  },
  {
    type: 'sig',
    title: null,
    date: moment('09-30-2015', 'MM-DD-YYYY'),
    date_flag: true,
    rating: null,
    sig: 'none',
    subs: [
      'Period of Interpellation or Debate must have been closed or terminated.'
    ],
    content: null,
    uri: null
  },
  {
    type: 'sig',
    title: null,
    date: moment('10-31-2015', 'MM-DD-YYYY'),
    date_flag: true,
    rating: null,
    sig: 'none',
    subs: [
      'Period of Amendments must have been completed.'
    ],
    content: null,
    uri: null
  },
  {
    type: 'sig',
    title: null,
    date: moment('11-30-2015', 'MM-DD-YYYY'),
    date_flag: true,
    rating: null,
    sig: 'none',
    subs: [
      'The People\'s FOI Bill must have been approved on Second and Third Reading.'
    ],
    content: null,
    uri: null
  },
  {
    type: 'sig',
    title: null,
    date: moment('12-31-2015', 'MM-DD-YYYY'),
    date_flag: true,
    rating: null,
    sig: 'none',
    subs: [
      'Bicameral Conference Report must have been ratified by the Senate and the House of Representatives.'
    ],
    content: null,
    uri: null
  },
  {
    type: 'sig',
    title: null,
    date: moment('01-31-2016', 'MM-DD-YYYY'),
    date_flag: true,
    rating: null,
    sig: 'none',
    subs: [
      'The Enrolled People\'s FOI Bill must have been presented to the President for approval.'
    ],
    content: null,
    uri: null
  },
  {
    type: 'sig',
    title: null,
    date: moment('02-29-2016', 'MM-DD-YYYY'),
    date_flag: true,
    rating: null,
    sig: 'none',
    subs: [
      'The People\'s FOI Bill must have been signed by the President into law.'
    ],
    content: null,
    uri: null
  }
];

var tools = {};
(function (context) {
  "use strict";
  var timeline_options = {},
    render_options = {},
    gaugeOptions = {

      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        animation: {
          duration: 1200
        }
      },

      title: null,

      credits: {
        enabled: false
      },
      style: {
        fontFamily: 'Ovo'
      },
      pane: {
        center: ['50%', '85%'],
        size: '130%',
        startAngle: -90,
        endAngle: 90,
        background: [ {
          backgroundColor: '#FFF',
          borderWidth: 0,
          outerRadius: '105%',
          innerRadius: '103%'
        }]
      },

      tooltip: {
        enabled: false
      },

    // the value axis
      yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 5,
        minorTickPosition: 'inside',
        minorTickColor: '#',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 5,
        tickColor: '#666',
        labels: {
          step: 1,
          rotation: 'auto'
        },
        title: {
          text: 'Performance Score'
        },
        plotBands: [{
          thickness: '12%',
          from: 0,
          to: 25,
          color: '#000000' // red
        }, {
          thickness: '12%',
          from: 25,
          to: 50,
          color: '#B22222' // red
        }, {
          thickness: '12%',
          from: 50,
          to: 75,
          color: '#DDDF0D' // yellow
        }, {
          thickness: '12%',
          from: 75,
          to: 100,
          color: '#55BF3B' // green
        }]
      },

      plotOptions: {
        gauge: {
          dataLabels: {
            y: 5,
            borderWidth: 3,
            useHTML: true
          },
          dial : {
            radius: '90%'
          }
        }
      }
    };

  context.init = function (timeline_opts, render_opts) {
    timeline_options = timeline_opts;
    render_options =   render_opts;
  };
  /* PRIVATE FUNCTIONS */
  /*
    Merges 'significant data' ie. congress deadlines with entry blocks with coincinding dates
  */
  function mergeSigEnt(sig, ent) {
    sig.content = ent.content;
    sig.uri     = ent.uri;
    sig.rating  = ent.rating;
    sig.title   = ent.title;

    return sig;
  }

  function sortByDate(a, b) {
    var aDate = a.date,
      bDate = b.date;
    return (moment(aDate).isBefore(bDate)) ? -1 : (moment(aDate).isAfter(bDate) ? 1 : 0);
  }

  function renderSigBlock(text) {
    //stuff to be re used
    var excon  = document.createElement('i'),
      sig_block     = document.createElement('div'),
      sig_icon_div  = document.createElement('div'),
      sig_text_div  = document.createElement('div'),
      sig_text      = document.createElement('p');

    sig_block.className = 'sig-block';

    excon.className = 'fa fa-exclamation-circle';
    sig_icon_div.appendChild(excon);
    sig_icon_div.className = 'icon';

    sig_text_div.className = 'text';
    sig_text.appendChild(document.createTextNode(text));
    sig_text_div.appendChild(sig_text);

    sig_block.appendChild(sig_icon_div);
    sig_block.appendChild(sig_text_div);

    return sig_block;
  }

  function renderPostBlock(title, index) {
    var eyecon = document.createElement('i'),
      post_block = document.createElement('div'),
      post_icon_div = document.createElement('div'),
      post_text_div = document.createElement('div'),
      post_text     = document.createElement('p');

    post_block.className = 'post-block';
    post_block.setAttribute('data-index', index);
    eyecon.className = 'fa fa-eye';
    post_icon_div.appendChild(eyecon);
    post_icon_div.className = 'icon';

    post_text_div.className = "text";
    post_text.appendChild(document.createTextNode(title));
    post_text_div.appendChild(post_text);

    post_block.appendChild(post_icon_div);
    post_block.appendChild(post_text_div);

    return post_block;
  }

  /*PUBLIC FUNCTIONS*/

  context.buildModel = function (data) {
    var arr = [];

    data.forEach(function (val) {
      var title = val.title,
        html  = document.createElement('div'),
        attr = null,
        content = null,
        guid = val.link,
        post = {};

      html.innerHTML = val.encoded;
      attr = html.lastElementChild;
      content = html.children[0];

      post = {
        type: 'ent',
        title: title,
        date: moment(attr.children[0].innerHTML, 'MM-DD-YYYY'),
        date_flag: null,
        rating: parseInt(attr.children[1].innerHTML, 10),
        sig: null,
        subs: null,
        content: content,
        uri: guid

      };

      arr.push(post);

    });

    return arr;
  };

  context.mergeSimilarModels = function (data) {
    var merge = [],
      bef     = null,
      aft     = null,
      last    = null;

    //SORT HERE
    data.sort(sortByDate);

    while (data.length > 0) {
      bef = data.pop();
      aft = data.pop();

      if (data.length === 3) {
        //special case for even numbered arrays
        last = data.pop();

        if (bef.type === aft.type) {
          if (aft.type === last.type) {
            //no merging for similar items
            merge.push(bef);
            merge.push(aft);
            merge.push(last);
          } else {
            //since they're all sorted in order and only two similar dates may exist,
            //bef will never be equal to last in terms of date
            if (aft.date._i === last.date._i) {
              bef.type === 'sig' ?  merge.push(mergeSigEnt(aft, last)) : merge.push(mergeSigEnt(last, aft));
            } else { //unequal dates, push
              merge.push(aft);
              merge.push(last);
            }
          }
        } else {
          //if bef == aft, bef can never be equal to last. check if bef should be merged
          //with aft
          if (bef.type === aft.type) { //similar types cannot be merged. push
            merge.push(bef);
            merge.push(aft);
          } else {
            if (bef.date._i === aft.date._i) {
              bef.type === 'sig' ?  merge.push(mergeSigEnt(bef, aft)) : merge.push(mergeSigEnt(aft, bef));
            } else { //unequal dates, push
              merge.push(bef);
              merge.push(aft);
            }
          }
          merge.push(last);
        }
      } else {
        if (bef.type === aft.type) { //similar types cannot be merged. push
          merge.push(bef);
          merge.push(aft);
        } else {
          if (bef.date._i === aft.date._i) {
            bef.type === 'sig' ?  merge.push(mergeSigEnt(bef, aft)) : merge.push(mergeSigEnt(aft, bef));
          } else { //unequal dates, push
            merge.push(bef);
            merge.push(aft);
          }
        }
      }
    }

    return merge;
  };

  context.renderTimeline = function (data) {

    var target              = timeline_options.wrapper.removeChild(timeline_options.target),
      indices               = [],
      tracker_count         = 0,
      li                    = null,
      heading_text          = null,
      item_content_template = '',
      point_content         = null,
      subs                  = null;

    data.forEach(function (val) {
      li                    = document.createElement('li');
      heading_text          = document.createElement('h5');
      item_content_template = '';
      point_content         = document.createElement('div');

      li.className += 'point ';
      point_content.className += 'point-content ';
      heading_text.className  += 'point-title ';

      if (val.type === 'sig') {

        li.className += 'sig ';

        heading_text.appendChild(document.createTextNode('! '));
        if (val.date_flag) {
          heading_text.appendChild(document.createTextNode(val.date.format('MMM YYYY')));
        } else { //render full date ie mm-dd
          heading_text.appendChild(document.createTextNode(val.date.format('MMM DD, YYYY')));
        }

        if (val.sig !== 'none') {
          heading_text.appendChild(document.createTextNode(':' + val.sig));
        }

        subs = val.subs;

        subs.forEach(function (sub_items) {
          point_content.appendChild(renderSigBlock(sub_items));
        });

      } else {

        indices.push(tracker_count);

        heading_text.appendChild(document.createTextNode(val.date.format('MMM DD')));

        li.onclick = function () {
          context.renderContent(val);
        };

        point_content.appendChild(renderPostBlock(val.title, tracker_count));
      }

      tracker_count++;
      li.appendChild(heading_text);
      li.appendChild(point_content);

      timeline_options.target.appendChild(li);
    });

    timeline_options.wrapper.appendChild(target);

    return indices;
  };

  context.renderContent = function (data) {
    var date  = document.createElement('h4'),
      title = document.createElement('h3'),
      guid = document.createElement('a'),
      cont_link = document.createElement('a');
    //build upper title block
    date.appendChild(document.createTextNode(data.date.format('MMMM DD, YYYY')));

    cont_link.href = guid.href = data.uri;
    cont_link.targer = guid.target = '_blank';
    guid.appendChild(document.createTextNode(data.title));

    title.appendChild(guid);

    render_options.title.innerHTML = '';
    render_options.info.innerHTML = '';

    render_options.title.appendChild(date);

    render_options.title.appendChild(title);

    //cont_link.appendChild(data.content);

    render_options.info.appendChild(data.content);

    //build read more link
    render_options.readmore.href = data.uri;

    render_options.gauge.highcharts(Highcharts.merge(gaugeOptions, {
      series: [{
        name: 'Performance',
        data: [parseInt(data.rating)],
        dataLabels: {
          format: '<div style="text-align:center"><span style="font-size:25px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>'
        },
        tooltip: {
          valueSuffix: null
        }
      }]

    }));
    //hide the rotating cog + text
    render_options.loader.style.display = 'none';
  };

})(tools);

(function ($) {
  "use strict";
  $(function () {
    var timeline_opts   = {
      wrapper   : document.getElementById('timeline-wrapper'),
      target    : document.getElementById('timeline')
    },
      render_opts = {
        title   : document.getElementById('post-title'),
        info    : document.getElementById('post-content'),
        gauge   : $('#chart-container'),
        readmore: document.getElementById('read-more-button'),
        loader  : document.getElementById('loader')
      },
      triggers = document.getElementsByClassName('timeline-trigger');

    tools.init(timeline_opts, render_opts);

    function feed_success(obj) {
      var tracker_json = $.xml2json(obj).channel.item,
        data = tools.mergeSimilarModels(predef.concat(tools.buildModel(tracker_json))),
        indices = tools.renderTimeline(data), //get the indices of tracker entries
        first_index = indices[0],
        tour = {
            id: "tracker-intro",
            steps: [
              {
                title: "Displaying the Timeline",
                content: "Click/tap on the trigger to toggle the timeline",
                target: document.getElementsByClassName('timeline-trigger')[0],
                placement: "bottom",
                nextOnTargetClick: true
              },
              {
                title: "Timeline Items",
                content: "Red items show deadlines that Congress need to meet. Gray items show that a Congress Action on  FOI Tracker is available.",
                target: document.getElementsByClassName('point')[2],
                placement: "right",
                showPrevButton: true,
                nextOnTargetClick: true,
                onShow: function () {
                  jQuery.sidr('open', 'sidr');
                },
                onNext: function () {
                  jQuery.sidr('close', 'sidr');
                },
                xOffset: '120%',
                yOffset: '100%'
              }, {
                title: "Guide to the Meter",
                content: "Details regarding the available progress evaluation will be shown here. <ul><li>Green Zone - good performance</li><li>Yellow zone - performance needs to improve, but outlook on the bill is still optimistic </li><li>Red zone - bad performance with pessimistic prognosis on the bill</li><li>Black zone - Congress is evidently out to kill the FOI bill</li></ul>"+"",
                target: 'chart-container',
                showPrevButton: true,
                placement: "left",
                nextOnTargetClick: true,
                xOffset: "320px"
              }, {
                title: "Congress Action on FOI Tracker Details",
                content: "Click \"Read More\" for the full evaluation and to join the discussion.",
                target: 'read-more-button',
                showPrevButton: true,
                placement: "top",
                nextOnTargetClick: true,
                yOffset: "10%"
              },
              {
                title: "Need help?",
                content: "Click here to restart the tour.",
                target: 'help-trigger',
                showPrevButton: true,
                placement: "left",
                yOffset: "30%"
              }
            ]
          },
        visited = false;

      if (document.cookie.match(/tracker-visited/g) !== null) {
        visited = true;
      }
      else {
        document.cookie = 'tracker-visited=true';
      }


      $('.timeline-trigger').sidr({
        displace: false,
        onOpen: function () {
          var x;
          for (x = 0; x < triggers.length; x++) {
            triggers[x].className += 'sidr-open';
          }
        },
        onClose: function () {
          var x;
          for (x = 0; x < triggers.length; x++) {
            triggers[x].className = triggers[x].className.replace(/sidr-open/g, '');
          }

        }
      });

      $('#help-trigger').click(function (){
        hopscotch.endTour(true);
        hopscotch.startTour(tour);
      });

      if(!visited) {
        //hopscotch.endTour(true);
        hopscotch.startTour(tour);
      }

      tools.renderContent(data[first_index]);

    }

    $.ajax({
      url: feed,
      timeout: 2000,
      success: feed_success
    });

  });
})(jQuery);
