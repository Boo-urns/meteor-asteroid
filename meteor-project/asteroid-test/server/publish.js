Meteor.publish('theSimpsons', function(){
    return Simpsons.find();
});
