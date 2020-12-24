
import tw from "twin.macro"
import React from "react"

import "@fontsource/mountains-of-christmas"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Wrapper = tw.div`
  flex items-center justify-center flex-col h-screen
`

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl lg:w-1/2 w-full
`

const Heading = tw.h1`
  text-2xl text-black
`

const Text = tw.p`
  text-xl text-black
`


export default function Index() {
  return (
    <Layout>
      <Wrapper>
        <SEO title="God jul!" />
        <Main>
          <Heading>GOD JUL KRISTINA <br/>Önskar Tomten<br/></Heading>
          <Text className="pt-12 text-left">
          <br/>Nu tändas tusen juleljus<br/>
          på ikeahylla i klostergårdshus <br/><br/>

          Du från Dalby på el-cykel rullar <br/>
          över kullar och genom stadstullar <br/><br/>

          Synas i mörkret det är bäst <br/>
          men din gula väst <br/>
          vill man ej ha på fest <br/>
          denna är mer modest
          </Text>

        </Main>
      </Wrapper>
    </Layout>
  )
}
