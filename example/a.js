require.ensure(['./b.js'], () => {
  console.log('a');
});