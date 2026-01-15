export default function FaqIntimacoes() {
  return (
    <>
      <h1>FAQ – Intimações</h1>

      <h3>1. O que é a API de Intimações?</h3>
      <p>
        A API de Intimações permite automatizar a coleta e o gerenciamento de
        intimações, citações, notificações e audiências publicadas em sistemas
        judiciais eletrônicos de tribunais brasileiros.
      </p>

      <h3>2. Qual o propósito da API de Intimações?</h3>
      <p>Os principais usos do serviço são:</p>
      <ul>
        <li>
          Capturar automaticamente intimações judiciais e audiências publicadas
          nos tribunais
        </li>
        <li>
          Acessar dados detalhados como anexos, partes envolvidas e histórico
        </li>
        <li>
          Integrar essas informações ao seu sistema jurídico ou software de
          gestão de processos
        </li>
      </ul>

      <h3>3. Quem pode usar essa API?</h3>
      <ul>
        <li>Departamentos jurídicos de empresas</li>
        <li>Escritórios de advocacia</li>
        <li>
          LegalTechs ou sistemas que necessitem acompanhar intimações judiciais
          de forma automatizada
        </li>
      </ul>

      <h3>4. Como funciona a autenticação para usar a API?</h3>
      <p>
        O acesso à API é feito por meio de credenciais associadas às contas dos
        tribunais. Dependendo do tribunal, podem ser exigidos mecanismos
        adicionais de segurança, como certificado digital ou autenticação
        multifator.
      </p>

      <h3>5. O que é uma “Conta” na API?</h3>
      <p>
        Uma conta representa as credenciais de acesso a um tribunal específico
        (como PJe, e-SAJ, Projudi, entre outros). Cada conta deve ser cadastrada
        no sistema para permitir a coleta de intimações daquele tribunal.
      </p>

      <h3>6. O que são “Perfis” e por que são importantes?</h3>
      <p>
        Perfis permitem agrupar notificações vinculadas a uma conta. Isso é
        especialmente útil quando um advogado representa vários clientes,
        possibilitando organizar as intimações de forma clara por representado.
      </p>

      <h3>7. Como listar as intimações via API?</h3>
      <p>
        A API disponibiliza um endpoint para listagem de intimações com
        parâmetros como:
      </p>
      <ul>
        <li>Data inicial e final de coleta</li>
        <li>Conta</li>
        <li>Número do processo (CNJ)</li>
        <li>Paginação (page, per_page)</li>
      </ul>
      <p>
        A resposta é retornada em formato JSON.
      </p>

      <h3>8. E sobre audiências?</h3>
      <p>
        Além das intimações, existe um endpoint específico para listar
        audiências associadas a um cliente, trazendo detalhes como data, hora,
        local e participantes.
      </p>

      <h3>9. Posso obter detalhes de uma notificação específica?</h3>
      <p>
        Sim. Utilizando o ID da notificação, é possível consultar um endpoint
        que retorna informações detalhadas, incluindo anexos, assuntos
        processuais, partes envolvidas e dados relevantes da intimação ou
        audiência.
      </p>

      <h3>10. Quais são erros comuns e como são tratados?</h3>
      <p>Alguns exemplos de erros retornados pelos endpoints:</p>
      <ul>
        <li>
          <strong>404 Not Found:</strong> recurso ou cliente não encontrado
        </li>
        <li>
          <strong>422 Validation Error:</strong> erro de validação nos parâmetros
          da requisição
        </li>
      </ul>
      <p>
        Esses erros devem ser tratados adequadamente pelo cliente da API.
      </p>

      <h3>11. A API funciona em múltiplos tribunais?</h3>
      <p>
        Sim. A cobertura inclui os principais sistemas judiciais, como:
      </p>
      <ul>
        <li>PJe</li>
        <li>Eproc</li>
        <li>Projudi</li>
        <li>ESAJ</li>
        <li>DJE</li>
        <li>Entre outros que estão sendo continuamente integrados</li>
      </ul>

      <h3>12. Preciso cadastrar a conta com certificado digital ou MFA?</h3>
      <p>
        Sim. Dependendo do tribunal, pode ser necessário cadastrar a conta com:
      </p>
      <ul>
        <li>Certificado Digital (PFX em Base64)</li>
        <li>Autenticação multifatorial (MFA/2FA)</li>
      </ul>
      <p>
        A documentação explica como configurar esses acessos para permitir a
        coleta automática de intimações.
      </p>

      <h3>13. A API envia informações automaticamente?</h3>
      <p>
        A API pode ser utilizada de forma síncrona (requisição e resposta
        imediata) ou de forma assíncrona, utilizando mecanismos como webhooks
        para receber notificações automaticamente quando houver novas
        informações.
      </p>

      <p>
        Mais detalhes podem ser encontrados na documentação oficial:
        <br />
        <a
          href="https://api.jusbrasil.com.br/docs/api_intimacoes/index.html"
          target="_blank"
          rel="noreferrer"
        >
          https://api.jusbrasil.com.br/docs/api_intimacoes
        </a>
      </p>
    </>
  );
}
