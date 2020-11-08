
//response to requests
module.exports = {
  find: async (req, res, next) => {
    res.status(200).json({
      message: 'Hello from the other side'
    });
  }
};