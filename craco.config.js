/**
 * Temporary, see https://github.com/facebook/create-react-app/pull/5498 to replace craco with native support
 * For now, supported by this thread: https://github.com/facebook/create-react-app/issues/6782
 */
module.exports = {
  webpack: {
    configure: {
      target: "electron-renderer"
    }
  }
};
