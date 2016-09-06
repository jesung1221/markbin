import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

Meteor.methods({
	'bins.insert': function(){ //cannot be a fatarrow function because this.userId is meteor context, not surrounding context
		return Bins.insert({
			createdAt: new Date(),
			content: '',
			sharedWith: [],
			ownerId: this.userId
			});
	},

	'bins.remove': function(bin){
			return Bins.remove(bin);
	},

	'bins.update': function(bin,content){ //
		return Bins.update(bin._id, {$set:{content} });
	},

	'bins.share': function(bin, email){
		return Bins.update(bin._id, {$push:{sharedWith: email}})
	}
});
export const Bins = new Mongo.Collection('bins');
