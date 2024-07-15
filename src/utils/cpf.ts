export const formatCPF = (cpf: string): string => {
    return  cpf.replace(/\D/g, '');
};
