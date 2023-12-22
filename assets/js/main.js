jQuery(function () {
  var offset = 500;
  var back_top = jQuery(".backtop");
  jQuery(window).scroll(function () {
    jQuery(this).scrollTop() > offset
      ? back_top.addClass("show_icon")
      : back_top.removeClass("show_icon");
  });
  if (jQuery("#progressbar").length > 0) {
    jQuery("#progressbar").progressbar({
      value: 70,
    });
  }
  if (jQuery("#progressbar2").length > 0) {
    jQuery("#progressbar2").progressbar({
      value: 70,
    });
  }
  if (jQuery("#horizontalTab").length > 0) {
    jQuery("#horizontalTab").easyResponsiveTabs({
      type: "default",
      width: "auto",
      fit: true,
      activate: function () {
        var $tab = jQuery(this);
        var $info = jQuery("#tabInfo");
        var $name = jQuery("span", $info);
        $name.text($tab.text());
        $info.show();
      },
    });
  }
  if (jQuery("#chart1").length > 0) {
    var ctx = document.getElementById("chart1");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          "Top Cummunity",
          "Reserved Fund",
          "Advisor Team",
          "Sold Globaly",
          "Financial",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [10, 8, 12, 50, 20],
            backgroundColor: [
              "#4845b4",
              "#4fc489",
              "#0ba1d6",
              "#efe943",
              "#e9734a",
            ],
            borderWidth: 0,
            hoverOffset: false,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
      },
    });
  }
  if (jQuery("#chart2").length > 0) {
    var ctx = document.getElementById("chart2");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          "Top Cummunity",
          "Reserved Fund",
          "Advisor Team",
          "Sold Globaly",
          "Financial",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [20, 50, 25, 15, 7],
            backgroundColor: [
              "#4845b4",
              "#4fc489",
              "#0ba1d6",
              "#efe943",
              "#e9734a",
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
      },
    });
  }
  // if (jQuery('#clock').length > 0) {
  //     var exp_date = "Dec 30, 2023 15:37:20";
  //     timer("clock", exp_date);
  // }
  // if (jQuery('#clock2').length > 0) {
  //     var exp_date = "Dec 25, 2023 10:17:25";
  //     timer("clock2", exp_date);
  // }
  // if (jQuery('#clock3').length > 0) {
  //     var exp_date = "Dec 20, 2023 20:50:40";
  //     timer("clock3", exp_date);
  // }

  // function timer(clockID, exp_date) {
  //     var countDownDate = new Date(exp_date).getTime();
  //     var x = setInterval(function() {
  //         var now = new Date().getTime();
  //         var distance = countDownDate - now;
  //         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //         var days = (days < 10) ? '0' + days : days;
  //         var hours = (hours < 10) ? '0' + hours : hours;
  //         var minutes = (minutes < 10) ? '0' + minutes : minutes;
  //         var seconds = (seconds < 10) ? '0' + seconds : seconds;
  //         document.getElementById("days").innerHTML = days;
  //         document.getElementById("hours").innerHTML = hours;
  //         document.getElementById("mins").innerHTML = minutes;
  //         document.getElementById("secs").innerHTML = seconds;
  //         if (distance < 0) {
  //             clearInterval(x);
  //             document.getElementById(clockID).innerHTML = "EXPIRED";
  //         }
  //     }, 1000);
  // }
  //////////////////

  const changeBTC = async () => {
    let ws = await new WebSocket(
      "wss://stream.binance.com:9443/ws/btcusdt@aggTrade"
    );
    // btc,eth,bnb
    // https://github.com/binance-us/binance-official-api-docs/blob/master/web-socket-streams.md
    // etheur@trade
    let sp = document.getElementById("days");
    let price;
    let lp = null; //lastprice
    ws.onmessage = (event) => {
      let stockobj = JSON.parse(event.data);
      price = parseFloat(stockobj.p).toFixed(0);
      sp.innerText = price;
      sp.style.color =
        !lp || lp === price ? "white" : price > lp ? "white" : "red";
      lp = price;
    };
  };

  changeBTC();

  const changeETH = async () => {
    let wse = await new WebSocket(
      "wss://stream.binance.com:9443/ws/ethusdt@aggTrade"
    );
    // btc,eth,bnb
    // https://github.com/binance-us/binance-official-api-docs/blob/master/web-socket-streams.md
    // etheur@trade
    let spe = document.getElementById("hours");
    let pricee;
    let lpe = null; //lastprice
    wse.onmessage = (event) => {
      let stockobje = JSON.parse(event.data);
      pricee = parseFloat(stockobje.p).toFixed(0);
      spe.innerText = pricee;
      spe.style.color =
        !lpe || lpe === pricee ? "white" : pricee > lpe ? "white" : "red";
      lpe = pricee;
    };
  };

  changeETH();

  const changebnb = async () => {
    let wse = await new WebSocket(
      "wss://stream.binance.com:9443/ws/bnbusdt@aggTrade"
    );
    // btc,eth,bnb
    // https://github.com/binance-us/binance-official-api-docs/blob/master/web-socket-streams.md
    // etheur@trade
    let spe = document.getElementById("mins");
    let pricee;
    let lpe = null; //lastprice
    wse.onmessage = (event) => {
      let stockobje = JSON.parse(event.data);
      pricee = parseFloat(stockobje.p).toFixed(0);
      spe.innerText = pricee;
      spe.style.color =
        !lpe || lpe === pricee ? "white" : pricee > lpe ? "white" : "red";
      lpe = pricee;
    };
  };
  changebnb();

  //

  const el = async () => {
    const tokenSymbol = "eloin"; // Replace with the desired cryptocurrency token symbol

    let valxx = document.getElementById("vol24");
    let calxx = document.getElementById("col24");

    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${tokenSymbol}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;

    await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data[tokenSymbol]) {
          // Extracting values from the response
          const currentPrice = data[tokenSymbol].usd;
          const marketCap = data[tokenSymbol].usd_market_cap;
          const volume24h = data[tokenSymbol].usd_24h_vol;
          const change24h = data[tokenSymbol].usd_24h_change;

          // Use toFixed(2) to limit the number of decimal places to 2
          // const formattedPrice = parseFloat(currentPrice).toExponential(1);
          //   const formattedMarketCap = marketCap.toFixed(2);
          const formattedVolume24h = volume24h.toFixed(2);
          const formattedChange24h = change24h.toFixed(2);

          const vals1 = `$${formattedVolume24h}`;
          const vals2 = `${formattedChange24h}%`;

          //       const tokenDetails = `
          //       <h2>${tokenSymbol}</h2>
          //       <p>Current Price: $${formattedPrice}</p>
          //       <p>Market Cap: $${formattedMarketCap}</p>
          //       <p>24h Volume: $${formattedVolume24h}</p>
          //       <p>24h Change: ${formattedChange24h}%</p>
          //   `;

          valxx.innerHTML = vals1;
          calxx.innerHTML = vals2;
        } else {
          valxx.innerHTML = "XX XX";
          calxx.innerHTML = "XX XX";
        }
      })
      .catch((error) => "hello");
  };
  el();

  function dex1() {
    // cURL parameters
    

    // Make the API call using XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://open-api.dextools.io/free/v2/token/bsc/0xe39e2861ae9a45fa321c1b0155d2f99196b2a992/info",
      true
    );
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("X-BLOBR-KEY", "AgKnQtd1ee7TdLhkhcGy3LbpNpIVqJ08");

    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const totalSupply = data.data.totalSupply;
        const fdv = data.data.fdv;
        const holders = data.data.holders;

        // Display in HTML
        document.getElementById("currentSup").textContent =
          totalSupply.toLocaleString();
        document.getElementById("fdv").textContent = fdv
          ? `$${fdv.toLocaleString()}`
          : "XX XX";
        document.getElementById("Holders").textContent =
          holders.toLocaleString();

       
      } else {
        console.error("Error fetching data:", xhr.statusText);
      }
    };

    xhr.onerror = function () {
      console.error("🤔");
    };

    // Execute cURL command
    xhr.send();
  }
  dex1();

  function dex2() {
   

    // Make the API call using XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://open-api.dextools.io/free/v2/token/bsc/0xe39e2861ae9a45fa321c1b0155d2f99196b2a992/price",
      true
    );
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("X-BLOBR-KEY", "AgKnQtd1ee7TdLhkhcGy3LbpNpIVqJ08");

    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const price = data.data.price;

        // Display price in HTML
        document.getElementById("secs").textContent = price
          ? parseFloat(price).toExponential(1)
          : "xx xx";
      } else {
        console.error("Error fetching data:", xhr.statusText);
      }
    };

    xhr.onerror = function () {
      console.error("Request failed");
    };

    // Execute cURL command
    xhr.send();
  }
  dex2();
  ///////////////////////
  if (jQuery(".timeline").length > 0) {
    timeline(document.querySelectorAll(".timeline"), {
      forceVerticalMode: 767,
      mode: "horizontal",
      verticalStartPosition: "left",
      visibleItems: 4,
    });
  }
  if (jQuery(".video-button").length > 0) {
    jQuery(".video-button").modalVideo({
      youtube: {
        autoplay: 1,
        controls: 1,
      },
      ratio: "16:9",
    });
  }
  if (jQuery(".client-logos-slider").length > 0) {
    jQuery(".client-logos-slider").owlCarousel({
      items: 6,
      margin: 0,
      loop: true,
      autoplay: true,
      mouseDrag: true,
      touchDrag: true,
      navText: [
        '<i class="fas fa-angle-left"></i>',
        '<i class="fas fa-angle-right"></i>',
      ],
      nav: false,
      dotsEach: false,
      smartSpeed: 750,
      dots: false,
      lazyLoad: true,
      responsive: {
        0: {
          items: 2,
        },
        480: {
          items: 3,
        },
        767: {
          items: 4,
        },
        991: {
          items: 5,
        },
        992: {
          items: 6,
        },
      },
    });
  }
  if (jQuery(".wow").length > 0) {
    jQuery(function () {
      var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        live: true,
        scrollContainer: null,
      });
      wow.init();
    });
  }
});
jQuery(window).on("load", function () {
  setTimeout(function () {
    jQuery(".preloader").fadeOut("slow");
  }, 500);
});
jQuery(document).ready(function () {
  if (jQuery(".fat-nav").length > 0) {
    (function () {
      jQuery.fatNav();
    })();
    var fatContent = jQuery(".main-menu ul").html();
    var fatHeaderRight = jQuery(".header-right").html();
    var fatNav =
      '<div class="fat-nav__wrapper" id="fatmenu"><ul>' +
      fatContent +
      '<div class="header-right">' +
      fatHeaderRight +
      "</div></ul></div>";
    jQuery(".fat-nav").html(fatNav);
    jQuery("#fatmenu ul li.menu-item-has-children").append(
      "<span class='toggle_button'><small></small></span>"
    );
    jQuery("#fatmenu ul ul").hide();
    jQuery("ul li.menu-item-has-children > .toggle_button").click(function () {
      if (jQuery(this).parent().children("ul").hasClass("submenu")) {
        jQuery(this)
          .parent()
          .children("ul")
          .removeClass("submenu")
          .slideUp(400);
        jQuery(this).removeClass("active_item");
      } else {
        jQuery(this).parent().children("ul").addClass("submenu").slideDown(400);
        jQuery(this).addClass("active_item");
      }
    });
  }
  jQuery(".main-menu ul li ul").parent("li").addClass("menuarrow");
});
jQuery(window).resize(function () {
  var win_width = jQuery(window).width();
  if (win_width > 1099) {
    jQuery(".fat-nav").removeClass("active").css("display", "none");
    jQuery(".hamburger").removeClass("active");
  }
});
