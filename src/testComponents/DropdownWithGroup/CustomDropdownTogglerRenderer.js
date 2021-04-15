import React, { forwardRef } from 'react';
import { func, string } from 'prop-types';

const DropdownTogglerRenderer = forwardRef(({
  onClick,
  text
}, ref) => (
  <div ref={ref} onClick={onClick} onKeyDown={f => f}>
    {text} custom
  </div>
));

DropdownTogglerRenderer.propTypes = {
  onClick: func.isRequired,
  text: string
};

DropdownTogglerRenderer.defaultProps = {
  text: 'Select'
};

export default DropdownTogglerRenderer;
