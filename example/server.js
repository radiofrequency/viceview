var express = require('express');
var app = express();

var adslots = [{
        slot: "/YOUR-DFP-ID/3_1_rectangle",
        sizes: "[300, 100]",
        id: "YOUR-ADSENSE-ID-0"
    }, {
        slot: "/YOUR-DFP-ID/bottom_bar",
        sizes: "[970, 90]",
        id: "YOUR-ADSENSE-ID-1"
    }, {
        slot: "/YOUR-DFP-ID/button",
        sizes: "[125, 125]",
        id: "YOUR-ADSENSE-ID-2"
    }, {
        slot: "/YOUR-DFP-ID/dm_skyscraper1",
        sizes: "[120, 600]",
        id: "YOUR-ADSENSE-ID-3"
    }, {
        slot: "/YOUR-DFP-ID/full_banner",
        sizes: "[[468, 60], [728, 90]]",
        id: "YOUR-ADSENSE-ID-4"
    }, {
        slot: "/YOUR-DFP-ID/half_banner",
        sizes: "[234, 60]",
        id: "YOUR-ADSENSE-ID-5"
    }, {
        slot: "/YOUR-DFP-ID/half_page_ad",
        sizes: "[300, 600]",
        id: "YOUR-ADSENSE-ID-6"
    }, {
        slot: "/YOUR-DFP-ID/large_leaderboard",
        sizes: "[[728, 90], [970, 90]]",
        id: "YOUR-ADSENSE-ID-7"
    }, {
        slot: "/YOUR-DFP-ID/Leaderboard",
        sizes: "[728, 90]",
        id: "YOUR-ADSENSE-ID-8"
    }, {
        slot: "/YOUR-DFP-ID/logoutad_large_rect",
        sizes: "[336, 280]",
        id: "YOUR-ADSENSE-ID-9"
    }, {
        slot: "/YOUR-DFP-ID/dm_skyscraper1",
        sizes: "[120, 600]",
        id: "YOUR-ADSENSE-ID-10"
    }, {
        slot: "/YOUR-DFP-ID/micro_bar",
        sizes: "[88, 31]",
        id: "YOUR-ADSENSE-ID-11"
    }, {
        slot: "/YOUR-DFP-ID/mobile_leaderboard",
        sizes: "[320, 50]",
        id: "YOUR-ADSENSE-ID-12"
    }, {
        slot: "/YOUR-DFP-ID/profile_sqare",
        sizes: "[336, 280]",
        id: "YOUR-ADSENSE-ID-13"
    }, {
        slot: "/YOUR-DFP-ID/rectangle",
        sizes: "[180, 150]",
        id: "YOUR-ADSENSE-ID-14"
    }, {
        slot: "/YOUR-DFP-ID/skyscraper",
        sizes: "[120, 600]",
        id: "YOUR-ADSENSE-ID-15"
    }, {
        slot: "/YOUR-DFP-ID/small_square",
        sizes: "[200, 200]",
        id: "YOUR-ADSENSE-ID-16"
    }, {
        slot: "/YOUR-DFP-ID/square",
        sizes: "[250, 250]",
        id: "YOUR-ADSENSE-ID-17"
    }, {
        slot: "/YOUR-DFP-ID/vertical_banner",
        sizes: "[120, 240]",
        id: "YOUR-ADSENSE-ID-18"
    }, {
        slot: "/YOUR-DFP-ID/vertical_rectangle",
        sizes: "[240, 400]",
        id: "YOUR-ADSENSE-ID-19"
    }, {
        slot: "/YOUR-DFP-ID/wide_skyscraper",
        sizes: "[160, 600]",
        id: "YOUR-ADSENSE-ID-20"
    },

];
app.use(express.static('static'));
app.use(express.static('node_modules'));


app.get('*', function(req, res) {
    res.render('index.jade', {
        adslots: adslots
    });
});

app.listen(9009);