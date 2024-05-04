interface ButtonBaseProps extends Partial<Children> {
  id?: string | undefined;
  disabled?: boolean | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
  position: 'left' | 'center' | 'right';
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  variant: 'nav' | 'form' | 'outline';
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined;
}
// Nav Button types
interface ButtonNavProps extends ButtonBaseProps {
  variant: 'nav';
  route: string;
}
interface ButtonOtherProps extends ButtonBaseProps {
  variant: Exclude<ButtonBaseProps['variant'], 'nav'>;
  route?: string;
}
type ButtonProps = ButtonNavProps | ButtonOtherProps;

// Modals
type LogoutModalProps = { navigateTo?: string; toggleModal: boolean; setToggleModal: React.Dispatch<React.SetStateAction<boolean>> };
type CloseButtonProps = { onClick: React.MouseEventHandler<HTMLButtonElement> };

// Login
type InputFieldProps = { value: string; onChange: React.ChangeEventHandler<HTMLInputElement> };
type SubmitButtonProps = { isLoading: boolean };

// Forms
type InputHelperProps = { isError: boolean; helper: string };
interface TextFieldProps extends InputHelperProps {
  id?: string;
  label: string;
  pattern?: string | undefined;
  readOnly?: boolean | undefined;
  maxLength?: number | undefined;
  placeholder?: string | undefined;
  autoComplete?: string | undefined;
  type?: React.HTMLInputTypeAttribute | 'textarea' | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
  inputMode?: 'email' | 'search' | 'tel' | 'text' | 'url' | 'none' | 'numeric' | 'decimal' | undefined;
}
