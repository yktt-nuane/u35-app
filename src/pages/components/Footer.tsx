import { createStyles, Container, Group, ActionIcon } from '@mantine/core'
import { IconBrandTwitter, IconBrandGithub } from '@tabler/icons'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 0,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}))

export default function FooterTemp() {
  const { classes } = useStyles()

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <p>© 2022 Tatsuro Yokoyama All rights reserved.</p>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <Link href="https://twitter.com/yokotatsu75">
              <IconBrandTwitter size={18} stroke={1.5}></IconBrandTwitter>
            </Link>
          </ActionIcon>
          <ActionIcon size="lg">
            <Link href="https://github.com/yktt-nuane">
              <IconBrandGithub size={18} stroke={1.5} />
            </Link>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  )
}
