module.exports = {
  testConcurrency: 20,
  showLogs: true,
  appName: "LoadTest9",
  batchName: "LoadTest9",
  storybookUrl: "http://airbnb.io/react-dates/?path=/story/daterangepicker-drp--default",
  readStoriesTimeout: 300000,
  waitBeforeScreenshots: 200,
  browser: [
    {width: 800, height: 600, name: 'chrome'}
  ],
  serverUrl: 'https://test2eyes.applitools.com',
};
