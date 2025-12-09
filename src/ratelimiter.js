class RateLimiter {
  middleware() {
    return (req, res, next) => next();
  }
}
module.exports = new RateLimiter();