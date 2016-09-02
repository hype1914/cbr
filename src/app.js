var page = new tabris.Page({
  title: "CunningBros Radio",
  topLevel: true
});
var createImageView = function(scaleMode) {
  new tabris.ImageView({
    layoutData: {centerX : 0, top: 50},
    image: {src: "images/cover.jpg", scale: 1},
     background: "#aaaaaa",
	//background: "#8bc34a",
    scaleMode: scaleMode,
  }).appendTo(page);
};

createImageView("fit");



var webview = new tabris.WebView({
 layoutData: {bottom: 0}
  
}).appendTo(page);

function loadUrl() {
  webview.set("url", "http://www.spreaker.com/user/cunningbros");
}

loadUrl();

page.open();
      