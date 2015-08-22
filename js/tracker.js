"use strict"
var feed = 'http://i-foi.org/feed/?cat=2';
var gaugeOptions = {

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
    },{
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
        y: 5    ,
        borderWidth: 3,
        useHTML: true
      },
      dial : {
        radius: '90%'
      }
    }
  }
};
var predef = [
  {
    type: 'sig',
    title: null,
    date: moment('05-04-2015','MM-DD-YYYY'),
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
    date: moment('07-27-2015','MM-DD-YYYY'),
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
    date: moment('09-30-2015','MM-DD-YYYY'),
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
    date: moment('10-31-2015','MM-DD-YYYY'),
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
    date: moment('11-30-2015','MM-DD-YYYY'),
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
    date: moment('12-31-2015','MM-DD-YYYY'),
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
    date: moment('01-31-2016','MM-DD-YYYY'),
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
    date: moment('02-29-2016','MM-DD-YYYY'),
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

function sortByDate(a,b) {
  var aDate = a.date;
  var bDate = b.date;
  return (moment(aDate).isBefore(bDate)) ? -1 : (moment(aDate).isAfter(bDate) ? 1: 0);
}

function mergeSigEnt(sig, ent) {
  sig.content = ent.content;
  sig.uri     = ent.uri;
  sig.rating  = ent.rating;
  sig.title   = ent.title;

  return sig;
}

function buildModel(data) {
  "use strict"
  var arr = [];

  data.forEach(function(val) {
    var title = val.title;
    var guid  = val.link;
    var html  = document.createElement('div');
    html.innerHTML = val.encoded;
    var attr = html.lastElementChild;
    var content = html.children[0];
    var guid = val.link;

    var post = {
      type: 'ent',
      title: title,
      date: moment(attr.children[0].innerHTML, 'MM-DD-YYYY'),
      date_flag: null,
      rating: parseInt(attr.children[1].innerHTML),
      sig: null,
      subs: null,
      content: content,
      uri: guid

    };

    arr.push(post);

  });

  return arr;
}

function mergeSimilarModels(data) {
  var merge = [];

  while(data.length > 0) {
    var bef = data.pop();
    var aft = data.pop();

    if(data.length == 3) {
      //special case for even numbered arrays
      var last = data.pop();

      if(bef.type == aft.type) {
        if( aft.type == last.type) {
          //no merging for similar items
          merge.push(bef);
          merge.push(aft);
          merge.push(last);
        }
        else {
          //since they're all sorted in order and only two similar dates may exist,
          //bef will never be equal to last in terms of date
          if(aft.date._i == last.date._i) {
            bef.type == 'sig'?  merge.push(mergeSigEnt(aft,last)) : merge.push(mergeSigEnt(last,aft));
          }
          else { //unequal dates, push
            merge.push(aft);
            merge.push(last);
          }
        }
      }
      else {
        //if bef == aft, bef can never be equal to last. check if bef should be merged
        //with aft
        if(bef.type == aft.type) { //similar types cannot be merged. push
          merge.push(bef);
          merge.push(aft);
        }
        else {
          if(bef.date._i == aft.date._i) {
            bef.type == 'sig'?  merge.push(mergeSigEnt(bef,aft)) : merge.push(mergeSigEnt(aft,bef));
          }
          else { //unequal dates, push
            merge.push(bef);
            merge.push(aft);
          }
        }
        merge.push(last);
      }
    }
    else {
      if(bef.type == aft.type) { //similar types cannot be merged. push
        merge.push(bef);
        merge.push(aft);
      }
      else {
        if(bef.date._i == aft.date._i) {
          bef.type == 'sig'?  merge.push(mergeSigEnt(bef,aft)) : merge.push(mergeSigEnt(aft,bef));
        }
        else { //unequal dates, push
          merge.push(bef);
          merge.push(aft);
        }
      }
    }
  }

  return merge;
}

function renderSigBlock(text) {
  //stuff to be re used
  var excon  = document.createElement('i');
  //create sig-block
  var sig_block     = document.createElement('div');
  var sig_icon_div  = document.createElement('div');
  var sig_text_div  = document.createElement('div');
  var sig_text      = document.createElement('p');

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

function renderPostBlock(title, index, opts) {
  //stuff to be re used
  'use strict'
  var eyecon = document.createElement('i');

  var post_block = document.createElement('div');
  var post_icon_div = document.createElement('div');
  var post_text_div = document.createElement('div');
  var post_text     = document.createElement('p');

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

function renderTimeline(opts, data, render_opts) {
  //opts.target.detach();

  var target = opts.wrapper.removeChild(opts.target);
  var indices = [];
  var tracker_count = 0;
  //console.log(target);

  data.forEach(function(val){


    var li = document.createElement('li');
    var heading_text = document.createElement('h5');
    var item_content_template = '';
    var point_content = document.createElement('div');

    li.className+='point ';
    point_content.className+='point-content ';
    heading_text.className+='point-title ';
    if(val.type == 'sig') {

      li.className+='sig ';

      heading_text.appendChild(document.createTextNode('! '));
      if(val.date_flag) {
        heading_text.appendChild(document.createTextNode(val.date.format('MMM YYYY')));
      }
      else { //render full date ie mm-dd if false
        heading_text.appendChild(document.createTextNode(val.date.format('MMM DD, YYYY')));

      }

      if(val.sig !== 'none') {
        heading_text.appendChild(document.createTextNode(':'+val.sig));
      }

      var subs = val.subs;

      subs.forEach(function(sub_items) {
        point_content.appendChild(renderSigBlock(sub_items));
      });

    }
    else {

      indices.push(tracker_count);

      heading_text.appendChild(document.createTextNode(val.date.format('MMM DD')));

      li.onclick = function() {
        renderContent(val, render_opts);
      };

      point_content.appendChild(renderPostBlock(val.title, tracker_count));


    }
    tracker_count++;
    li.appendChild(heading_text);
    li.appendChild(point_content);

    opts.target.appendChild(li);
  });

  opts.wrapper.appendChild(target);

  return indices;
}

function renderContent(data, opts ) {
  var date  = document.createElement('h4');
  var title = document.createElement('h3');
  var guid = document.createElement('a');
  var cont_link = document.createElement('a');
  //build upper title block
  date.appendChild(document.createTextNode(data.date.format('MMMM DD, YYYY')));

  cont_link.href = guid.href = data.uri;
  cont_link.targer = guid.target = '_blank';
  guid.appendChild(document.createTextNode(data.title));

  title.appendChild(guid);

  opts.title.innerHTML = '';
  opts.info.innerHTML = '';

  opts.title.appendChild(date);

  opts.title.appendChild(title);

  //cont_link.appendChild(data.content);

  opts.info.appendChild(data.content);

  //build read more link
  opts.readmore.href = data.uri;

  opts.gauge.highcharts(Highcharts.merge(gaugeOptions, {
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
  //opts.loader.css('display','none');
}

(function($) {
  $(function(){

    var merge = [];
    var timeline_opts   = {
      wrapper   : document.getElementById('timeline-wrapper'),
      target    : document.getElementById('timeline')
    };
    var render_opts = {
      title: document.getElementById('post-title'),
      info: document.getElementById('post-content'),
      gauge: $('#chart-container'),
      readmore: document.getElementById('read-more-button')
    };

    function feed_success(obj) {
      var tracker_json = $.xml2json(obj).channel.item;
      //var tracker_json = obj.channel.item;
      // console.log($.xml2json(obj));

      console.log(tracker_json);

      var data = mergeSimilarModels(predef.concat(buildModel(tracker_json)).sort(sortByDate));

      var indices = renderTimeline(timeline_opts, data, render_opts);
      var first_index = indices[0];
      console.log(data[first_index]);

      renderContent(data[first_index], render_opts);

      $('.timeline-trigger').sidr({
        displace: false
      });
    }

    //feed_success(feed);

    $.ajax({
      url: feed,
      timeout: 2000,
      success: feed_success

    });

  });
})(jQuery)
