import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  pacienteId: Yup.string().required('ID do paciente é obrigatório'),
  idadeMortePai: Yup.number().nullable().min(0, 'A idade da morte do pai deve ser um número positivo'),
  causaMortePai: Yup.string().test({
    name: 'causaMortePai',
    message: 'Causa de morte do pai é obrigatória',
    test: function(value) {
      const idadeMortePai = this.resolve(Yup.ref('idadeMortePai')) as number;
      if (idadeMortePai >= 0) {
        return !!value;
      }
      return true;
    },
  }),
  idadeMorteMae: Yup.number().nullable().min(0, 'A idade da morte da mãe deve ser um número positivo'),
  causaMorteMae: Yup.string().test({
    name: 'causaMorteMae',
    message: 'Causa de morte da mãe é obrigatória',
    test: function(value) {
      const idadeMorteMae = this.resolve(Yup.ref('idadeMorteMae')) as number;
      if (idadeMorteMae >= 0) {
        return !!value;
      }
      return true;
    },
  }),
  // Outras validações para os demais campos, se necessário
});
