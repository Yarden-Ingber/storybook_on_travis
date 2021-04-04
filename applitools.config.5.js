module.exports = {
  concurrency: 100,
  showLogs: true,
  appName: "LoadTest5",
  batchName: "LoadTest5",
  storybookUrl: "http://airbnb.io/react-dates/?path=/story/daterangepicker-drp--default",
  readStoriesTimeout: 300000,
  waitBeforeScreenshots: 200,
  browser: [
    {width: 800, height: 600, name: 'chrome'}
  ],
  serverUrl: 'https://testeyes.applitools.com',
};