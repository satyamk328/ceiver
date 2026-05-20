'use client';

import { forwardRef } from 'react';

const Input = forwardRef(function Input(
  {
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    error,
    hint,
    disabled = false,
    required = false,
    options = [],   // used when type === 'select'
    rows = 4,       // used when type === 'textarea'
    className = '',
    id,
    ...props
  },
  ref
) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const baseClass = `input${error ? ' input--error' : ''}`;

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={inputId}>
          {label}
          {required && (
            <span style={{ color: 'var(--color-error, #ef4444)', marginLeft: '0.2rem' }}>*</span>
          )}
        </label>
      )}

      {type === 'textarea' && (
        <textarea
          id={inputId}
          className={`${baseClass} input--textarea`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          rows={rows}
          ref={ref}
          {...props}
        />
      )}

      {type === 'select' && (
        <select
          id={inputId}
          className={baseClass}
          value={value}
          onChange={onChange}
          disabled={disabled}
          ref={ref}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) =>
            typeof opt === 'string' ? (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ) : (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            )
          )}
        </select>
      )}

      {type !== 'textarea' && type !== 'select' && (
        <input
          id={inputId}
          type={type}
          className={baseClass}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          ref={ref}
          {...props}
        />
      )}

      {error && <span className="form-error">{error}</span>}
      {hint && !error && <span className="form-hint">{hint}</span>}
    </div>
  );
});

export default Input;
