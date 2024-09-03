'use strict';

/**
 * doner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::doner.doner');
