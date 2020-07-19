import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';

const Home = ({ location: { pathname } }) => {
  if (pathname !== '/') {
    return null;
  }
  return (
    <PageLayout title="Home">
      <h3>Home page</h3>
    </PageLayout>
  );
};

Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;
