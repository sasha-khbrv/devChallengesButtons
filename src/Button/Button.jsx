import React from 'react';
import '../sass/styles.scss';

const COLOR = [
  'btn--default', 'btn--primary', 'btn--secondary', 'btn--danger',
  'btn--default--outline', 'btn--primary--outline', 'btn--secondary--outline', 'btn--danger--outline',
]
const VARIANT = [
  'btn--default--text', 'btn--primary--text', 'btn--secondary--text', 'btn--danger--text'
]
const ICON = [
  'btn--icon--start', 'btn--icon--end'
]
const SIZE = [
  'btn--size--sm', 'btn--size--md', 'btn--size--lg'
]

function Button({children, color, variant, disableShadow, disabled, icon, size}) {
  const setBtnColor = COLOR.includes(color) ? color : COLOR[0];
  const setBtnVariant = VARIANT.includes(variant) ? variant : '';
  const setDisableShadow = disableShadow ? 'btn--disableShadow' : '';
  const setBtnIcon = ICON.includes(icon) ? icon : '';
  const setBtnSize = SIZE.includes(size) ? size : '';

  return (
    <div>        
      <button className={`btn ${setBtnColor} ${setBtnVariant} ${setDisableShadow} ${setBtnIcon} ${setBtnSize}`} disabled = {disabled}>{children}</button>
    </div>
  );
}

export default Button;
