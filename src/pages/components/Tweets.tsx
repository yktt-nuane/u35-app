import { createStyles, Container, Button, Center, Flex } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: theme.spacing.xl * 0,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 0,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 700,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 600,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '50%',
    },
  },
}))

function TwitterICU2023() {
  return (
    <Center pt={80}>
      <Button
        component="a"
        className="twitter-timeline"
        data-height="400"
        data-width="300"
        data-theme="dark"
        href="https://twitter.com/jsicm50_2023?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3Ajsicm50_2023%7Ctwcon%5Es2"
        target="_blank"
        rel="noreferrer"
      >
        第50回集中治療学会学術集会
      </Button>
    </Center>
  )
}

function TwitterNiseko() {
  return (
    <Center pt={80}>
      <Button
        component="a"
        className="twitter-timeline"
        data-height="400"
        data-width="300"
        data-theme="dark"
        href="https://twitter.com/scNISEKOJSICM50"
        target="_blank"
        rel="noreferrer"
      >
        サマーキャンプ_in_NISEKO
      </Button>
    </Center>
  )
}

function TwitterDancingER() {
  return (
    <Center pt={80}>
      <Button
        component="a"
        className="twitter-timeline"
        data-height="400"
        data-width="300"
        data-theme="dark"
        href="https://twitter.com/houseloveryuki?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        target="_blank"
        rel="noreferrer"
      >
        踊る救急医
      </Button>
    </Center>
  )
}

export default function TweetsTemp() {
  const { classes } = useStyles()
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Flex
              direction={{ base: 'column', sm: 'row' }}
              gap={{ base: 'sm', sm: 'lg' }}
              justify={{ sm: 'center' }}
            >
              <TwitterICU2023 />
              <TwitterNiseko />
              <TwitterDancingER />
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  )
}
