'use strict';

angular.module('myContactsApp')
  .controller('MainCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
	
  	var ref = new Firebase('https://mycontacts-andres.firebaseio.com/');

  	$scope.contacts = $firebaseArray(ref);

  	// $scope.newContact = {
  	// 	fullName: '',
  	// 	phone: ''
  	// };

  	$scope.fullName = '';
  	$scope.phone = '';

  	// Adds Contacts
  	$scope.addContact = function() {
  		if($scope.fullName){ 
  			var fullName = $scope.fullName 
  		} else { 
  			var fullName = null; 
  		}

  		if($scope.phone){ 
  			var phone = $scope.phone 
  		} else { 
  			var phone = null; 
  		}

  		$scope.contacts.$add(
	  		{
	  			fullName: fullName,
	  			phone: phone
	  		}).then(function(ref) {
  			var id = ref.key();
  		});

  		// $scope.newContact = {
	  	// 	fullName: '',
	  	// 	phone: ''
	  	// };

	  	$scope.fullName = '';
	  	$scope.phone = '';

  	}

  	// Remove Contacts
  	$scope.removeContact = function(contact) {
  		console.log('Removing Contact...');

  		$scope.contacts.$remove(contact);

  	}

  	$scope.showFullContactInfo = function(contact){
  		console.log('showing the contact...');
  		
  		$scope.showExistingContact = true;

  		$scope.id = contact.$id;
  		$scope.editFullName = contact.fullName;
	  	$scope.editPhone = contact.phone;
	}

  	$scope.UpdateContact = function() {
  		console.log('updating contact...');

  		// get id
  		var id = $scope.id;

  		// get record
  		var record = $scope.contacts.$getRecord(id);

  		// assign values
  		record.fullName = $scope.editFullName,
	  	record.phone = $scope.editPhone

  		$scope.contacts.$save(record).then(function(ref) {
  			console.log(ref.key);
  		});

  		$scope.editFullName = '';
	  	$scope.editPhone = '';

	  	$scope.showExistingContact = false;

  	}

  	$scope.hideForm = function(){
  		$scope.showExistingContact = false;
  	}

  	$scope.moveDown = function(contact){

  		//var id = $scope.id;
  		var key = $scope.contacts.$keyAt(1);
  		console.log(key);

  	}


  }]);
