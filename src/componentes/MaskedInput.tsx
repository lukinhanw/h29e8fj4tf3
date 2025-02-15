import React, { forwardRef } from 'react';
import { IMask } from 'imask';

interface MaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mask: string;
}

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ mask, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const masked = IMask.createMask({
        mask,
      });
      masked.resolve(e.target.value);
      
      if (onChange) {
        e.target.value = masked.value;
        onChange(e);
      }
    };

    return (
      <input
        ref={ref}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

MaskedInput.displayName = 'MaskedInput';