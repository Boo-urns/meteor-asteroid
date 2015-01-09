// Fixture data 
if (Simpsons.find().count() === 0) {
	Simpsons.insert({name: 'Homer', lastname: 'Simpson'});
	Simpsons.insert({name: 'Marge', lastname: 'Simpson'});
	Simpsons.insert({name: 'Bart', lastname: 'Simpson'});
	Simpsons.insert({name: 'Lisa', lastname: 'Simpson'});
	Simpsons.insert({name: 'Maggie', lastname: 'Simpson'});

	Simpsons.insert({name: 'Milhouse'});
	Simpsons.insert({name: 'Nelson'});
	Simpsons.insert({name: 'Jimbo'});
	Simpsons.insert({name: 'Snake'});
}