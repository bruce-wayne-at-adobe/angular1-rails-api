

var myAppModule = angular.module('myApp', [])
myAppModule.controller('ImageController', ['$scope', function($scope) {

    $scope.responses = [
        
        {"categories":[{"name":"people_","score":0.94921875,"detail":{"celebrities":[]}}],"tags":[{"name":"person","confidence":0.99035865068435669},{"name":"outdoor","confidence":0.99035370349884033},{"name":"woman","confidence":0.902657687664032},{"name":"street","confidence":0.75811612606048584}],"requestId":"abe0e56d-8879-441b-b076-ba1a8da1a092","metadata":{"width":960,"height":1280,"format":"Jpeg"}},

        {"categories":[{"name":"people_","score":0.33203125,"detail":{"celebrities":[]}},{"name":"people_group","score":0.640625}],"tags":[{"name":"person","confidence":0.99981540441513062},{"name":"clothing","confidence":0.93182039260864258},{"name":"posing","confidence":0.92629814147949219},{"name":"suit","confidence":0.69583016633987427}],"requestId":"ed7845f5-e6ac-46ce-bb1f-69f18ce58f0a","metadata":{"width":1280,"height":960,"format":"Jpeg"}},

        {"categories":[{"name":"people_","score":0.3984375,"detail":{"celebrities":[]}},{"name":"people_group","score":0.44921875}],"tags":[{"name":"person","confidence":0.9997829794883728},{"name":"clothing","confidence":0.95785820484161377},{"name":"posing","confidence":0.83074581623077393},{"name":"suit","confidence":0.63975614309310913}],"requestId":"faf12b74-56da-4921-a86b-3e36abd74070","metadata":{"width":1280,"height":960,"format":"Jpeg"}},

        {"categories":[{"name":"people_group","score":0.6328125,"detail":{"celebrities":[]}}],"tags":[{"name":"person","confidence":0.99835050106048584},{"name":"indoor","confidence":0.93220812082290649},{"name":"posing","confidence":0.826675534248352}],"requestId":"75616523-ca5e-47b3-9db4-5b2361138f15","metadata":{"width":2576,"height":1952,"format":"Jpeg"}},

        {"categories":[{"name":"people_","score":0.3984375,"detail":{"celebrities":[]}},{"name":"people_group","score":0.4140625}],"tags":[{"name":"person","confidence":0.999476969242096},{"name":"people","confidence":0.81858372688293457},{"name":"crowd","confidence":0.0085046868771314621}],"requestId":"92d4fbc5-62b0-4857-9a46-43db69a89301","metadata":{"width":1280,"height":960,"format":"Jpeg"}},

        {"categories":[{"name":"people_crowd","score":0.484375,"detail":{"celebrities":[]}},{"name":"people_group","score":0.3125}],"tags":[{"name":"person","confidence":0.999496579170227}],"requestId":"2c52e5aa-e16c-4737-87aa-3d7e68c11096","metadata":{"width":2816,"height":2112,"format":"Jpeg"}},

        {"categories":[{"name":"others_","score":0.00390625},{"name":"people_","score":0.3125,"detail":{"celebrities":[]}}],"tags":[{"name":"person","confidence":0.99692058563232422},{"name":"spectacles","confidence":0.15585459768772125}],"requestId":"41ff5c28-c766-41fd-b1f9-d1c1d6b047d2","metadata":{"width":1818,"height":1228,"format":"Jpeg"}}
    ]
}])

// var myAppModule = angular.module('myApp', [])
// myAppModule.controller('ImageController', ['$scope', function($scope) {

//     $scope.responses = [
        
//         {"categories":[{"name":"people_","score":0.94921875,"detail":{"celebrities":[]}}],"tags":[{"name":"person","confidence":0.99035865068435669},{"name":"outdoor","confidence":0.99035370349884033},{"name":"woman","confidence":0.902657687664032},{"name":"street","confidence":0.75811612606048584}],"requestId":"abe0e56d-8879-441b-b076-ba1a8da1a092","metadata":{"width":960,"height":1280,"format":"Jpeg"}},

//         {"categories":[{"name":"people_","score":0.33203125,"detail":{"celebrities":[]}},{"name":"people_group","score":0.640625}],"tags":[{"name":"person","confidence":0.99981540441513062},{"name":"clothing","confidence":0.93182039260864258},{"name":"posing","confidence":0.92629814147949219},{"name":"suit","confidence":0.69583016633987427}],"requestId":"ed7845f5-e6ac-46ce-bb1f-69f18ce58f0a","metadata":{"width":1280,"height":960,"format":"Jpeg"}},

