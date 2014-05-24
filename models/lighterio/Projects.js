module.exports = Model.extend({

  fields: {
    name: 'string',
    tagLine: 'string',
    description: 'text'
  },

  forceSync: true,

  onReady: function () {
    /*
    var Projects = this;
    Projects.create({
      name: 'Seattle',
      tagLine: 'Standard',
      description: 'Seattle is a Node.js module for creating and publishing modules that adhere to the Seattle Pub.js Standard.'
    }, function (err) {
      if (err) {
        log.error('Dang.')
      }
      else {
        log.info('Yay!');
        Projects.find(function (err, items) {
          console.log(items);
        });
      }
    });
    */
  }

});
