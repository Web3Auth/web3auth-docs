module.exports = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Docusaurus',
      items: ['doc1', 'doc2', 'doc3', 'mdx'].map(name => `docusaurus/${name}`)
    }
  ]
};
