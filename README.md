We Will be using:

We'll be using:
* postgres for database
* knex.js for database migrations, seeds and queries.
* express.js for routes and rendering
* handlebars.js for server side view templates
* boostrap for UI
* faker to seed dummy data (yarn add faker, https://www.npmjs.com/package/faker)
----------------------------------------------------------------
----------------------------------------------------------------

## Full Stack Check List
* Generate Express App
* Create database/table
* Seed table with sample data
* List all records with GET /todo
* Add Bootstrap
* Show new form with /todo/new
* Create a record with POST /todo
* Show one record with GET /todo/:id
* Show an edit form with GET /todo/:id/edit
* Update a record with PUT /todo/:id
* Delete a record with DELETE /todo/:id
* Redirect on create / update / delete

----------------------------------------------------------------
----------------------------------------------------------------

* Generate Express App
1. express --git --hbs .
2. yarn (suda apt-get install yarn)
3. npm start (localhost:3000)

----------------------------------------------------------------

* Create database/table
1. createdb -U postgres ecomm_dev
2. yarn add knex pg (package.json, https://knexjs.org/#Installation-client)
3. yarn
4. ./node_modules/.bin/knex init (modify connection properties on knexfile.js)
5. ./node_modules/.bin/knex migrate:make users (/home/x201/kantor/nodejs/ecommerce/migrations/20190313130834_users.js)
6. ./node_modules/.bin/knex migrate:latest

Seeding:
1./node_modules/.bin/knex seed:make users_seed --env development (seeds/users_seed.js)
2. ./node_modules/.bin/knex seed:run
