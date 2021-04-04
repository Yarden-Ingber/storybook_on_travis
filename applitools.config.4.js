module.exports = {
  concurrency: 100,
  showLogs: false,
  appName: "LoadTest4",
  batchName: "LoadTest4",
  storybookUrl: "https://jira-storybook.staging.atl-paas.net/?path=/story/*",
  readStoriesTimeout: 300000,
  waitBeforeScreenshots: 200,
  browser: [
    {width: 800, height: 600, name: 'chrome'},
    {width: 800, height: 600, name: 'firefox'},
    {width: 800, height: 600, name: 'safari'}
  ],
  serverUrl: 'https://testeyes.applitools.com',
};