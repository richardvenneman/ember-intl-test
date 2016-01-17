import Ember from 'ember';

export default Ember.Component.extend({
  intl: Ember.inject.service(),

  output: Ember.computed('key', function() {
    let key = `output.${this.get('key')}`

    return this.get('intl').formatMessage(key/*, optional options hash */);
  })
});
