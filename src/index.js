var logger = require('./lib/logger'),
    web_router = require('./lib/web_router');

web_router.running();
web_router.connected();

logger.info('Contact service running');