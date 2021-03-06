try {
  const project = process.env.__TS_PROJECT_PATH__ || '.';
  require('ts-node').register({
    project,
    fast: true,
  });
  process.env.TS_NODE_PROJECT = project;
  require('tsconfig-paths/register');
} catch (error) {
  console.log('[ERROR] ' + error.message);
  process.exit(1);
}
