export default function PlaybookITAU() {
  return (
    <>
      <h1>Playbook – Itaú</h1>

      <h2>Subida de arquivos Cível, TST e STJ no Theodora</h2>

      <p>
        O Itaú encaminha os arquivos das esferas <strong>Cível</strong>,{" "}
        <strong>TST</strong> e <strong>STJ</strong> por meio de chamado.
      </p>
      <p>
        O processo consiste apenas em baixar a planilha enviada e realizar o
        upload no <strong>Theodora</strong>, sem qualquer alteração no arquivo,
        pois ele já vem no formato correto.
      </p>

      <h3>Sobre os chamados</h3>
      <p>
        Os tickets do Itaú normalmente chegam com um título padrão informando a
        necessidade de atualização da base.
      </p>

      <h3>Passo a passo para subir a carga</h3>
      <ol>
        <li>Abra o ticket e faça o download da planilha enviada</li>
        <li>Acesse o sistema <strong>Theodora</strong></li>
        <li>Clique em <strong>Enviar Nova Carga</strong></li>
        <li>Uma nova janela será aberta para preenchimento dos campos</li>
        <li>
          Atenção especial ao campo <strong>Origem da Carga</strong>:
          <ul>
            <li>Arquivo Cível → Origem Cível</li>
            <li>Arquivo TST → Origem TST</li>
            <li>Arquivo STJ → Origem STJ</li>
          </ul>
        </li>
        <li>Clique em <strong>Próximo</strong></li>
        <li>Realize o upload do arquivo</li>
        <li>Conclua a carga</li>
      </ol>

      <p>
        <strong>Importante:</strong> cada origem deve ter sua carga realizada
        separadamente.
      </p>
      <ul>
        <li>2 cargas diárias: Cível e TST</li>
        <li>1 carga semanal: STJ</li>
      </ul>

      <h3>Resposta padrão para encerramento do chamado</h3>
      <p>
        Bom dia pessoal, espero que estejam bem!
        <br />
        <br />
        Confirmo o recebimento e atualização da base de processos.
        <br />
        <br />
        Permaneço à disposição!
      </p>

      <hr />

      <h2>Análise de casos de não distribuição</h2>

      <p>
        Semanalmente, o Itaú encaminha uma listagem de processos que não foram
        encontrados na distribuição e, por isso, não foram enviados.
      </p>

      <p>
        Para análise, utilizamos um <strong>banco de dados</strong> que é
        atualizado semanalmente.
      </p>

      <h3>Como realizar a análise</h3>
      <ol>
        <li>
          Utilize apenas a aba <strong>“Análise”</strong> da planilha
        </li>
        <li>
          Insira, na primeira coluna, os números dos processos enviados pelo
          Itaú, <strong>sem pontos e traços</strong>
        </li>
        <li>
          As demais colunas serão preenchidas automaticamente
        </li>
      </ol>

      <h3>O que analisar</h3>
      <p>
        Devem ser analisados os processos que retornarem com a{" "}
        <strong>Ação Realizada</strong> como <strong>“não cadastrado”</strong>.
      </p>

      <p>Normalmente, isso ocorre por três motivos:</p>
      <ul>
        <li>O processo é de segunda instância</li>
        <li>
          O Itaú aparece como <strong>Polo Neutro</strong> no processo (o Itaú
          deseja apenas processos em que figure como réu)
        </li>
        <li>O processo está em <strong>Segredo de Justiça</strong></li>
      </ul>

      <h3>Modelo de resposta ao Itaú</h3>
      <p>
        Boa tarde, pessoal! Espero que estejam bem!
        <br />
        <br />
        Analisando os processos encaminhados, segue o retorno de cada um:
        <br />
        <br />
        <strong>
          Os processos abaixo têm o Itaú como Polo Neutro e, portanto, não foram
          enviados:
        </strong>
        <br />
        [Listagem de processos]
        <br />
        <br />
        <strong>Os processos abaixo foram cadastrados com sucesso:</strong>
        <br />
        [Número do processo – código de captura parceiro]
        <br />
        <br />
        <strong>Os processos abaixo foram ignorados:</strong>
        <br />
        [Número do processo – motivo do descarte]
        <br />
        <br />
        Qualquer dúvida, permaneço à disposição!
      </p>
    </>
  );
}
