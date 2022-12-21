import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Center,
  Flex,
} from '@mantine/core'
import { IconBrandTwitter, IconBrandYoutube } from '@tabler/icons'
import { formatDistanceToNowStrict } from 'date-fns'
import ja from 'date-fns/locale/ja'

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(/top.jpg)',
    paddingTop: theme.spacing.xl * 3,
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
    paddingTop: theme.spacing.xl * 2,
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
    <Center pt={20}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/jsicm50_2023"
        leftIcon={<IconBrandTwitter size={18} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 42,
            paddingLeft: 20,
            paddingRight: 20,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      >
        第50回集中治療学会
      </Button>
    </Center>
  )
}

function TwitterNiseko() {
  return (
    <Center pt={20}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/scNISEKOJSICM50"
        leftIcon={<IconBrandTwitter size={18} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 42,
            paddingLeft: 20,
            paddingRight: 20,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      >
        ニセコサマーキャンプ
      </Button>
    </Center>
  )
}

function TwitterDancingER() {
  return (
    <Center pt={20}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/houseloveryuki?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        leftIcon={<IconBrandTwitter size={18} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 42,
            paddingLeft: 20,
            paddingRight: 20,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      >
        踊る救急医
      </Button>
    </Center>
  )
}

function YouTubeHoshino() {
  return (
    <Center pt={20}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/@user-fy9vv3cw8s"
        leftIcon={<IconBrandYoutube size={18} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 42,
            paddingLeft: 20,
            paddingRight: 20,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      >
        ハルジローのオンライン看護学院
      </Button>
    </Center>
  )
}

const JsicmDay = new Date(2023, 3, 2)
const NisekoDay = new Date(2023, 8, 25)

const JsicmCountDown = formatDistanceToNowStrict(JsicmDay, {
  addSuffix: true,
  locale: ja,
  unit: 'day',
})

const NisekoCountDown = formatDistanceToNowStrict(NisekoDay, {
  addSuffix: true,
  locale: ja,
  unit: 'day',
})

export default function MainTemp() {
  const { classes } = useStyles()
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              {' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'yellow', to: 'orange' }}
              >
                熱量
              </Text>{' '}
              が集結する。
            </Title>

            <Text className={classes.description} mt={30}>
              We value the cross-sectional connections between young medical
              professionals working in the intensive care field. This is the
              platform that makes it possible.
            </Text>
            <Flex
              direction={{ base: 'column', sm: 'row' }}
              gap={{ base: 'sm', sm: 'lg' }}
              justify={{ sm: 'center' }}
              mt={40}
            >
              <TwitterICU2023 />
              <TwitterNiseko />
            </Flex>
            <Text className={classes.description} mt={30} ml={100}>
              第50回集中治療学会は
              <strong>{JsicmCountDown}</strong>です。
            </Text>
            <Text className={classes.description} mt={10} ml={100}>
              サマーキャンプ in NISEKOは
              <strong>{NisekoCountDown}</strong>です。
            </Text>
            <Text className={classes.description} mt={30} ml={50}>
              集中治療学会 U-35 メンバー
            </Text>
            <Flex
              direction={{ base: 'column', sm: 'row' }}
              gap={{ base: 'sm', sm: 'lg' }}
              justify={{ sm: 'center' }}
            >
              <TwitterDancingER />
              <YouTubeHoshino />
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  )
}
