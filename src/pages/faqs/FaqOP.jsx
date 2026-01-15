export default function FaqOP() {
  return (
    <>
      <h1>FAQ – OP</h1>

      {/* ===================== */}
      {/* 1. Cadastro de Usuários */}
      {/* ===================== */}
      <h2>1. Cadastro de Usuários e Permissões</h2>

      <h3>Como adicionar um novo usuário?</h3>
      <p>
        Se você possui o perfil de administrador no cadastro da empresa, acesse a
        tela de <strong>Cadastro de Usuários</strong> no menu lateral, selecione
        a opção <strong>Usuários</strong> e clique no botão azul{" "}
        <strong>“Novo usuário”</strong>.
      </p>

      <h3>Como alterar as permissões de um usuário?</h3>
      <p>
        Se você possui o perfil de administrador, acesse a tela de Cadastro de
        Usuários pelo menu lateral e clique no <strong>ID do usuário</strong>{" "}
        que deseja modificar.
      </p>
      <p>
        Na tela de detalhes, localize a seção <strong>“Dados cadastrais”</strong>{" "}
        e, em seguida, a área <strong>“Perfis”</strong>. Clique nas permissões
        destacadas em azul para liberar a edição. Marque ou desmarque as
        permissões desejadas e finalize clicando no ícone de{" "}
        <strong>check azul</strong>.
      </p>

      <h3>Como tornar meu usuário um administrador?</h3>
      <p>
        Solicite a outro usuário que já seja administrador para realizar esta
        alteração. Esse usuário deve acessar o Cadastro de Usuários pelo menu
        lateral e clicar no ID do seu perfil.
      </p>
      <p>
        Na seção <strong>“Dados cadastrais”</strong>, em{" "}
        <strong>“Perfis”</strong>, selecione a permissão{" "}
        <strong>“Administrar: empresa”</strong> e clique no check azul.
      </p>
      <p>
        Caso não exista nenhum administrador cadastrado na empresa, entre em
        contato conosco para solicitar a alteração do perfil.
      </p>

      {/* ===================== */}
      {/* 2. Funcionalidades */}
      {/* ===================== */}
      <h2>2. Funcionalidades Principais</h2>

      <h3>
        Como cadastrar novos monitoramentos para distribuições de processos
        (partes)?
      </h3>
      <p>
        No menu lateral, acesse <strong>“Minhas Partes”</strong> (ícone de olho)
        e selecione <strong>“Partes monitoradas”</strong>.
      </p>
      <p>
        Clique no botão azul <strong>“Nova parte”</strong> e configure:
      </p>
      <ul>
        <li>Nome da parte</li>
        <li>Expressão regular</li>
        <li>Polo (ativo ou passivo)</li>
        <li>Coleta de anexos</li>
        <li>Instâncias e tribunais</li>
      </ul>
      <p>
        Em caso de dúvidas sobre qualquer configuração, entre em contato conosco.
      </p>

      <h3>
        É possível cadastrar uma lista de termos em lote para monitoramento?
      </h3>
      <p>
        Sim. Acesse a opção <strong>“Monitorar em massa”</strong> no menu lateral
        e cole a lista de termos, um por linha. Posteriormente, é possível
        refinar as configurações individualmente em{" "}
        <strong>“Partes monitoradas”</strong>.
      </p>

      <h3>Como editar um monitoramento de parte já existente?</h3>
      <p>
        Na tela de <strong>“Partes monitoradas”</strong>, utilize o campo de
        busca por nome e clique no ID do cadastro (em azul).
      </p>
      <p>
        É possível editar a expressão regular, definir se a busca será feita em
        tribunais e/ou diários oficiais e escolher tribunais específicos.
      </p>

      <h3>Como desativar um monitoramento de parte?</h3>
      <p>
        Para desativar um único cadastro, acesse os detalhes da parte e clique
        em <strong>“Desativar”</strong>.
      </p>
      <p>
        Para desativar múltiplos cadastros, selecione-os na lista e clique em{" "}
        <strong>“Desativar”</strong>, ao lado de <strong>“Nova parte”</strong>.
      </p>

      <h3>Posso gerar um relatório de partes monitoradas?</h3>
      <p>
        Sim. Na tela de <strong>“Partes monitoradas”</strong>, clique no ícone de
        três traços no canto superior direito e selecione{" "}
        <strong>“Enviar email com todos os dados”</strong>. O relatório em Excel
        será enviado ao seu e-mail.
      </p>

      <h3>
        É possível buscar e monitorar textos em diários oficiais?
      </h3>
      <p>
        Sim. No menu lateral, acesse <strong>“Diários Oficiais”</strong> →{" "}
        <strong>“Palavras monitoradas”</strong>.
      </p>
      <p>
        Nessa tela é possível cadastrar novas palavras, editar cadastros
        existentes e desativar monitoramentos ativos.
      </p>

      <h3>Como cadastrar um processo para monitorar andamentos?</h3>
      <p>
        Acesse <strong>“Meus Processos”</strong> →{" "}
        <strong>“Processos monitorados”</strong> e clique em{" "}
        <strong>“Novo processo”</strong>.
      </p>
      <p>
        Configure instâncias, tribunais e se o monitoramento será feito em
        diários oficiais e/ou tribunais.
      </p>

      <h3>
        Como interromper um monitoramento de processo e exportar a lista?
      </h3>
      <p>
        Para interromper, acesse o cadastro do processo e, na seção{" "}
        <strong>“Status do monitoramento”</strong>, altere as opções para{" "}
        <strong>Não</strong>.
      </p>
      <p>
        Para exportar a lista, clique no ícone de três traços e selecione{" "}
        <strong>“Enviar email com todos os dados”</strong>.
      </p>

      <h3>É possível emitir relatórios de processos?</h3>
      <p>No OP, é possível emitir dois tipos de relatórios:</p>
      <ul>
        <li>
          <strong>Relatório por Nome:</strong> retorna processos da base de dados
          com base no nome pesquisado.
        </li>
        <li>
          <strong>Relatório de Saneamento de Base:</strong> atualiza processos e
          retorna os dados completos em formato de relatório.
        </li>
      </ul>

      {/* ===================== */}
      {/* 3. Solução de Problemas */}
      {/* ===================== */}
      <h2>3. Solução de Problemas</h2>

      <h3>
        Cadastrei uma parte para monitorar, mas não recebi o alerta. O que fazer?
      </h3>
      <p>Verifique:</p>
      <ul>
        <li>
          Se a data de criação do monitoramento é anterior à data de
          distribuição do processo
        </li>
        <li>
          Se o polo (ativo ou passivo) está configurado corretamente
        </li>
        <li>
          Se a expressão regular corresponde ao nome da parte no processo
        </li>
      </ul>

      <h3>Não recebi os andamentos do processo no OP. O que fazer?</h3>
      <p>
        Verifique no cadastro de <strong>Processos monitorados</strong> se o
        monitoramento está ativo.
      </p>
    </>
  );
}
