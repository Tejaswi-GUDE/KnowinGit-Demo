// Groundwork text input: 1px border, 6px radius, no inner shadow. Used bare
// (the sign-in email/password fields) or wrapped with a label + optional
// right-hand slot such as the "Forgot password?" link.

export function Input({ id, className = "", ...rest }) {
  return <input id={id} className={`gw-input ${className}`} {...rest} />;
}

export function Field({ id, label, rightSlot, children }) {
  return (
    <div className="gw-field">
      {label && (
        <div className="gw-field-head">
          <label htmlFor={id}>{label}</label>
          {rightSlot}
        </div>
      )}
      {children}
    </div>
  );
}

export default Input;
