describe('Routes', function () {
	var $state;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$state = $injector.get('$state');
	}));

	describe('Settings', function () {
		var state;

		it('should have the correct URL', function () {
			state = $state.get('settings');

			expect(state.url).toEqual('/settings');

			expect(state.templateUrl).toEqual('views/settings.html')
		});
	});

	describe('User', function(){
		var state;

		it('should have the correct URL', function(){
			state = $state.get('settings.user');
			expect(state.url).toEqual('/user');
			expect(state.templateUrl).toEqual('views/settings/user.html');
		})
	})

	describe('Notifications', function(){
		var state;

		it('should have the correct URL', function(){
			state = $state.get('settings.notifications');
			expect(state.url).toEqual('/notifications');
			expect(state.templateUrl).toEqual('views/settings/notifications.html');
		})
	})


});
