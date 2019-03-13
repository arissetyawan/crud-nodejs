
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
          {
              email: "aris@kiranatama.com",
              password_hash: "$argon2d$m=4096,t=3,p=1$JGFyZ29uMmQkb[...]",
              password_hash_random_salt: "9FT2UFEWRZOFtz5CQ0542HRTHREs5lalk",
              password_reset_active: false,
              password_reset_hash: null,
              password_reset_time: null,
              first_name: "Aris",
              last_name: "Setyawan",
              created_at: "2019-04-20 12:29:45.964056",
              updated_at: "2019-04-20 12:29:45.964056",
          },
      ]);
    });
};
