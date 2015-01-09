Meteor.subscribe('theSimpsons');

Template.list.helpers({
    simpsonsCharacters: function(){
      return Simpsons.find().fetch();
    },

  });