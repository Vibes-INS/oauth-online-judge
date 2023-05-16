'use client'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Icon,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react'
import { initializeApp } from 'firebase/app'
import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { FIREBASE_CONFIG } from '@/constants/env'
import GoogleSVG from '@/assets/google.svg?svgr'
import GithubSVG from '@/assets/github.svg?svgr'
import TwitterSVG from '@/assets/twitter.svg?svgr'
import FacebookSVG from '@/assets/facebook.svg?svgr'
import AppleSVG from '@/assets/apple.svg?svgr'
import MicrosoftSVG from '@/assets/microsoft.svg?svgr'
import ArrowSVG from '@/assets/arrow.svg?svgr'
import { useState } from 'react'
import JWTDecode from 'jwt-decode'

initializeApp(FIREBASE_CONFIG)
const provider = new GithubAuthProvider()

export default function Home({
  searchParams,
}: {
  params: {}
  searchParams: { dev?: string }
}) {
  const isDisabled = !searchParams.dev
  const [isShowMore, setIsShowMore] = useState(false)
  const toast = useToast()
  const onLoginWithGithub = async () => {
    const auth = getAuth()
    try {
      const result = await signInWithPopup(auth, provider)
      const credential = GithubAuthProvider.credentialFromResult(result)
      console.log('UserCredential: ', result)
      console.log('OAuthCredential: ', credential)
      if (!credential) return
      console.log('AccessToken: ', credential.accessToken)
      const tokenId = (result.user as any).accessToken
      console.log('TokenID: ', tokenId)
      if (tokenId) {
        console.log('JWT decode: ', JWTDecode(tokenId))
      }
      toast({
        status: 'info',
        title: 'OAuth Login successful!',
        description: 'Please refer to the console for details',
      })
    } catch (error: any) {
      console.error(error)
      toast({
        status: 'error',
        title: 'Login Failed',
        description: error.message,
      })
    }
  }

  return (
    <Flex
      as="main"
      bg="black"
      w="full"
      h="100vh"
      justify="center"
      align="center"
      pos="relative"
    >
      <Box
        w="100%"
        h="100%"
        pos="absolute"
        top="0"
        left="0"
        bg="linear-gradient(45deg, #160e46 10%, rgba(0,0,0,0) 20%, #1e1563 60%, #241039 80%)"
      />
      <Flex
        direction="column"
        w="full"
        maxW="896px"
        bg="linear-gradient(rgb(12, 0, 84) 0%, rgb(15, 10, 45) 100%)"
        shadow="xl"
        rounded="lg"
        color="white"
        py={12}
        px={16}
        pos="relative"
        zIndex={2}
      >
        <Flex gap={2} direction="column">
          <Heading fontSize="2xl" lineHeight="32px" fontWeight={600}>
            Log-In
          </Heading>
          <Text fontWeight={600}>
            Recover/Create your Self-sovereign Wallet
          </Text>
          <Text opacity={0.4} fontWeight={400}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            vestibulum felis. Donec rhoncus turpis in ligula egestas posuere.
          </Text>
        </Flex>
        <Button variant="new_solid" mt={4} isDisabled={isDisabled}>
          <Icon as={GoogleSVG} w="6" h="6" />
          Login With Google
        </Button>
        <Grid templateColumns="repeat(3, 1fr)" mt={4} gap={4}>
          <Button variant="new_outline" isDisabled={isDisabled}>
            <Icon as={TwitterSVG} w="6" h="6" />
            Twitter
          </Button>
          <Button variant="new_outline" isDisabled={isDisabled}>
            <Icon as={FacebookSVG} w="6" h="6" />
            Facebook
          </Button>
          <Button variant="new_outline" onClick={onLoginWithGithub}>
            <Icon as={GithubSVG} w="6" h="6" />
            Github
          </Button>
          {isShowMore ? (
            <>
              <Button variant="new_outline" isDisabled={isDisabled}>
                <Icon as={AppleSVG} w="6" h="6" />
                Apple
              </Button>
              <Button variant="new_outline" isDisabled={isDisabled}>
                <Icon as={MicrosoftSVG} w="6" h="6" />
                Microsoft
              </Button>
            </>
          ) : null}
        </Grid>
        <Flex
          as="a"
          ml="auto"
          gap={2}
          align="center"
          fontWeight={600}
          cursor="pointer"
          userSelect="none"
          mt={4}
          onClick={() => setIsShowMore((s) => !s)}
        >
          Show {isShowMore ? 'Less' : 'All'}
          <Icon as={ArrowSVG} w="5" h="5" />
        </Flex>

        <FormControl mt={6} display="flex" flexDirection="column" gap={4}>
          <FormLabel m={0}>Email Or Phone Number:</FormLabel>
          <Input
            variant="customized"
            placeholder="+(00)12356/name@example.com"
            name="email"
            bg="rgba(50, 48, 102, 0.4)"
            py={3}
            px={4}
            border="1px solid rgb(50, 48, 102)"
            fontSize="sm"
            lineHeight="1.25rem"
            h="46px"
          />
          <Button w="full" variant="new_outline" isDisabled={isDisabled}>
            Continue
          </Button>
        </FormControl>

        <FormControl mt={6} display="flex" flexDirection="column" gap={4}>
          <FormLabel m={0}>Connect To Wallet App:</FormLabel>
          <Button w="full" variant="new_outline" isDisabled={isDisabled}>
            Connect With Wallet
          </Button>
        </FormControl>
      </Flex>
    </Flex>
  )
}
