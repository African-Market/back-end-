
exports.seed = function(knex, Promise) {
  return knex('items').truncate()
    .then(function () {
      return knex('items').insert([
        { location: 'Germany',  name: 'product-01', quantity: 1, description:'', price: 4000.00 },
        { location: 'Zambia',   name: 'product-02', quantity: 1, description:'', price: 206.75 },
        { location: 'Chad',     name: 'product-03', quantity: 1, description:'', price: 6789.00 },
        { location: 'Mali',     name: 'product-04', quantity: 1, description:'', price: 199.99 },
        { location: 'Kenya',    name: 'product-05', quantity: 1, description:'', price: 22.34 },
        { location: 'Yemen',    name: 'product-06', quantity: 1, description:'', price: 300.00 },
        { location: 'Nigeria',  name: 'product-07', quantity: 1, description:'', price: 7000.00 },
        { location: 'Morocco',  name: 'product-08', quantity: 1, description:'', price: 78800.00 },
        { location: 'Sudan',    name: 'product-09', quantity: 1, description:'', price: 3030.30 },
        { location: 'Egypt',    name: 'product-10', quantity: 1, description:'', price: 19.56 },
        { location: 'Libya',    name: 'product-11', quantity: 1, description:'', price: 19.91 },
        { location: 'Sudan',    name: 'product-12', quantity: 1, description:'', price: 7080.00 },
        { location: 'Somalia',  name: 'product-13', quantity: 1, description:'', price: 1234.00 },
      ])
    });
};
