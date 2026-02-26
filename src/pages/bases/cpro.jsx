export default function PlaybookCPRO() {
    const styles = {
        container: { maxWidth: "100%", margin: "0 auto" },
        section: { marginBottom: "50px" },
        code: {
            backgroundColor: "#f5f5f5",
            padding: "4px 8px",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: "14px",
            color: "#004033",
        },
        callout: {
            border: "1px solid #ddd",
            borderLeft: "6px solid #004033",
            borderRadius: "6px",
            padding: "14px",
            margin: "14px 0",
            backgroundColor: "#fafafa",
            lineHeight: 1.6,
        },
        divider: {
            margin: "50px 0",
            borderTop: "2px dashed #ccc",
        },
    };

    return (
        <div style={styles.container}>
            <h1>Base de conhecimento – Consulta Pro (CPRO)</h1>

            {/* O QUE É */}
            <section style={styles.section}>
                <h2>O que é?</h2>
                <p>
                    O <strong>Consulta Pro</strong>  é a solução avançada de pesquisa e inteligência jurídica da Jusbrasil, desenvolvida para otimizar a rotina de advogados,
                    procuradores e departamentos jurídicos. Ele atua como um agregador de dados públicos, consolidando em uma única interface informações provenientes de centenas
                    de Tribunais e Diários Oficiais de todo o Brasil.
                </p>

                <p>
                    Diferente da busca pública convencional, o Consulta Pro oferece uma camada de ferramentas especializadas que permitem não apenas encontrar informações,
                    mas extrair inteligência delas para a tomada de decisões estratégicas.
                </p>

                <h3>Principais Benefícios</h3>
                <ul>
                    <li><strong>Centralização de Dados:</strong> Acesso unificado a processos físicos e digitais em diferentes instâncias (Justiça Estadual, Federal, do Trabalho e
                        Tribunais Superiores).</li>

                    <li><strong>Transparência e Profundidade:</strong>  Permite a visualização e o download da íntegra de documentos (petições, sentenças e acórdãos), essenciais
                        para o estudo de teses jurídicas e análise de precedentes.</li>

                    <li><strong>Monitoramento Inteligente:</strong>  Sistema de alertas em tempo real (Push) que notifica o usuário sobre qualquer nova movimentação
                        processual ou menção a nomes de interesse nos Diários Oficiais.</li>

                    <li><strong>Produtividade Jurídica:</strong>Funcionalidades desenhadas para o fluxo de trabalho jurídico, como a formatação automática de ementas
                        e a organização de processos em pastas de acompanhamento.</li>
                </ul>
            </section>

            {/* COMO UTILIZAR */}
            <section style={styles.section}>
                <h2>Como utilizar?</h2>

                <p>
                    Clientes podem utilizar o CPRO de duas formas: Através do site na{" "}
                    <a
                        href="https://www.jusbrasil.com.br/consulta-pro"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontWeight: "600",
                            color: "#004033",
                            textDecoration: "underline"
                        }}
                    >
                        plataforma
                    </a>{" "}
                    ou via API. Utilizando pelo site, o usuário pode informar o CPF, CNPJ ou número do CNJ
                    para visualizar os processos em que o documento pesquisado está associado.
                    Também é possível ver o resumo do processo ao clicar em “Ver resumo”, onde a IA da
                    Jusbrasil fornece uma explicação sobre o processo. Para acessar os dados do processo,
                    basta clicar em “Acessar Processo”, e caso seja do interesse do usuário temos a possibilidade
                    de baixar os processos em forma de relatório no formato CSV. Para utilizar os recursos
                    do CPRO por API, a{" "}
                    <a
                        href="https://api.jusbrasil.com.br/docs/consulta_processual_por_cpf_cnpj/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontWeight: "600",
                            color: "#004033",
                            textDecoration: "underline"
                        }}
                    >
                        documentação
                    </a>{" "}
                    contém as informações necessárias para consulta.
                </p>

                <h3>Via Plataforma (Site)</h3>
                <ul>
                    <li>Pesquisar por CPF, CNPJ ou número CNJ</li>
                    <li>Clicar em <strong>“Ver resumo”</strong> (resumo gerado por IA)</li>
                    <li>Clicar em <strong>“Acessar Processo”</strong></li>
                    <li>Baixar relatório em formato <strong>CSV</strong></li>
                </ul>

                <h3>Via API</h3>
                <p>
                    Para uso via API, consultar a {" "}
                    <a
                        href="https://api.jusbrasil.com.br/docs/consulta_processual_por_cpf_cnpj/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontWeight: "600",
                            color: "#004033",
                            textDecoration: "underline"
                        }}
                    >
                        documentação </a> oficial com os endpoints,
                    parâmetros e autenticação.
                </p>
            </section>

            {/* FERRAMENTAS AUXILIARES */}
            <section style={styles.section}>
                <h2>Ferramentas Auxiliares</h2>

                <ul>
                    <li>
                        <strong>Tuxedo:</strong>  Nos ajuda a entender de que forma foi efetuada a associação de determinado documento ao processo,
                        podemos também ver informações como a data e hora que foi possível efetuar esta associação
                    </li>

                    <li>
                        <strong>WHOIS:</strong>Nesta API, podemos colocar o nome completo da pessoa que estamos analisando o caso para que traga dados como CPF,
                        data de nascimento e nome da mãe.
                    </li>
                    <li>
                        <strong>Tela:</strong> IA que analisa anexos para validar associação CPF/CNPJ ao processo.
                    </li>
                    <li>
                        <strong>CPRO Admin:</strong> CPRO Admin nos ajuda a verificar o cadastro de uma empresa que usa o CPRO, nesta ferramenta podemos
                        verificar os módulos liberados, usuários e suas liberações e o relatório de uso mensal da plataforma.
                    </li>
                    <li>
                        <strong>Acompanhamento de Manutenções:</strong> Histórico de indisponibilidades nos tribunais.
                    </li>
                </ul>
            </section>

            <h2>Exemplos de Casos Analisados</h2>

            {/* CASO 1 */}
            <section style={styles.section}>
                <h3>Processo criminal não retornado na busca por CPF</h3>

                <div style={styles.callout}>
                    <strong>Sistema:</strong> CPRO <br />
                    <strong>Funcionalidade:</strong> Busca de processos <br />
                    <strong>Visibilidade:</strong> Company confidential
                </div>

                <h4>Descrição</h4>
                <p>
                    Usuário relatou que ao pesquisar pelo CPF de uma pessoa que ele tem ciência de possuir
                    processos criminais, no CPRO estes processos não estão sendo retornados.
                </p>

                <h4>Solução</h4>
                <p>
                    Verificado no <strong>CPRO Admin</strong> que o módulo de processos criminais não estava liberado.
                </p>
                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                    <img
                        src="/img/bc_cpro1.png"
                        alt="CPRO Admin - Módulo de processos criminais não liberado"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "6px"
                        }}
                    />
                </div>

                <h4>Causa</h4>
                <p>Empresa com módulo não liberado.</p>

                <h4>Artigos Sugeridos</h4>
                <p> Sugestão de artigos relacionados com o assunto - apague caso não seja utilizado </p>

            </section>

            <div style={styles.divider} />

            {/* CASO 2 */}
            <section style={styles.section}>
                <h3>Usuário não consegue acessar a documentação da API CPRO </h3>

                <div style={styles.callout}>
                    <strong>Sistema:</strong> CPRO <br />
                    <strong>Funcionalidade:</strong> Busca de processos <br />
                    <strong>Visibilidade:</strong> Company confidential
                </div>

                <div style={styles.callout}>
                    IP bloqueado pela infraestrutura (Cloudflare).
                </div>

                <h4>Descrição</h4>
                <p>Usuário nos informou que ao acessar o link da documentação da API do CPRO, recebeu o erro abaixo:</p>

                <p>

                    Error 1006
                    Access deniedRay ID: 9c92614a889629b4
                    2026-02-05 12:23:37 UTCWhat happened?
                    The owner of this website (api.jusbrasil.com.br) has banned your IP address (136.226.62.169).Please see
                    https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1006/(https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1006/)for more details.Was this page helpful?
                </p>

                <h4>Solução</h4>
                <p>
                    Abrir card em <span style={styles.code}>#team-tech-security-requests</span>  relatando o cenário e pedir para o
                    time efetuar o desbloqueio do IP do cliente da lista de bloqueios. Com este caso o time de segurança
                    melhorou as regras de desbloqueios para evitar recorrência deste cenário.
                </p>

                <h4>Causa</h4>
                <p>IP do cliente bloqueado.</p>

                <h4>Artigos Sugeridos</h4>
                <p> Sugestão de artigos relacionados com o assunto - apague caso não seja utilizado </p>

                <h4>Documentos relacionados</h4>
                <p>
                    <a
                        href="https://jusbrasil.slack.com/archives/C01SWTQBH9T/p1770324819734319"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontWeight: "600",
                            color: "#004033",
                            textDecoration: "underline"
                        }}
                    >
                        Link </a> da thread para consulta.

                </p>

            </section>

            <div style={styles.divider} />

            {/* CASO 3 */}
            <section style={styles.section}>
                <h3>Associação incorreta no polo do processo</h3>

                <div style={styles.callout}>
                    <strong>Sistema:</strong> CPRO <br />
                    <strong>Funcionalidade:</strong> Busca de processos <br />
                    <strong>Visibilidade:</strong> Company confidential
                </div>

                <h4>Descrição</h4>
                <p>
                    Usuário relatou que no processo 5019066-16.2025.8.13.0114, a parte Iury de Souza Pimentel está na parte de
                    polo ativo na consulta do CPRO, e ao consultar publicamente no portal do TJMG, ele está definido no polo
                    passivo. Abaixo o print da consulta no CPRO:

                </p>

                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                    <img
                        src="/img/bc_cpro2.png"
                        alt="CPRO Admin - Associação incorreta no polo do processo"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "6px"
                        }}
                    />
                </div>

                <p1>Consulta Pública no TJMG:</p1>
                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                    <img
                        src="/img/bc_cpro3.png"
                        alt="CPRO Admin - Consulta Pública no TJMG"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "6px"
                        }}
                    />
                </div>

                <h4>Solução</h4>
                <p>
                    Abrir card para o time de background-check via canal{" "}
                    <span style={styles.code}>#suporte-soluções-escalonamento-produto</span>.
                </p>

                <h4>Causa</h4>
                <p>Erro na associação do polo.</p>
            </section>

            <div style={styles.divider} />

            {/* CASO 4 */}
            <section style={styles.section}>
                <h3>Funcionalidade “visualizar documento” indisponível</h3>

                <div style={styles.callout}>
                    <strong>Sistema:</strong> CPRO <br />
                    <strong>Funcionalidade:</strong> Busca de processos <br />
                    <strong>Visibilidade:</strong> Company confidential
                </div>

                <h4>Descrição</h4>
                <p>Usuário relatou que ao buscar o processo e clicar no botão “visualizar processo”, a funcionalidade não estava
                    disponível.
                </p>

                <h4>Solução</h4>
                <p>
                    Verificando o cadastro da empresa no CPRO-Admin (CPRO-Admin-Buscar nome da empresa - Acessar o cadastro
                    - Clicar em detalhes), vimos que o cliente não estava com o módulo “Acesso a documentos” liberado:
                </p>

                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                    <img
                        src="/img/bc_cpro4.png"
                        alt="CPRO Admin - Módulo Acesso a Documentos não liberado"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "6px"
                        }}
                    />

                    <h4>Documentos relacionados</h4>
                    
                    <p>
                        <a
                            href="https://jusbrasil.lightning.force.com/lightning/r/Case/500N400000jMPFhIAO/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontWeight: "600",
                                color: "#004033",
                                textDecoration: "underline"
                            }}
                        >
                            Link </a> do ticket para consulta.

                    </p>
                </div>

                <h4>Causa</h4>
                <p>Módulo não liberado.</p>
            </section>

            <div style={styles.divider} />

            {/* CASO 5 */}
            <section style={styles.section}>
                <h3> Processo retornando “Página restrita” ao pesquisar no CPRO”</h3>

                <div style={styles.callout}>
                    <strong>Sistema:</strong> CPRO <br />
                    <strong>Funcionalidade:</strong> Busca de processos <br />
                    <strong>Visibilidade:</strong> Company confidential
                </div>

                <h4>Descrição</h4>
                <p>
                    Usuário relatou que ao buscar o processo 1115045-55.2025.8.26.0100, retornou a mensagem de “Página restrita”;
                </p>

                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                    <img
                        src="/img/bc_cpro5.png"
                        alt="CPRO Admin - Página restrita ao pesquisar processo"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "6px"
                        }}
                    />
                </div>

                <h4>Solução</h4>
                <p>
                    Verificar na base <span style={styles.code}>proc2a</span>:
                </p>

                <div style={styles.code}>
                    select id, cnj, codigo_identificador_slug, segredo_justica from processo where cnj = '11150455520258260100
                </div>
                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                    <img
                        src="/img/bc_cpro6.png"
                        alt="CPRO Admin - Consulta na base proc2a"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "6px"
                        }}
                    />
                </div>
                <p>
                    Confirmar no tribunal se o processo não está mais em segredo de justiça
                    e abrir card para atualização.
                </p>
                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                    <img
                        src="/img/bc_cpro7.png"
                        alt="CPRO Admin - Módulo Acesso a Documentos não liberado"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "6px"
                        }}
                    />      
                </div>

                <h4>Causa</h4>
                <p>Neste caso é necessário abrir um card para o time de background-check através do 
                canal #suporte-soluções-escalonamento-produto relatando o cenário com as evidências para efetuarem 
                os devidos ajustes</p>
            </section>

            <div style={styles.divider} />

            {/* CASO 6 */}
            <section style={styles.section}>
                <h3>Processo não vinculado ao CPF</h3>

                 <div style={styles.callout}>
                    <strong>Sistema:</strong> CPRO <br />
                    <strong>Funcionalidade:</strong> Busca de processos <br />
                    <strong>Visibilidade:</strong> Company confidential
                </div>

                <h4>Descrição</h4>

                <p>Ao pesquisar pelo CPF 148.460.268-41, nenhum processo é retornado:</p>

                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                    <img
                        src="/img/bc_cpro8.png"
                        alt="CPRO Admin - Processo não vinculado ao CPF"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "6px"
                        }}
                    />      
                </div>

                <p>Mas o processo 0001172-40.2026.8.16.0035 esta pessoa faz parte do polo passivo:</p>

                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                    <img
                        src="/img/bc_cpro9.png"
                        alt="CPRO Admin - Processo não vinculado ao CPF - Consulta Pública"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "6px"
                        }}
                    />  
                </div>  

                <h4>Solução</h4>
                <p>
                    Para termos certeza que o CPF em questão faz parte do processo, efetuamos uma consulta 
                    logada no TJPR para obtermos os anexos do processo. Com isso, conseguimos o documento abaixo que mostra o CPF:
                </p>
                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                    <img
                        src="/img/bc_cpro10.png"
                        alt="CPRO Admin - Processo não vinculado ao CPF - Anexo do processo"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "6px"
                        }}
                    />  
                </div>

                <p>
                Com as evidências comprovando a associação do CPF ao processo, efetuamos a abertura do card para 
                o time de background-check efetuar a associação.
                </p>
                <h4>Causa</h4>
                <p>
                Neste caso é necessário abrir um card para o time de background-check através do canal #suporte-soluções-escalonamento-produto 
                relatando o cenário com as evidências para efetuarem os devidos ajustes. Neste atendimento, o CPF não foi associado 
                ao processo pois tivemos manutenções no TJPR que impediram a coleta dos anexos necessários. A manutenção foi verificada 
                na planilha.
                </p>

                <h4>Documentos relacionados</h4>
                    <p>
                        <a
                            href="https://jusbrasil.lightning.force.com/lightning/r/Case/500N400000j5JPtIAM/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontWeight: "600",
                                color: "#004033",
                                textDecoration: "underline"
                            }}
                        >
                            Link </a> do ticket para consulta.

                    </p>

                    <p>
                        <a
                            href="https://jusbrasil.slack.com/archives/C09TD4PFTL4/p1770034894205259"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontWeight: "600",
                                color: "#004033",
                                textDecoration: "underline"
                            }}
                        >
                            Link </a> da thread para consulta.

                    </p>
            </section>

            <footer style={{ marginTop: "60px", fontSize: "12px", color: "#666" }}>
                Documento interno – Consulta Pro (CPRO) | Jusbrasil
            </footer>
        </div>
    );
}
