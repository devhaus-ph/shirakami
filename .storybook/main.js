module.exports = {
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
  ],
  stories: ['../src/**/*.stories.(js|mdx)'],
}
