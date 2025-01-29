export interface InputFieldProps {
  type: "text" | "password" | "email" | "number"; // Tipo de input
  name: string; // Nombre del input
  value: string; // Valor del input
  placeholder?: string; // Texto de ayuda
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Función para manejar cambios
  error?: string; // Mensaje de error
  required?: boolean; // Si el campo es obligatorio
  id?: string; // Agrega esta línea
}
