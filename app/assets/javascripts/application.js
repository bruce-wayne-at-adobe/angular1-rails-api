// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require angular 
//= require turbolinks
//= require_tree .

// var _ = require('lodash'); 

 // userInput = 'déjà vu';
 // sanatizedInput = string.deburr(userInput);

 // document.addEventListener("DOMContentLoaded", function(event) { 
    // output results to the console.
  // console.log("lodash is working -> " + sanatizedInput);

// });
// function playSomeSound(genre) {
// 	SC.get('/tracks',  {
// 		genres: genre,
// 		bpm: {
// 			from: 100
// 		}
// 	}, function(tracks) {
// 		var random = Math.floor(Math.random() * 49);
// 		SC.oEmbed(tracks[random].uri, { auto_play: true }, document.getElementById('target'));

// 	});
// }

// window.onload = function() {
// 	SC.initialize({
// 		client_id: 'd5aab446820d1a373198c18b0f40f371'
// 	});
// };

// function sendRequest() {

//         var params = {
//             // Request parameters
//             "visualFeatures": "Categories,Tags",
//             "details": "Celebrities"
//         };
      
//         $.ajax({
//             url: "https://api.projectoxford.ai/vision/v1.0/analyze?" + $.param(params),
//             beforeSend: function(xhrObj){
//                 // Request headers
//                 xhrObj.setRequestHeader("Content-Type","multipart/form-data");
//                 xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","ef16492357394ee2b719b50fb10cd6c9");
//             },
//             type: "POST",
//             // Request body
//             data: $("#picture_form").serialize(),
//         })
//         .done(function(data) {
//             alert("success");
//         })
//         .fail(function(jqHQR, status) {
//             alert("error : " + jqHQR + " status " + status);
//         });

// }
$(function sendFileRequest(file) {
    // $scope.entries.push($scope.newEntry)
    $("#azure").submit(function() {
        $.post(
            "https://api.projectoxford.ai/vision/v1.0/analyze?" + $.param(params),

        var params = {
            // Request parameters
            "visualFeatures": "Categories,Tags",
            "details": "Celebrities",
       
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/octet-stream");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","ef16492357394ee2b719b50fb10cd6c9");
            }
            // Request body
            data: file,
            processData: false,
            contentType: "application/octet-stream"
        })
        .done(function(data) {
            alert("success");
        })
        .fail(function(jqHQR, status) {
            alert("error : " + jqHQR + " status " + status);
        });


}  
});
console.log("checking in from custom!")






// #!/usr/bin/ruby
 
// require "uri"
// require "net/http"
 
// params = {'box1′ => 'Nothing is less important than which fork you use. Etiquette is the science of living. It embraces everything. It is ethics. It is honor. -Emily Post',
// 'button1′ => 'Submit'
// }
// x = Net::HTTP.post_form(URI.parse('http://www.interlacken.com/webdbdev/ch05/formpost.asp'), params)
// puts x.body
 
// # Uncomment this if you want output in a file
// # File.open('out.htm', 'w') { |f| f.write x.body }
// uri = URI('https://api.projectoxford.ai/vision/v1.0/analyze')
// uri.query = URI.encode_www_form({
//     // Request parameters
//     'visualFeatures' => 'Categories',
//     'details' => '{string}'
// })

// request = Net::HTTP::Post.new(uri.request_uri)
// // # Request headers
// request['Content-Type'] = 'application/json'
// // # Request headers
// request['Ocp-Apim-Subscription-Key'] = '{ef16492357394ee2b719b50fb10cd6c9}'
// # Request body
// request.body = "{body}"

// response = Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
//     http.request(request)
// end

// puts response.body

