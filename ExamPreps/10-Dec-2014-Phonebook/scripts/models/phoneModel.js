define(['requester'], function (requester) {
	function PhoneModel() {
	}

	PhoneModel.prototype.getAllPhones = function () {
		return requester.get('classes/Phone', true);
	};

	PhoneModel.prototype.getPhone = function (id) {
		return requester.get('classes/Phone/' + id, true);
	};

	PhoneModel.prototype.deletePhone = function (id) {
		return requester.remove('classes/Phone/' + id, true);
	};

	PhoneModel.prototype.editPhone = function (id, personName, number,ownerId) {
		var ACL = setACL(ownerId);
		return requester.put('classes/Phone/' + id, {person: personName, number: number, ACL: ACL}, true);
	};

	PhoneModel.prototype.addPhone = function (ownerId, person, number) {
		var ACL = setACL(ownerId);
		return requester.post('classes/Phone', {person: person, number: number, ACL: ACL});
	};

	function setACL(id) {
		var ACL = {};
		ACL[id] = {"write": true, "read": true};
		return ACL;
	}

	return new PhoneModel();
});