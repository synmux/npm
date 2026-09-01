import chalk from 'chalk'
import chalkAnimation from 'chalk-animation'
import Table from 'cli-table3'
import { pastel } from 'gradient-string'
import ora from 'ora'
// @ts-expect-error: No types for 'update-notifier'
import updateNotifier from 'update-notifier'
import pkg from '../package.json' with { type: 'json' }

// Check for updates at startup
const notifier = updateNotifier({ pkg })
if (notifier.update) {
  notifier.notify()
}

// Define timeout as a utility function for better readability
const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

// OSC-8 hyperlink utility function to make terminal links clickable
const terminalLink = (text: string, url: string): string => {
  return `\u001B]8;;${url}\u0007${text}\u001B]8;;\u0007`
}

// Define social media link type for better type safety
interface SocialLink {
  icon: string
  name: string
  url: string
  color: chalk.ChalkFunction
  link: (text: string) => string
}

export default async function (): Promise<void> {
  // Create a spinner while "loading" the profile
  const spinner = ora({
    text: chalk.cyan('Crunching...'),
    spinner: 'binary'
  }).start()

  // Simulate loading time
  await sleep(2000)
  spinner.succeed()

  // Prepare version string with proper padding
  const versionStr = `syn (v${pkg.version})`

  // Title with gradient
  console.log(
    `\n${pastel.multiline(
      `
          ╔═══════════════════════════════════════╗
          ║                                       ║
          ║              ${versionStr.padEnd(25, ' ')}║
          ║                                       ║
          ╚═══════════════════════════════════════╝
    `
    )}`
  )

  // Animate the introduction
  const introText = '\n🚀 Weapons-grade DevOps engineer, developer, and tinkerer 🚀\n'
  const introAnim = chalkAnimation.rainbow(introText)
  await sleep(2000)
  introAnim.stop()

  // Replace with gradient version by moving cursor up and overwriting
  // Count the number of lines (2 for the \n characters plus potentially wrapped lines)
  const lineCount = introText.split('\n').length
  process.stdout.write(`\x1b[${lineCount}A\x1b[0J`) // Move cursor up and clear from cursor to end
  console.log(pastel(introText))

  // Define social media links - colors in rainbow order with no consecutive repeats
  const links: SocialLink[] = [
    {
      icon: '🦋',
      name: 'Bluesky',
      url: 'https://bsky.app/profile/syn.horse',
      color: chalk.yellow,
      link: (text) => terminalLink(chalk.underline(chalk.yellow(text)), 'https://bsky.app/profile/syn.horse')
    },
    {
      icon: '📘',
      name: 'Facebook',
      url: 'https://facebook.com/synmux',
      color: chalk.blue,
      link: (text) => terminalLink(chalk.underline(chalk.blue(text)), 'https://facebook.com/synmux')
    },
    {
      icon: '🐙',
      name: 'GitHub',
      url: 'https://github.com/synmux',
      color: chalk.magenta,
      link: (text) => terminalLink(chalk.underline(chalk.magenta(text)), 'https://github.com/synmux')
    },
    {
      icon: '📷',
      name: 'Instagram',
      url: 'https://instagram.com/synmux',
      color: chalk.red,
      link: (text) => terminalLink(chalk.underline(chalk.red(text)), 'https://instagram.com/synmux')
    },
    {
      icon: '🔗',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/dcwilliams',
      color: chalk.yellow,
      link: (text) => terminalLink(chalk.underline(chalk.yellow(text)), 'https://linkedin.com/in/dcwilliams')
    },
    {
      icon: '🐘',
      name: 'Mastodon',
      url: 'https://basilisk.gallery/@syn',
      color: chalk.green,
      link: (text) => terminalLink(chalk.underline(chalk.green(text)), 'https://basilisk.gallery/@syn')
    },
    {
      icon: '🧵',
      name: 'Threads',
      url: 'https://threads.com/@synmux',
      color: chalk.magenta,
      link: (text) => terminalLink(chalk.underline(chalk.magenta(text)), 'https://threads.com/@synmux')
    },
    {
      icon: '🎥',
      name: 'YouTube',
      url: 'https://youtube.com/@synmux',
      color: chalk.yellow,
      link: (text) => terminalLink(chalk.underline(chalk.yellow(text)), 'https://youtube.com/@synmux')
    },
    {
      icon: '☠️',
      name: 'Twitter',
      url: "We don't use Twitter any more.",
      color: chalk.dim,
      link: (text) => chalk.dim(text) // No link for Twitter
    }
  ]

  // Create a table without borders
  const table = new Table({
    chars: {
      top: '',
      'top-mid': '',
      'top-left': '',
      'top-right': '',
      bottom: '',
      'bottom-mid': '',
      'bottom-left': '',
      'bottom-right': '',
      left: '',
      'left-mid': '',
      mid: '',
      'mid-mid': '',
      right: '',
      'right-mid': '',
      middle: ' '
    },
    style: {
      'padding-left': 0,
      'padding-right': 1,
      border: []
    },
    colWidths: [20, 45],
    colAligns: ['right', 'left']
  })

  // Add content to table
  table.push(
    [chalk.greenBright('🌐 Web'), terminalLink(chalk.underline(chalk.white('https://syn.horse')), 'https://syn.horse')],
    [],
    [chalk.blue('⚧  Pronouns'), chalk.white('they/them')],
    [],
    ...links.map((link) => [link.color(`${link.icon} ${link.name}`), link.link(link.url)]),
    [],
    [
      chalk.greenBright('💼 Check out my CV'),
      terminalLink(
        chalk.underline(chalk.white('https://public.syn.horse/files/cv.pdf')),
        'https://public.syn.horse/files/cv.pdf'
      )
    ]
  )

  // Display the table
  console.log(table.toString())
}
