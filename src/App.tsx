import { SiFacebook, SiGithub, SiSinaweibo, SiX } from '@icons-pack/react-simple-icons'
import { HomeIcon, NotebookIcon } from 'lucide-react'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { Button } from '@/components/ui/button'
import { Dock, DockIcon } from '@/components/ui/dock'
import { FlickeringGrid } from '@/components/ui/flickering-grid'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const Links = {
  navbar: [
    { href: 'https://blog.tazimi.dev', icon: HomeIcon, label: 'Blog' },
    { href: 'https://notes.tazimi.dev', icon: NotebookIcon, label: 'Notes' },
  ],
  contact: {
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/sabertazimi',
        icon: SiGithub,
      },
      X: {
        name: 'X',
        url: 'https://x.com/sabertazimi',
        icon: SiX,
      },
      Facebook: {
        name: 'LinkedIn',
        url: 'https://facebook.com/sabertazimi',
        icon: SiFacebook,
      },
      Weibo: {
        name: 'Send Email',
        url: 'https://weibo.com/sabertazimi',
        icon: SiSinaweibo,
      },
    },
  },
}

function App() {
  return (
    <BackgroundPaths
      title="Sabertaz"
      background={(
        <div className="absolute top-0 left-0 z-0 h-screen w-full mask-[linear-gradient(to_top,transparent_25%,black_95%)]">
          <FlickeringGrid
            className="absolute top-0 left-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
        </div>
      )}
    >
      <TooltipProvider>
        <Dock direction="middle">
          {Links.navbar.map(item => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <item.icon className="size-6" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(Links.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label={social.name}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <social.icon className="size-6" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          <DockIcon>
            <AnimatedThemeToggler />
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </BackgroundPaths>
  )
}

export default App
