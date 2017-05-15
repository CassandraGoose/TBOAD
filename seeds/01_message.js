exports.seed = function(knex, Promise) {
  return knex.raw('delete from message; alter sequence message_id_seq restart with 4')
    .then(function() {

      const fillerMessage = [{
        id: 1,
        name: "bitch",
        text: "hello from messages."
      }, {
        id: 2,
        name: 'killa',
        text: "My dog is probably so muddy."
      }]
      return knex('message').insert(fillerMessage)
    });
};
