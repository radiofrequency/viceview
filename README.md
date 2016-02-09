# ViceView

I created this module for displaying Adsense ads over https on my single page web app:  [https://www.datememe.com](https://www.datememe.com).

You will find that AdSense codes will not work over https and do not support dynamic loading.  For example when a user changes a page in your Single Page Web App (SPA).


## Setup

To use **ViceView** you will need a working [AdSense](https://www.google.com/adsense) account and be signed up for [Double Click for Publishers](https://www.google.com/dfp).

Log into DFP and create some adunits:

![DFP Screenshot](https://5484a7c8787337b3f8d1092258c32bcb653c2398.googledrive.com/host/0B4H2Vx5E4Rjlcm9RczkxNFZzaTQ/DoubleClick_for_Publishers_-_Ad_units.png)

Get the tracking code:

Step 1
![DFP Screenshot2](https://5484a7c8787337b3f8d1092258c32bcb653c2398.googledrive.com/host/0B4H2Vx5E4Rjlcm9RczkxNFZzaTQ/DoubleClick_for_Publishers_-_Network_settings.png)

Step 2
![DFP Screenshot](https://5484a7c8787337b3f8d1092258c32bcb653c2398.googledrive.com/host/0B4H2Vx5E4Rjlcm9RczkxNFZzaTQ/DoubleClick_for_Publishers_-_Network_settings-Tag.png)

Now in javascript you can do:  
```javascript
  ViceView.showAdsense({adslot: {slot: "myslot", sizes: "[300,100]", id:"your adsenseid"}, element: "element", adwidth: 300, adheight: 100});
```
 


## Example

In the **ViceView** module go into the example directory and edit server.js.   Update the adslots variable with your adcodes.

Now just run:
    npm install
    node server

Open your web browser and go to [http://localhost:9000](http://localhost:9000) in your web browser.

A video showing the example running can be found [here](https://5484a7c8787337b3f8d1092258c32bcb653c2398.googledrive.com/host/0B4H2Vx5E4Rjlcm9RczkxNFZzaTQ/viceview-example.mp4).
    
