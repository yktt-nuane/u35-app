import { Container, createStyles, Flex, Image } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 0,
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
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 0,
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

export default function MainSub() {
  const { classes } = useStyles()
  return (
    <div className={classes.root}>
      <Container size="lg">
        <Flex>
          <div
            style={{ maxWidth: '30%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <Image alt="flyer" src="/50jsicm.jpg" />
          </div>
          <div
            style={{ maxWidth: '30%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <Image alt="flyer" src="/u35.png" />
          </div>
          <div
            style={{ maxWidth: '30%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <Image alt="flyer" src="niseco.png" />
          </div>
        </Flex>
      </Container>
    </div>
  )
}
