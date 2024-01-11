import {
  BottomSheet,
  Button,
  ButtonIcon,
  Nav,
  SheetProps,
  SideBar,
  SideBarWrapper,
  XStack,
  YStack,
  YStackProps,
  useMedia,
} from '@my/ui'
import { Link } from '@my/ui'
import {
  IconDashboard,
  IconDistributions,
  IconSLogo,
  IconSendLogo,
  IconTelegramLogo,
  IconXLogo,
} from 'app/components/icons'
import { SideBarFooterLink } from 'app/components/sidebar/SideBarFooterLink'
import { SideBarNavLink } from 'app/components/sidebar/SideBarNavLink'
import { telegram as telegramSocial, twitter as twitterSocial } from 'app/data/socialLinks'
import { usePathname } from 'app/utils/usePathname'

import { useNav } from 'app/routers/params'

const HomeSideBar = ({ ...props }: YStackProps) => {
  const pathName = usePathname()
  return (
    <SideBar {...props}>
      <Link href={'/'} marginTop={'$10'}>
        <Button borderRadius={9999} w={'$11'} h={'$11'} bg={'transparent'}>
          {/* TODO: Implement Radial Gradient UI Element. Curently not in TamaGUI */}
          <ButtonIcon>
            <IconSLogo size={'$10'} />
          </ButtonIcon>
        </Button>
      </Link>
      <Nav display="flex" flex={2} justifyContent={'center'} alignItems="center">
        <YStack gap={'$4'} alignItems="flex-start" justifyContent="center">
          <SideBarNavLink
            icon={<IconDashboard size={'$2'} />}
            text={'Dashboard'}
            href={'/'}
            isActive={pathName === '/'}
          />
          <SideBarNavLink
            icon={<IconDistributions size={'$2'} />}
            text={'Distributions'}
            href={'/distributions'}
            isActive={pathName.includes('/distributions')}
          />
          <SideBarNavLink
            icon={<IconSLogo size={'$2'} />}
            text={'Leaderboard'}
            href={'/leaderboard'}
            isActive={pathName.includes('/leaderboard')}
            disabled={true}
            hoverStyle={{ cursor: 'not-allowed' }}
          />
        </YStack>
      </Nav>
      <YStack gap="$4" alignItems="center">
        <IconSendLogo />
        <XStack gap="$2">
          <SideBarFooterLink
            icon={<IconXLogo />}
            href={twitterSocial}
            target="_blank"
            borderRadius={9999}
          />
          <SideBarFooterLink
            icon={<IconTelegramLogo />}
            href={telegramSocial}
            target="_blank"
            borderRadius={9999}
          />
        </XStack>
      </YStack>
    </SideBar>
  )
}

const HomeBottomSheet = ({ open }: SheetProps) => {
  const [nav, setNavParam] = useNav()

  const onOpenChange = () => {
    if (open) setNavParam('home', { webBehavior: 'replace' })
    else setNavParam(undefined, { webBehavior: 'replace' })
  }

  const pathName = usePathname()
  return (
    <BottomSheet open={nav === 'home'} onOpenChange={onOpenChange}>
      <Link href={'/'} marginTop={'$4'}>
        <Button borderRadius={9999} w={'$11'} h={'$11'} bg={'transparent'}>
          {/* TODO: Implement Radial Gradient UI Element. Curently not in TamaGUI */}
          <ButtonIcon>
            <IconSLogo size={'$10'} />
          </ButtonIcon>
        </Button>
      </Link>
      <Nav display="flex" flex={2} justifyContent={'center'} alignItems="center">
        <YStack gap={'$4'} alignItems="flex-start" justifyContent="center">
          <SideBarNavLink
            icon={<IconDashboard size={'$2'} />}
            text={'Dashboard'}
            href={'/'}
            isActive={pathName === '/'}
          />
          <SideBarNavLink
            icon={<IconDistributions size={'$2'} />}
            text={'Distributions'}
            href={'/distributions'}
            isActive={pathName.includes('/distributions')}
          />
          <SideBarNavLink
            icon={<IconSLogo size={'$2'} />}
            text={'Leaderboard'}
            href={'/leaderboard'}
            isActive={pathName.includes('/leaderboard')}
            disabled={true}
            hoverStyle={{ cursor: 'not-allowed' }}
          />
        </YStack>
      </Nav>
      <YStack gap="$4" py="$4" alignItems="center">
        <IconSendLogo />
        <XStack gap="$2">
          <SideBarFooterLink
            icon={<IconXLogo />}
            href={twitterSocial}
            target="_blank"
            borderRadius={9999}
          />
          <SideBarFooterLink
            icon={<IconTelegramLogo />}
            href={telegramSocial}
            target="_blank"
            borderRadius={9999}
          />
        </XStack>
      </YStack>
    </BottomSheet>
  )
}

export const HomeSideBarWrapper = ({ children }: { children?: React.ReactNode }) => {
  const media = useMedia()

  if (media.gtLg)
    return (
      <SideBarWrapper sidebar={<HomeSideBar backgroundColor={'$backgroundStrong'} />}>
        {children}
      </SideBarWrapper>
    )
  return (
    <>
      <HomeBottomSheet />
      {children}
    </>
  )
}