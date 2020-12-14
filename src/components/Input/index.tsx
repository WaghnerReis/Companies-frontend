import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useField } from '@unform/core';

import {
  HiOutlineMail,
  HiOutlineLockOpen,
  HiExclamationCircle,
  HiEye,
  HiEyeOff,
} from 'react-icons/hi';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ name, ...props }) => {
  const [type, setType] = useState(() => props.type);

  const [isFocused, setIsFocused] = useState(false);
  const [showingPassword, setShowingPassword] = useState(false);

  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const isPassword = useMemo(() => fieldName === 'password', [fieldName]);

  const handleEyeIconClick = useCallback(() => {
    if (showingPassword) {
      setShowingPassword(false);
      setType('password');
    } else {
      setShowingPassword(true);
      setType('text');
    }
  }, [showingPassword]);

  const showCorrectEyeIcon = useCallback(() => {
    if (isPassword) {
      if (showingPassword) {
        return <HiEyeOff onMouseEnter={handleEyeIconClick} />;
      }
      return <HiEye onMouseEnter={handleEyeIconClick} />;
    }

    return <></>;
  }, [handleEyeIconClick, isPassword, showingPassword]);

  return (
    <Container>
      <div>
        {isPassword ? <HiOutlineLockOpen /> : <HiOutlineMail />}
        <input
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
          type={type}
        />
        {error && !isFocused && <HiExclamationCircle />}
        {isFocused && showCorrectEyeIcon()}
      </div>
      <p>{error}</p>
    </Container>
  );
};

export default Input;
