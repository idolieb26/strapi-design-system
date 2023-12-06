import * as React from 'react';
import { useRef, useState } from 'react';

import { Clock, Cross } from '@strapi/icons';
import styled, { ThemeSizes } from 'styled-components';

import { FieldProps, FieldAction } from '../Field';
import { Flex } from '../Flex';
import { useId } from '../hooks/useId';
import { Select, Option } from '../Select';
import InputMask from './InputMask';
import { TextInput, TextInputProps } from '../TextInput';

/**
 * TODO: this should extends SelectProps
 */
export interface TimePickerProps
  extends Omit<
      React.ClipboardEventHandler<HTMLButtonElement>,
      'value' | 'onChange' | 'id' | 'disabled' | 'size' | 'required'
    >,
    Pick<FieldProps, 'id' | 'name' | 'required' | 'hint' | 'error'> {
  /**
   * @default 'Clear'
   */
  clearLabel?: string;
  /**
   * @default false
   */
  disabled?: boolean;
  label?: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  selectButtonTitle?: string;
  /**
   * @default 'M'
   */
  size?: keyof ThemeSizes['input'];
  /**
   * @default 15
   */
  step?: number;
  value?: string;
}

// The time picker will select the closest value in the list.
// This is a temporary fix.
// This whole thing needs refactoring – it's nonsensical.
const getClosestValue = (value: string|undefined, step: number=1) => {
  const hoursCount = 24;
  const times: string[] = [];
  let min = 0;

  for (let i = 0; i < hoursCount; i++) {
    min = 0;

    while (min < 60) {
      times.push(`${i < 10 ? `0${i}` : i}:${min < 10 ? `0${min}` : min}`);
      min += step;
    }
  }

  const [valueHours, valueMinutes] = value?.split(':') ?? [];

  let hours = times.reduce((prev, curr) => {
    const [h] = curr.split(':');

    // @ts-expect-error this is gonna be refactored in an upcoming initiative
    return Math.abs(h - valueHours) < Math.abs(prev - valueHours) ? h : prev;
  }, times[0].split(':')[0]);

  const minutes = times.reduce((prev, curr) => {
    const minutes = curr.split(':')[1];

    // @ts-expect-error this is gonna be refactored in an upcoming initiative
    return Math.abs(minutes - valueMinutes) < Math.abs(prev - valueMinutes) ? minutes : prev;
  }, times[0].split(':')[1]);

  const intHour = parseInt(hours);
  let timeIdentifier: string = 'am';
  console.log("intHour:", intHour);
  if (intHour > 11) {
    timeIdentifier = intHour === 24 ? 'am' : 'pm';
    const hourNumber = intHour !== 12 ? intHour - 12 : 12;
    console.log("hourNumber:", hourNumber);
    if (hourNumber < 10) {
      hours = hourNumber === 0 ? `12` : `0${hourNumber}`;
      // timeIdentifier = hourNumber === 0 ? 'am' : 'pm';
    } else {
      hours = hourNumber.toString();
    }
  } else if (intHour === 0) {
    console.log("else if :", intHour);
    timeIdentifier = 'am';
    hours = '12';
  } else {
    console.log("else:", intHour);
  }

  return `11:${minutes} ${timeIdentifier}`;
};

export const TimePicker = ({ id, value, step = 15, clearLabel, disabled=false, onClear, onChange, label="", ...props }: TimePickerProps) => {
  const generatedId = useId(id);
  const inputRef = useRef<{ inputWrapperRef: React.MutableRefObject<HTMLDivElement> }>(null!);
  const [inputValue, setInputValue] = useState(getClosestValue(value))

  const handleClear = () => {
    if (onClear) {
      setInputValue('00:00am');
      onClear();
      /**
       * TODO: refactor this so we can just target the input...?
       */
      inputRef.current.inputWrapperRef.current.focus();
    }
  };

  const _onChange = (e) => {
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](a|p)m$/;
    const number = e.target.value;

    if (onChange && timeRegex.test(number)) {
      const isPM = number.includes('am') ? false : true;
      const validTime = number.replace('am', '').replace('pm', '');
      const minute = parseInt(validTime.split(':')[1]);
      let hour = validTime.split(':')[0];
      const intHour = parseInt(hour);

      if (isPM && intHour !== 12) {
        hour = intHour + 12;
      } else if (!isPM && intHour === 12) {
        hour = intHour + 12;
      }

      onChange(`${hour}:${minute}`);
    }

    setInputValue(number);
  }

  const mask = [
    /[0-2]/,
    /[0-3]/,
    ':',
    /[0-5]/,
    /[0-9]/,
    /(a|p)/,
    /[m]/,
  ];

  return (
    <InputMask
      mask={mask}
      value={inputValue}
      onChange={_onChange}
      disabled={disabled}
      >
      <TextInput
        id={generatedId}
        ref={inputRef}
        label={label}
        // Prevent input from changing for now
        startAction={
          <TimeIconWrapper>
            <Clock />
          </TimeIconWrapper>
        }
        endAction={
          onClear ? (
            <FieldAction label="close" onClick={handleClear} aria-disabled={disabled || undefined}>
              <StyledCross />
            </FieldAction>
          ) : undefined
        }
        aria-autocomplete="none"
        aria-label={"close"}
        type="text"
        disabled={disabled}
        {...props}
      />
    </InputMask>
  );
};

const TimeIconWrapper = styled(Flex)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;

const StyledCross = styled(Cross)`
  height: ${11 / 16}rem;
  width: ${11 / 16}rem;

  path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
