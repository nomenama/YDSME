import React from 'react'
import Header from "../components/Header/Header";
import {PageContainer} from "./index.styles";
import {MainNavigation} from "../components/Header/Navigation";

const MainPage = () => {
  return (
      <PageContainer>
            <Header logo={"Logo"} navigations={MainNavigation}/>
      </PageContainer>
  )
}

export default MainPage
