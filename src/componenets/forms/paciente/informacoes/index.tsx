import { Grid } from "@mui/material";
import useStyles from "./styles";
import { FormikProps } from "formik";
import { FormValues } from "./container";
import TextInput from "../../../inputs/text-input";


interface InformacoesPessoaisProps {
    fprops: FormikProps<FormValues>;
  }


  const InformacoesPessoais: React.FC<InformacoesPessoaisProps> = ({ fprops }) => {
 
  const classes = useStyles();
 

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="Nome"
          type="text"
          fprops={fprops}
          fkey="name"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="Data de Nascimento"
          type="date"
          fprops={fprops}
          fkey="dataNacimento"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="CPF"
          type="text"
          fprops={fprops}
          fkey="cpf"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="Gênero"
          type="text"
          fprops={fprops}
          fkey="genero"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="Estado Civil"
          type="text"
          fprops={fprops}
          fkey="estadoCivil"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="Possui Filhos"
          type="text"
          fprops={fprops}
          fkey="possuiFilhos"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="Profissão"
          type="text"
          fprops={fprops}
          fkey="profissao"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="Religião"
          type="text"
          fprops={fprops}
          fkey="religiao"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="Nível de Ensino"
          type="text"
          fprops={fprops}
          fkey="nivelEnsino"
          fullWidth
          disabled={false}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextInput
          label="Endereço"
          type="text"
          fprops={fprops}
          fkey="endereco"
          fullWidth
          disabled={false}
        />
      </Grid>
    </Grid>
  );
};

export default InformacoesPessoais;
