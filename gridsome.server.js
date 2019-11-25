// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");

bookISBNs = [
  "0553211285",
  "9789875504950",
  "9780439203524",
  "9780883017500",
  "9781402766442",
  "9781585101634",
  "9780393044720",
  "9780143105947",
  "9780881033731"
];

/* jshint ignore:start */
module.exports = function(api) {
  api.loadSource(async store => {
    let books = [];

    for (const isbn of bookISBNs) {
      // First fetch details of each book
      const res = await axios.get(
        `http://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
      );

      if (res.data[`ISBN:${isbn}`]) {
        books.push(res.data[`ISBN:${isbn}`]);
      }
    } // end for loop

    /* Use Gridsome’s Data Store API to create a new collection in our GraphQL data layer 
       by calling the store.addCollection() method. First we add a collection(basically a MySQL table) 
       and define our schema in GraphQL */
    const contentType = store.addCollection({
      typeName: "BookEntry", // table name
      route: "showcase/:id" // vue route that will serve up the page
    });

    /* Next we store our data retrieved via axios from openlibrary in the GraphQL
       data layer. GraphQL allows you to define types, their fields and allows 
       you to query or mutate those types’ fields. */
    for (const item of books) {
      contentType.addNode({  // add a row to contentType collection(table)
        title: item.title,
        date: item.publish_date,
        fields: {
          ...item
        }
      });
    }
  });
};
/* jshint ignore:end */
