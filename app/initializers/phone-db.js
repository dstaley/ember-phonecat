import db from '../utils/phone-db';

export function initialize( container, application ) {
  application.register('db:main', db, { instantiate: false });

  application.inject('route', 'db', 'db:main');
}

export default {
  name: 'phone-db',
  initialize: initialize
};
