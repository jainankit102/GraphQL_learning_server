const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://ankit:test123@qql-learn.gpg0e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

mongoose.connection.once('open', () => {
    console.log('Connected with mongodb')
})

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(9000, () => {
    console.log('Listing to 9000')
}) 