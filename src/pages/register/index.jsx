import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import Viewer from '../../Layout/Viewer';
import * as Style from './style'

import './index.css'

export default function Register({ setLoad }){

    const history = useHistory();

    useEffect(() => {
        setLoad(false);
    }, []);

    return(
        <>
            <Viewer>
            <Style.Title>GESPO</Style.Title>
                <Style.SubTitle>Gestão de custos e projetos / Cadastros </Style.SubTitle>
                <Style.Container>
                    <Style.SubContainer>
                        <Style.Component class="component" onClick={() => history.push("/register/custCenterRegister") }>Cadastro de centro de custo</Style.Component>
                        <Style.Component class="component" onClick={() => history.push("/register/projectRegister") }>Cadastro de projetos</Style.Component>
                    </Style.SubContainer>
                    <Style.SubContainer class="subcontainer">
                        <Style.Component class="component" onClick={() => history.push("/register/userRegister") }>Cadastro de usuários</Style.Component>
                    </Style.SubContainer>
                </Style.Container>
            </Viewer>
        </>
    );
}