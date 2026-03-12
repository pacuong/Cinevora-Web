interface FormErrorProps {
  error?: { message?: string };
}

const FormError = ({ error }: FormErrorProps) => {
  if (!error) return null;
  return <p className="text-red-100 text-s font-mont">{error.message}</p>;
};

export default FormError;
