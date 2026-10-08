function calculateActivityScore(pushes, pullRequests, issues) {
  return pushes + pullRequests * 2 + issues;
}

module.exports = {
  calculateActivityScore
};
