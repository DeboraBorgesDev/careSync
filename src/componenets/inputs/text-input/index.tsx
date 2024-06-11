import { TextField } from '@material-ui/core';
import useStyles from './styles';
import { FormikProps } from 'formik';

interface ArrayFieldProps {
  name: string;
  fieldName: string;
  index: number;
  fieldSecondName?: string;
}

interface TextInputProps {
  label: string;
  type: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
  fprops: FormikProps<any>;
  fkey: string;
  arrayField?: ArrayFieldProps | false;
  nestedField?: any; // type according to usage
  mask?: string;
  maskChar?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any; // other props
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const classes = useStyles();
  const {
    label,
    type,
    fprops,
    fkey,
    required,
    disabled,
    fullWidth,
    placeholder,
    multiline,
    rows,
    arrayField,
    nestedField,
    mask,
    maskChar,
    handleChange,
    ...rest
  } = props;

  const textFieldError = () => {
    if (arrayField) {
      const { errors } = fprops;
      const { name, fieldName, index, fieldSecondName = '' } = arrayField;

      if (Object.keys(errors).length && errors[name]) {
        return fieldSecondName
        //@ts-ignore
          ? fprops.errors[name][index]?.[fieldName]?.[fieldSecondName]
           //@ts-ignore
          : fprops.errors[name][index]?.[fieldName];
      }
    }
    return fprops.errors[fkey];
  };

  const textFieldTouched = () => {
    if (arrayField) {
      const { touched } = fprops;
      const { name, fieldName, index, fieldSecondName = '' } = arrayField;

      if (Object.keys(touched).length && touched[name]) {
        return fieldSecondName
         //@ts-ignore
          ? touched[name][index]?.[fieldName]?.[fieldSecondName]
           //@ts-ignore
          : touched[name][index]?.[fieldName];
      }
    }
    return fprops.touched[fkey];
  };

  const getFieldValue = () => {
    if (arrayField) {
      const { name, index, fieldName, fieldSecondName } = arrayField;
      return fieldSecondName
        ? fprops.values[name][index][fieldName][fieldSecondName]
        : fprops.values[name][index][fieldName];
    }
    return fprops.values[fkey];
  };

  return (
    <div className={classes.input}>
        <TextField
        label={label}
        variant="outlined"
        type={type}
        name={fkey}
        required={required}
        disabled={disabled}
        fullWidth={fullWidth}
        multiline={multiline}
        minRows={rows}
        placeholder={placeholder || label}
        onChange={handleChange || fprops.handleChange(fkey)}
        onBlur={fprops.handleBlur(fkey)}
        value={getFieldValue()}
        error={textFieldTouched() && !!textFieldError()}
        helperText={textFieldTouched() && textFieldError()}
        {...rest}
        />
  </div>
  );
};

export default TextInput;
