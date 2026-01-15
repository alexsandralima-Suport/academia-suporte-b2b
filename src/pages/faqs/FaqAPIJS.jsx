export default function FaqAPIJS() {
  return (
    <>
      <h1>FAQ – API Jusbrasil Soluções</h1>

      <h3>Como faço para autenticar na API?</h3>
      <p>
        A API do Jusbrasil utiliza token de acesso (API Key). Esse token deve ser
        enviado em todas as requisições no cabeçalho de autenticação.
      </p>
      <p>
        Cada token é único e pode ser usado indefinidamente, até ser re-gerado.
      </p>

      <h3>Quais são as formas de autenticação aceitas?</h3>
      <p>
        Autenticação via header <strong>Authorization</strong> e possibilidade
        de uso em formato <strong>Basic</strong>, quando o cliente HTTP não
        suporta autenticação direta — utilizando <code>token + ":"</code> e
        codificação Base64.
      </p>

      <h3>Os dados retornados são sempre em tempo real?</h3>
      <p>
        Nem sempre. A API pode retornar:
      </p>
      <ul>
        <li>Informações já disponíveis na base (dados já coletados)</li>
        <li>
          Dados atualizados a partir de solicitações feitas ao tribunal, quando
          habilitado e disponível
        </li>
      </ul>
      <p>
        O comportamento depende do endpoint e do módulo contratado.
      </p>

      <h3>Por que alguns processos retornam vazios, incompletos ou com timeout?</h3>
      <p>Isso pode acontecer por motivos como:</p>
      <ul>
        <li>Indisponibilidade ou intermitência dos sites dos tribunais</li>
        <li>Processos sigilosos ou com restrição de acesso</li>
        <li>Instabilidade temporária no serviço</li>
        <li>
          Tempo de resposta elevado ao solicitar recursos mais pesados, como
          anexos ou autos
        </li>
      </ul>
      <p>
        Nesses casos, é comum o retorno vir sem conteúdo ou a requisição expirar
        (timeout).
      </p>

      <h3>Como funciona o monitoramento de processos?</h3>
      <p>
        O módulo de monitoramento permite cadastrar processos (por número CNJ)
        para receber atualizações automaticamente. Ele é ideal para empresas que
        desejam automatizar o acompanhamento de capa e movimentações.
      </p>

      <h3>
        Quando eu cadastro um monitoramento, o sistema envia históricos antigos?
      </h3>
      <p>
        Por padrão, ao registrar um processo para monitoramento, o sistema envia
        os movimentos conhecidos ocorridos nos últimos 16 dias. Esse
        comportamento pode ser ajustado via suporte.
      </p>

      <h3>O que são anexos/autos processuais e como a API retorna isso?</h3>
      <p>
        O campo <strong>anexos</strong> é retornado como uma lista de tuplas, onde
        cada tupla representa um documento do processo.
      </p>
      <p>Ela pode conter, por exemplo:</p>
      <ul>
        <li>ID do anexo</li>
        <li>URL de download (válida por até 7 dias)</li>
        <li>ID da movimentação associada, quando existir vínculo</li>
      </ul>

      <h3>
        Qual a diferença entre <code>get_anexos</code> e solicitar download de
        autos/anexos?
      </h3>
      <p>
        O parâmetro <code>get_anexos</code> controla se os anexos aparecem ou não
        no JSON da resposta.
      </p>
      <p>
        Para solicitar que o sistema baixe os autos diretamente no tribunal,
        existe um mecanismo específico (módulo “Encomendar autos”) e o parâmetro{" "}
        <code>atualiza_tribunal_anexos</code>.
      </p>
      <p>
        Documentação:
        <br />
        <a
          href="https://api.jusbrasil.com.br/docs/autos_processuais/index.html"
          target="_blank"
          rel="noreferrer"
        >
          https://api.jusbrasil.com.br/docs/autos_processuais
        </a>
      </p>

      <h3>Como lidar com erros comuns (401, 403, 404, 429 e timeout)?</h3>
      <ul>
        <li>
          <strong>401 / 403</strong> → problema de autenticação, token inválido ou
          permissão de módulo
        </li>
        <li>
          <strong>404</strong> → recurso não encontrado (processo inexistente ou
          endpoint incorreto)
        </li>
        <li>
          <strong>429</strong> → excesso de requisições (rate limit)
        </li>
        <li>
          <strong>Timeout</strong> → instabilidade do tribunal, lentidão ou
          parâmetros que aumentam o peso da resposta
        </li>
      </ul>

      <p>
        Nesses cenários, o recomendado é: verificar o token, reduzir chamadas
        repetidas, tratar tentativas de retry com espera e acionar o suporte se o
        problema persistir.
      </p>
    </>
  );
}
