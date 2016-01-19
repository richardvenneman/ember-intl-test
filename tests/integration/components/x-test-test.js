import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import instanceInitializer from '../../../instance-initializers/ember-intl';

moduleForComponent('x-test', 'Integration | Component | x test', {
  integration: true,
  setup() {
    // manually invoke the ember-intl initializer
    instanceInitializer.initialize(this);
    const intl = this.container.lookup('service:intl');
    intl.setLocale('en-us');
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{x-test key='test'}}`);

  assert.equal(this.$('.output').text().trim(), 'Awesomeness');
});
