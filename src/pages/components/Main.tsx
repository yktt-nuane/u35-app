import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Center,
  Flex,
} from '@mantine/core'
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandFacebook,
  IconHome,
} from '@tabler/icons'
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

function FacebookICU() {
  return (
    <Center pt={30}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/jsicm.org"
        leftIcon={<IconBrandFacebook size={16} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 25,
            paddingLeft: 15,
            paddingRight: 0,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      ></Button>
    </Center>
  )
}

function TwitterICU() {
  return (
    <Center pt={30}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/jsicm_org"
        leftIcon={<IconBrandTwitter size={16} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 25,
            paddingLeft: 15,
            paddingRight: 0,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      ></Button>
    </Center>
  )
}

function HomeICU() {
  return (
    <Center pt={30}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.jsicm.org/"
        leftIcon={<IconHome size={16} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 25,
            paddingLeft: 15,
            paddingRight: 0,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      ></Button>
    </Center>
  )
}

function TwitterICU2023() {
  return (
    <Center pt={10}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/jsicm50_2023"
        leftIcon={<IconBrandTwitter size={16} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 25,
            paddingLeft: 15,
            paddingRight: 0,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      ></Button>
    </Center>
  )
}

function HomeICU2023() {
  return (
    <Center pt={10}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.jsicm.org/meeting/jsicm50/"
        leftIcon={<IconHome size={16} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 25,
            paddingLeft: 15,
            paddingRight: 0,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      ></Button>
    </Center>
  )
}

function TwitterNiseko() {
  return (
    <Center pt={10}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/scNISEKOJSICM50"
        leftIcon={<IconBrandTwitter size={16} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 25,
            paddingLeft: 15,
            paddingRight: 0,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      ></Button>
    </Center>
  )
}

function FacebookNiseko() {
  return (
    <Center pt={10}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/profile.php?id=100088911937589"
        leftIcon={<IconBrandFacebook size={16} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 25,
            paddingLeft: 15,
            paddingRight: 0,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      ></Button>
    </Center>
  )
}

function TwitterDancingER() {
  return (
    <Center pt={10}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/houseloveryuki?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        leftIcon={<IconBrandTwitter size={16} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 25,
            paddingLeft: 15,
            paddingRight: 0,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      ></Button>
    </Center>
  )
}

function HomeDancingER() {
  return (
    <Center pt={10}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://dancing-doctor.com/"
        leftIcon={<IconHome size={16} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 25,
            paddingLeft: 15,
            paddingRight: 0,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      ></Button>
    </Center>
  )
}

function FacebookDancingER() {
  return (
    <Center pt={10}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/dancing.er.doctor/"
        leftIcon={<IconBrandFacebook size={16} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 25,
            paddingLeft: 15,
            paddingRight: 0,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      ></Button>
    </Center>
  )
}

function YouTubeHoshino() {
  return (
    <Center pt={10}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/@user-fy9vv3cw8s"
        leftIcon={<IconBrandYoutube size={16} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 25,
            paddingLeft: 15,
            paddingRight: 0,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      ></Button>
    </Center>
  )
}

function TwitterHoshino() {
  return (
    <Center pt={10}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/Youtube_Nursing"
        leftIcon={<IconBrandTwitter size={16} />}
        styles={(theme) => ({
          root: {
            backgroundColor: 'white',
            color: 'black',
            border: 0,
            height: 25,
            paddingLeft: 15,
            paddingRight: 0,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      ></Button>
    </Center>
  )
}

const JsicmDay = new Date(2023, 2, 2)
const NisekoDay = new Date(2023, 7, 25)

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

            <Text className={classes.description} mt={20}>
              <Text component="span" fw={700} fz="lg">
                J-ICAP
              </Text>{' '}
              (Japanese Intensive Care Advertising Platform)
            </Text>

            <Flex
              direction={{ base: 'row', sm: 'row' }}
              gap={{ base: 'sm', sm: 'lg' }}
              justify={{ sm: 'left' }}
              mt={10}
            >
              <Text className={classes.description} mt={30} ml={0}>
                <Text fw={700} fz="lg">
                  ▷ 日本集中治療医学会
                </Text>
              </Text>
              <TwitterICU />
              <FacebookICU />
              <HomeICU />
            </Flex>

            <Flex
              direction={{ base: 'row', sm: 'row' }}
              gap={{ base: 'sm', sm: 'lg' }}
              justify={{ sm: 'left' }}
              mt={10}
            >
              <Text className={classes.description} mt={10} ml={0}>
                <Text fw={700} fz="lg">
                  ▷ 第50回日本集中治療医学会学術集会
                  <Text
                    component="span"
                    fw={700}
                    fz="lg"
                    inherit
                    color="yellow"
                  >
                    （{JsicmCountDown}）
                  </Text>
                </Text>
              </Text>
              <TwitterICU2023 />
              <HomeICU2023 />
            </Flex>

            <Flex
              direction={{ base: 'row', sm: 'row' }}
              gap={{ base: 'sm', sm: 'lg' }}
              justify={{ sm: 'left' }}
              mt={10}
            >
              <Text className={classes.description} mt={10} ml={0}>
                <Text fw={700} fz="lg">
                  ▷ ニセコサマーキャンプ
                  <Text
                    component="span"
                    fw={700}
                    fz="lg"
                    inherit
                    color="yellow"
                  >
                    （{NisekoCountDown}）
                  </Text>
                </Text>
              </Text>
              <TwitterNiseko />
              <FacebookNiseko />
            </Flex>

            <Text className={classes.description} mt={40} ml={20}>
              <Text fw={700} fz="xl" fs="italic">
                日本集中治療医学会 U-35 メンバー
              </Text>
            </Text>

            <Flex
              direction={{ base: 'row', sm: 'row' }}
              gap={{ base: 'sm', sm: 'lg' }}
              justify={{ sm: 'left' }}
            >
              <Text className={classes.description} mt={15} ml={40}>
                <Text fw={700} fz="md">
                  ▷ 踊る救急医
                </Text>
              </Text>
              <TwitterDancingER />
              <HomeDancingER />
              <FacebookDancingER />
            </Flex>

            <Flex
              direction={{ base: 'row', sm: 'row' }}
              gap={{ base: 'sm', sm: 'lg' }}
              justify={{ sm: 'left' }}
            >
              <Text className={classes.description} mt={15} ml={40}>
                <Text fw={700} fz="md">
                  ▷ ハルジローのオンライン看護学院
                </Text>
              </Text>
              <YouTubeHoshino />
              <TwitterHoshino />
            </Flex>
          </div>
        </div>

        <div>
          <Text className={classes.description} mt={20}>
            ＊現時点で個人が運営するサイトです。
            <br />
            ＊アカウントから発信される情報を保証するものではありません。
          </Text>
        </div>
      </Container>
    </div>
  )
}
