import {
    moduleForComponent,
    test
} from 'ember-qunit';

import chai from 'chai';
import { expect } from 'chai';

import { initialize } from '../../../../../initializers/ember-moment';

moduleForComponent('event-card', 'EventCardComponent',  {integration: true});


test('it spy works', function (assert) {
    assert.expect(0);
    function hello(name, cb) {
        cb("hello " + name);
    }

    var cb = sinon.spy();
    hello("foo", cb);

    expect(cb.called).to.be.true;
    // assert.ok(cb.called);
});



test('it renders', function (assert) {
    assert.expect(2);
    initialize(this.container);
    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
});
