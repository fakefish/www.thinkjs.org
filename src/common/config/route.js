export default [
  [/^changelog/, 'index/changelog'],
  [/^demo/, 'index/demo'],
  [/^plugin/, 'index/plugin'],
  [/^doc(?:\/([\d\.\x]+))?\/search$/i, "doc/search?version=:1"],
  [/^doc(?:\/([\d\.\x]+))?\/single$/i, "doc/single?version=:1"],
  [/^doc(?:\/([\d\.\x]+))?(?:\/(.*))?$/i, "doc/index?doc=:2&version=:1"]
];