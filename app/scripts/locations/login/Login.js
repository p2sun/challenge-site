
var React = window.React = require('react');
var mui = require('material-ui');
var FlatButton = mui.FlatButton;
var ThemeManager = mui.Styles.ThemeManager();
var UserDataMixin = require('../../mixins/UserDataMixin.js');
var AppDataMixin = require('../../mixins/AppDataMixin.js');

// Instantiate site 
var Login = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		}
	},
	render: function() {
		var userData = UserDataMixin.login();

		var client_id = AppDataMixin.getClientId();
		var url = "https://github.com/login/oauth/authorize?client_id=" + client_id 
					+ "&scope=public_repo"

	    return (
	       	<FlatButton linkButton={true} href={url} secondary={true} label="Login with GitHub">	
			</FlatButton>
	    );
	}
});

module.exports = Login;