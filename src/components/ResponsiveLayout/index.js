import React from 'react';
import { element } from 'prop-types';

const ResponsiveLayout = ({
  children
}) => (
  <div className='responsive-layout'>
    {children}
  </div>
);

ResponsiveLayout.propTypes = {
  children: element
};

export default ResponsiveLayout;