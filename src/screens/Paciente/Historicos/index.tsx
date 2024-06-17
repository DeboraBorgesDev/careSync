import React, { useState } from 'react';
import { Grid } from '@mui/material';
import TabsPanel from '../../../componenets/TabsPanel';
import { ChildFriendly, Groups, Masks, Person } from '@mui/icons-material';
import InformacoesPessoaisContainer from '../../../componenets/forms/paciente/informacoes/container';
import { useOutletContext } from 'react-router-dom';
import { Paciente } from '../../PacientesList';


const HistoricosPage: React.FC = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const {paciente} = useOutletContext<{
      paciente: Paciente
    }>();

    const items = [
        {
          label: 'Informações Pessoais',
          icon: <Person />,
          content: 
          <InformacoesPessoaisContainer
            paciente={paciente}
          />,
        },
        {
            label: 'História Fisiológica',
            icon: <ChildFriendly />,
            content: <InformacoesPessoaisContainer/>,
          },
          {
            label: 'Histórico Patológico',
            icon: <Masks />,
            content: <InformacoesPessoaisContainer/>,
          },
          {
            label: 'História Familiar',
            icon: <Groups />,
            content: <InformacoesPessoaisContainer/>,
          },
        
      ];

  return (
    <Grid container>
      <h1>Dashboard</h1>
      <Grid item xs={12}>
      <TabsPanel
          items={items}
          withIcons
          orientation="horizontal"
          textColor="white"
          backgroundColor="primary"
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Grid>
    </Grid>
  );
};

export default HistoricosPage;
