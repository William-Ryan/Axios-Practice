axios.get("http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe")
.then(res => {
    console.log('This is the response from the Chuck Norris DB', res)
})
.catch(err => {
    console.log('This is an Error!', err);
})
