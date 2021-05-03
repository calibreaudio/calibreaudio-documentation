import Image from 'next/image'

const year = new Date().getFullYear()

export default {
  repository: 'https://github.com/shuding/nextra', // project repo
  docsRepository: 'https://github.com/shuding/nextra', // docs repo
  branch: 'main', // branch of docs
  path: '/', // path of docs
  titleSuffix: ' – Calibre Audio',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `©${year} Calibre Audio, all rights reserved.`,
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: <>
    <Image src="/std-logo.svg" height={36} width={128} />
  </>,
  head: <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Calibre Audio: documentation" />
    <meta name="og:title" content="Calibre Audio: documentation" />
  </>
}