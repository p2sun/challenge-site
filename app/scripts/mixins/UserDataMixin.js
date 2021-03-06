var $ = require('jquery');

var UserDataMixin = {
  login: function() {
  	var token = window.localStorage.getItem("token");

  	if (!token) {
  		console.log("No token..");
  		return false;
  	} else {
			// Store user data info now based on request to github
      this.access_token = token;
      var tokenStr = "token " + token;

      var self = this;

      var d = $.ajax({
          type: "GET",
          url: "https://api.github.com/user",
          beforeSend: function (request)
              {
                  request.setRequestHeader("Authorization", tokenStr);
              },
          async: false
        }).done(function(data) {
          if (!data.error) {
            this.userData = {
              userId: data.id,
              avatar_url: data.avatar_url,
              gravatar_url: data.gravatar_url,
              github_api_url: data.url,
              userName: data.login,
              name: data.name,
              profile_url: data.html_url
            };
            return this.userData;
          }
          else {
            console.log(data);
            return false;
          }
        });

        return d;
      }
  },
  getUserData: function() {
    return this.userData;
  },
  getAccessToken: function() {
    return this.access_token;
  }
}

module.exports = UserDataMixin;