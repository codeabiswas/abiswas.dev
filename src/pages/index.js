import * as React from "react";
import useFetchData from "../hooks/useFetchData";

// Import sections
import AboutSection from "../sections/AboutSection";
import Loading from "../components/common/Loading";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import LinksPicContainer from "../components/common/LinksPicContainer";
import MainLayout from "../components/layout/MainLayout";

const IndexPage = () => {
  // Retrieve the Personal Resume Information (PRI) Gist API
  const pri_gist_api = process.env.GATSBY_PUBLIC_PRI_GIST_API;

  // When fetching data from API, there are several states:
  // 1. Loading
  // 2. Success
  // 3. Error
  const { data, loading, error } = useFetchData(pri_gist_api);

  if (loading) return <Loading />;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  const rawAboutContent = JSON.parse(data.files["about.json"].content);
  const rawContactContent = JSON.parse(data.files["contact.json"].content);

  // TODO: Use GraphQL to load data from GitHub Gist
  // The following resources should help with this:
  // * https://www.gatsbyjs.com/docs/why-gatsby-uses-graphql/
  // * https://stackoverflow.com/questions/49299309/gatsbyjs-getting-data-from-restful-api
  const children = (
    <>
      <Header />
      <AboutSection
        rawAboutContent={rawAboutContent}
        rawContactContent={rawContactContent}
      />
      <LinksPicContainer
        rawContactContent={rawContactContent}
        profilePictureUrl={rawAboutContent.profilePictureUrl}
        firstName={rawAboutContent.firstName}
        lastName={rawAboutContent.lastName}
      />
      <Footer />
    </>
  );

  return <MainLayout children={children} />;
};

export default IndexPage;