//         {"categories":[{"name":"people_","score":0.3984375,"detail":{"celebrities":[]}},{"name":"people_group","score":0.44921875}],"tags":[{"name":"person","confidence":0.9997829794883728},{"name":"clothing","confidence":0.95785820484161377},{"name":"posing","confidence":0.83074581623077393},{"name":"suit","confidence":0.63975614309310913}],"requestId":"faf12b74-56da-4921-a86b-3e36abd74070","metadata":{"width":1280,"height":960,"format":"Jpeg"}},

//         {"categories":[{"name":"people_group","score":0.6328125,"detail":{"celebrities":[]}}],"tags":[{"name":"person","confidence":0.99835050106048584},{"name":"indoor","confidence":0.93220812082290649},{"name":"posing","confidence":0.826675534248352}],"requestId":"75616523-ca5e-47b3-9db4-5b2361138f15","metadata":{"width":2576,"height":1952,"format":"Jpeg"}},

//         {"categories":[{"name":"people_","score":0.3984375,"detail":{"celebrities":[]}},{"name":"people_group","score":0.4140625}],"tags":[{"name":"person","confidence":0.999476969242096},{"name":"people","confidence":0.81858372688293457},{"name":"crowd","confidence":0.0085046868771314621}],"requestId":"92d4fbc5-62b0-4857-9a46-43db69a89301","metadata":{"width":1280,"height":960,"format":"Jpeg"}},

//         {"categories":[{"name":"people_crowd","score":0.484375,"detail":{"celebrities":[]}},{"name":"people_group","score":0.3125}],"tags":[{"name":"person","confidence":0.999496579170227}],"requestId":"2c52e5aa-e16c-4737-87aa-3d7e68c11096","metadata":{"width":2816,"height":2112,"format":"Jpeg"}},

//         {"categories":[{"name":"others_","score":0.00390625},{"name":"people_","score":0.3125,"detail":{"celebrities":[]}}],"tags":[{"name":"person","confidence":0.99692058563232422},{"name":"spectacles","confidence":0.15585459768772125}],"requestId":"41ff5c28-c766-41fd-b1f9-d1c1d6b047d2","metadata":{"width":1818,"height":1228,"format":"Jpeg"}}
//     ]
// }])

// $scope.uploadFile = function(files) {
//     var fd = new FormData();
//     //Take the first selected file
//     fd.append("file", files[0]);

//     $http.post("https://api.projectoxford.ai/vision/v1.0/analyze?" + $.param(params), fd, {
//         withCredentials: true,
//         headers: {'Content-Type': undefined },
//         transformRequest: angular.identity
//     }).success( all right! ).error( damn! );

// };
// (function (){
//  function SendFileRequest($scope, $routeParams, azureProvider) ->
// 	$scope.sendFileRequest = $routeParams.sendFileRequest;
//     $scope.page_load_error = "";

//     azureProvider.postPhotosForAzure($scope.sendFileRequest, function(err, tags) {
//     	if (err) {
//     		if (err.code == "not_found")
//     			$scope.page_load_error = "Dude, what are you doing?!";
//     		else
//     			$scope.page_load_error = "Unexpected error loading page: " + err.code + " " + err.message;
//     	} else {
//     		$scope.tags = tags;
//     		$scope.uploader = azureProvider.getUploader($scope.sendFileRequest, $scope);
//     	}
//     	});

//     }
//     myAppModule.controller("azureApiTest", azureApiTest);
// () =>
//     $scope.newEntry = {}
//          params = {
//             // Request parameters
//             "visualFeatures": "Categories,Tags",
//             "details": "Celebrities",
//         };
      
//         $.ajax({
//             url: "https://api.projectoxford.ai/vision/v1.0/analyze?" + $.param(params),
//             beforeSend: function(xhrObj){
//                 // Request headers
//                 xhrObj.setRequestHeader("Content-Type","application/octet-stream");
//                 xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","ef16492357394ee2b719b50fb10cd6c9");
//             },
//             type: "POST",
//             // Request body
//             data: file,
//             processData: false,
//             contentType: "application/octet-stream"
//         })
//         .done(function(data) {
//             alert("success");
//         })
//         .fail(function(jqHQR, status) {
//             alert("error : " + jqHQR + " status " + status);
// })
  
 

// 
console.log("checking in from appjs!")
    

   