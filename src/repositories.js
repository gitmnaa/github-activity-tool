function summarizeRepository(repository) {
  return {
    name: repository.name,
    stars: repository.stars || 0,
    forks: repository.forks || 0
  };
}

module.exports = {
  summarizeRepository
};
