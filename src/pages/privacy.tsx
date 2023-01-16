import FooterTemp from './components/Footer'

import { Text, Container, Divider, Center, Space } from '@mantine/core'
import { log } from 'next-axiom'
import Link from 'next/link'

export default function Privacy() {
  log.debug('This is log')
  return (
    <>
      <Space h="xl" />
      <Center mb={20} mt="xl">
        <Text sx={{ fontFamily: 'Greycliff CF, sans-serif' }} fz="xl" fw={700}>
          JICAP プライバシーポリシー・免責事項
        </Text>
      </Center>
      <Center style={{ height: 40 }}>
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="sm"
          fw={700}
          color="dimmed"
          style={{ height: 60 }}
        >
          JICAP(以下「当サイト」)のプライバシーポリシー・免責事項を次の通り記載します。
        </Text>
      </Center>

      <Container>
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="xl"
          fw={700}
          m={20}
        >
          個人情報の利用目的について
        </Text>
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="sm"
          fw={700}
          color="dimmed"
          m={20}
        >
          当サイトでは、お問い合わせやコメント投稿の際に氏名・メールアドレス等の個人情報を入力いただく場合があります。
          <br />
          取得した個人情報は、必要な連絡のみに利用させていただくもので、これらの目的以外では利用いたしません。
        </Text>
        <Divider my="sm" />
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="xl"
          fw={700}
          m={20}
        >
          個人情報の第三者開示について
        </Text>
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="sm"
          fw={700}
          color="dimmed"
          m={20}
        >
          取得した個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
          <ul>
            <li>本人の同意が得られた場合</li>
            <li>法令により開示が求められた場合</li>
          </ul>
        </Text>
        <Divider my="sm" />
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="xl"
          fw={700}
          m={20}
        >
          Cookieの使用について
        </Text>
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="sm"
          fw={700}
          color="dimmed"
          m={20}
        >
          当サイトでは、広告配信やアクセス解析のためにCookieを使用しています。
          <br />
          Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態で匿名性が保たれています。
          <br />
          Cookieの使用を望まない場合、ブラウザからCookieを無効に設定できます。
        </Text>
        <Divider my="sm" />
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="xl"
          fw={700}
          m={20}
        >
          広告配信サービスについて
        </Text>
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="sm"
          fw={700}
          color="dimmed"
          m={20}
        >
          当サイトでは、第三者配信の広告サービスを利用して広告を掲載しています。
          <br />
          第三者配信事業者は、ユーザーの興味に応じたパーソナライズ広告を表示するためにCookieを使用しています。
          <br />
          パーソナライズ広告は、
          <Link href={'https://www.google.com/settings/ads'}>広告設定</Link>
          で無効にできます。
          <br />
          また、
          <Link href={'http://www.aboutads.info/choices/'}>
            www.aboutads.info
          </Link>
          で第三者配信事業者のCookieを無効にすることができます。
        </Text>
        <Divider my="sm" />
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="xl"
          fw={700}
          m={20}
        >
          アクセス解析ツールについて
        </Text>
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="sm"
          fw={700}
          color="dimmed"
          m={20}
        >
          当サイトでは、Googleアナリティクスによりアクセス情報を解析しています。
          <br />
          アクセス情報の解析にはCookieを使用しています。また、アクセス情報の収集はCookieを無効にすることで拒否できます。
          <br />
          Google社のデータ収集・処理の仕組みについては、
          <Link
            href={
              'https://policies.google.com/technologies/partner-sites?hl=ja'
            }
          >
            こちら
          </Link>
          をご覧ください。
        </Text>
        <Divider my="sm" />
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="xl"
          fw={700}
          m={20}
        >
          免責事項
        </Text>
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="sm"
          fw={700}
          color="dimmed"
          m={20}
        >
          当サイトは、掲載内容によって生じた損害に対する一切の責任を負いません。
          <br />
          各コンテンツでは、できる限り正確な情報提供を心がけておりますが、正確性や安全性を保証するものではありません。
          <br />
          また、リンク先の他サイトで提供される情報・サービスについても、責任を負いかねますのでご了承ください。
        </Text>
        <Divider my="sm" />
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="xl"
          fw={700}
          m={20}
        >
          著作権
        </Text>
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="sm"
          fw={700}
          color="dimmed"
          m={20}
        >
          当サイトに掲載されている文章・画像の著作権は、運営者に帰属しています。
          <br />
          法的に認められている引用の範囲を超えて、無断で転載することを禁止します。
        </Text>
        <Divider my="sm" />
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="xl"
          fw={700}
          m={20}
        >
          プライバシーポリシーの変更
        </Text>
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="sm"
          fw={700}
          color="dimmed"
          m={20}
        >
          当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直して改善に努めます。
          <br />
          修正された最新のプライバシーポリシーは常に本ページにて開示されます。
        </Text>
        <Divider my="sm" />
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="lg"
          fw={700}
          m={20}
        >
          履歴
        </Text>
        <Text
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          fz="xs"
          fw={700}
          color="dimmed"
          ml={20}
        >
          制定日:2022年1月16日
        </Text>
      </Container>
      <FooterTemp />
    </>
  )
}
