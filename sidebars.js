module.exports = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'OpenLogin',
      items: ['get-started'].map(name => `openlogin/${name}`)
    },
    {
      type: 'category',
      label: 'DirectAuth',
      items: ['get-started'].map(name => `directauth/${name}`)
    },
    {
      type: 'category',
      label: 'Torus Network',
      items: ['get-started'].map(name => `torus-network/${name}`)
    },
  ]
};
