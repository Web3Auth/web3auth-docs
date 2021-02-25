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
      label: 'Torus Wallet',
      items: ['get-started'].map(name => `torus-wallet/${name}`)
    },
    {
      type: 'category',
      label: 'Docusaurus',
      items: ['doc1', 'doc2', 'doc3', 'mdx'].map(name => `docusaurus/${name}`)
    },
  ]
};
