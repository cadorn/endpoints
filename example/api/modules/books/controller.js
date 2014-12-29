const EndpointsExpress = require('../../../../lib/endpoints-express');
const EndpointsReceiver = require('../../../../lib/endpoints-receiver');
const EndpointsSource = require('../../../../lib/endpoints-source-bookshelf');

const Source = new EndpointsSource({
  model: require('./model')
});

const Receiver = new EndpointsReceiver({
  allowedFilters: Object.keys(Source.filters()),
  allowedRelations: Object.keys(Source.relations())
});

module.exports = new EndpointsExpress({
  source: Source,
  receiver: Receiver
});