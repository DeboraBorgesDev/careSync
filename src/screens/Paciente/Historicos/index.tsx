import React, { useState } from 'react';
import { Grid } from '@mui/material';
import TabsPanel from '../../../componenets/TabsPanel';
import { ChildFriendly, Groups, Masks, Person } from '@mui/icons-material';
import InformacoesPessoaisContainer from '../../../componenets/forms/paciente/informacoes/container';
import { useOutletContext } from 'react-router-dom';
import { Paciente } from '../../PacientesList';
import HFisiologicaContainer from '../../../componenets/forms/paciente/HFisiologica/container';
import { HFamiliarType, Hfisiologica } from '../../../services/paciente';
import HFamiliarContainer from '../../../componenets/forms/paciente/HFamiliar/container';


const HistoricosPage: React.FC = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const {paciente, historiaFisiologica, historiaFamiliar} = useOutletContext<{
      paciente: Paciente;
      historiaFisiologica: Hfisiologica;
      historiaFamiliar: HFamiliarType;
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
            content: <HFisiologicaContainer hFisiologica={historiaFisiologica}/>,
          },
          {
            label: 'Histórico Patológico',
            icon: <Masks />,
            content: <InformacoesPessoaisContainer/>,
          },
          {
            label: 'História Familiar',
            icon: <Groups />,
            content: <HFamiliarContainer hFamiliar={historiaFamiliar} />,
          },
        
      ];

  return (
    <Grid container>
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
