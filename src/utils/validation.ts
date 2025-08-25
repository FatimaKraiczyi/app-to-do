/**
 * Formata um email removendo espaços e convertendo para lowercase
 */
export const formatEmail = (email: string): string => {
  return email.trim().toLowerCase();
};

/**
 * Valida se um email tem formato válido
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida se uma senha atende aos critérios mínimos
 */
export const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

/**
 * Formata uma data para string legível
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
};
