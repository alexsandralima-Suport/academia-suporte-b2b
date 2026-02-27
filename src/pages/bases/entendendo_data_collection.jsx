export default function BaseColetaArquitetura() {
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
        warning: {
            border: "1px solid #f5c6cb",
            borderLeft: "6px solid #dc3545",
            borderRadius: "6px",
            padding: "14px",
            margin: "14px 0",
            backgroundColor: "#fff5f5",
            lineHeight: 1.6,
        },
        divider: { margin: "50px 0", borderTop: "2px dashed #ccc" },
        table: {
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "12px",
            fontSize: "14px",
        },
        th: {
            textAlign: "left",
            padding: "10px",
            borderBottom: "1px solid #ddd",
            backgroundColor: "#fafafa",
        },
        td: {
            verticalAlign: "top",
            padding: "10px",
            borderBottom: "1px solid #eee",
            lineHeight: 1.5,
        },
    };

    return (
        <div style={styles.container}>
            <h1>Entendendo a Coleta de Dados</h1>
            <h2>Visão Geral : Times, Fluxos e Arquitetura de Coleta</h2>

            {/* 1) OBJETIVO */}
            <section style={styles.section}>
                <h2>1) Objetivo do Documento</h2>
                <p>Este documento descreve:</p>
                <ul>
                    <li>Quais times atuam no ecossistema de Coleta</li>
                    <li>O papel de cada time no fluxo end-to-end</li>
                    <li>Visão geral da arquitetura atual (assíncrona)</li>
                    <li>Componentes críticos (Worker2a, Kafka, Persistência, DSM)</li>
                    <li>Principais mecanismos de resiliência</li>
                </ul>
            </section>

            {/* 2) TIMES */}
            <section style={styles.section}>
                <h2>2) Times e Responsabilidades</h2>

                <h3>2.1 Cobertura Processos</h3>
                <div style={styles.callout}>
                    <strong>Responsabilidade principal:</strong> revocação e cobertura dos processos monitorados.
                    <br />
                    <strong>O que garante:</strong>
                    <ul>
                        <li>Revocação dos processos monitorados (B2B e B2C)</li>
                        <li>Cobertura da coleta processual (manutenção dos crawlers)</li>
                        <li>Qualidade do dado coletado</li>
                    </ul>
                    <strong>Canal:</strong> <span style={styles.code}>#team-data-collection-cobertura-processos</span>
                    <br />
                    <strong>Mentions:</strong>{" "}
                    <span style={styles.code}>@data-collection-cobertura-processos</span>{" "}
                    <span style={styles.code}>@data-collection-cobertura-processos-oncall</span>
                </div>

                <h3>2.2 Motor</h3>
                <div style={styles.callout}>
                    <strong>Responsabilidade principal:</strong> execução rápida e sustentável das consultas.
                    <br />
                    <strong>O que garante:</strong>
                    <ul>
                        <li>Execução de consultas processuais no menor tempo possível</li>
                        <li>
                            Respeito aos parâmetros de execução: prioridade, freshness, horário de agendamento e download de documentos
                        </li>
                    </ul>
                    <strong>Canal:</strong> <span style={styles.code}>#team-coleta_processos-motor</span>
                    <br />
                    <strong>Mentions:</strong>{" "}
                    <span style={styles.code}>@coleta_processos-motor</span>{" "}
                    <span style={styles.code}>@coleta_processos-motor-oncall</span>
                </div>

                <h3>2.3 Evolução</h3>
                <div style={styles.callout}>
                    <strong>Responsabilidade principal:</strong> evolução da arquitetura e integração com CNJ.
                    <br />
                    <strong>O que garante:</strong>
                    <ul>
                        <li>Evolução da arquitetura medalhão</li>
                        <li>Integração com API do CNJ</li>
                        <li>Modernização do catálogo de robôs e stack de coleta</li>
                    </ul>
                    <strong>Canal:</strong> <span style={styles.code}>#team-data-collection-evolucao</span>
                    <br />
                    <strong>Mentions:</strong>{" "}
                    <span style={styles.code}>@data-collection-evolucao-oncall</span>
                </div>

                <h3>2.4 Data-access</h3>
                <div style={styles.callout}>
                    <strong>Responsabilidade principal:</strong> acesso eficaz aos dados.
                    <br />
                    <strong>O que garante:</strong>
                    <ul>
                        <li>Redução e mitigação de barreiras de segurança enfrentadas pela coleta</li>
                        <li>Apoio na obtenção de conteúdo quando há captchas, autenticação, bloqueios de IP e antifraude</li>
                    </ul>
                    <strong>Canal:</strong> <span style={styles.code}>#team-data-access</span>
                    <br />
                    <strong>Mentions:</strong> <span style={styles.code}>@data-access-all</span>
                </div>

                <h3>2.5 Digital Asset</h3>
                <div style={styles.callout}>
                    <strong>Responsabilidade principal:</strong> manutenção e gestão do ativo digital.
                    <br />
                    <strong>O que garante:</strong>
                    <ul>
                        <li>Suprir verticais com dados processuais no tempo oportuno</li>
                        <li>Otimização de recursos de coleta</li>
                        <li>Descoberta e uso de novas fontes (sinais)</li>
                        <li>Definição de quais coletas devem ser geradas</li>
                    </ul>
                    <strong>Canal:</strong> <span style={styles.code}>#team-data-collection-digital-asset</span>
                    <br />
                    <strong>Mentions:</strong> <span style={styles.code}>@data-collection-digital-asset</span>
                </div>

                <h3>2.6 Organograma Geral</h3>
                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                    <img
                        src="/img/bc_organograma_geral_data_collection.png"
                        alt="Organograma dos times de Coleta"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "6px"
                        }}
                    />
                </div>
            </section>

            <div style={styles.divider} />

            {/* 3) FLUXO */}
            <section style={styles.section}>
                <h2>3) Fluxo End-to-End (Visão Macro)</h2>

                <h3>3.1 Fluxo de Dados</h3>

                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                    <img
                        src="/img/bc_fluxo_de_dados.png"
                        alt="Fluxo de Dados da Coleta"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "6px"
                        }}
                    />
                </div>
                <ol>
                    <li>Tribunais e fontes jurídicas disponibilizam processos e artefatos públicos</li>
                    <li>Data-access atua para superar barreiras de segurança</li>
                    <li>Cobertura Processos mantém crawlers funcionando com qualidade</li>
                    <li>Motor executa consultas respeitando SLAs e parâmetros operacionais</li>
                    <li>Digital Asset gera sinais e distribui dados de forma inteligente</li>
                    <li>Evolução moderniza arquitetura (medalhão, CNJ, catálogo de robôs)</li>
                    <li>Verticais/Produtos consomem dados estruturados e entregam ao cliente</li>
                </ol>


                <h3>3.2 Links Úteis</h3>

                <p>
                    <li>
                        <a
                            href="https://metabase.apps.jusbr.com/dashboard/1679-distribuicao-api-cnj?data=thisday&tab=679-vis%C3%A3o-geral&tipo_sinal=api_cnj__type_new&tribunal="
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontWeight: "600",
                                color: "#004033",
                                textDecoration: "underline"
                            }}
                        >
                            Dashboard coleta sinais API CNJ</a>
                    </li>

                </p>
            </section>

            <div style={styles.divider} />

            {/* 4) MEDALHÃO */}
            <section style={styles.section}>
                <h2>4) Arquitetura Medalhão (Framework)</h2>

                <h3>4.1 Visão Geral</h3>
                <p>
                    O framework implementa a Arquitetura Medalhão (Medallion Architecture) para processamento de dados,
                    com foco em organização, escalabilidade e governança.
                </p>

                <h3>4.2 Camadas</h3>
                <ul>
                    <li><strong>Bronze:</strong> dados brutos, não processados</li>
                    <li><strong>Prata:</strong> dados limpos, validados e padronizados</li>
                    <li><strong>Ouro:</strong> dados agregados e prontos para consumo analítico/produtos</li>
                </ul>

                <h3>4.3 Documentação Disponível</h3>
                <ul>
                    <p>
                        <li>
                            <a
                                href="https://docs.data-collection.apps.jusbr.com/arquitetura-medalhao-framework/monocapa-bigtable-pipeline.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontWeight: "600",
                                    color: "#004033",
                                    textDecoration: "underline"
                                }}
                            >
                                Monocapa BigTable Pipeline</a> - Pipeline para processamento de dados no BigTable
                        </li>
                    </p>

                    <p>
                        <li>
                            <a
                                href="https://docs.data-collection.apps.jusbr.com/arquitetura-medalhao-framework/spark_streaming_spark_config.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontWeight: "600",
                                    color: "#004033",
                                    textDecoration: "underline"
                                }}
                            >
                                Spark Streaming Config </a> - Configurações para Spark Streaming
                        </li>
                    </p>
                </ul>
            </section>

            <div style={styles.divider} />

            {/* 5) ARQUITETURA ASSÍNCRONA */}
            <section style={styles.section}>
                <h2>5) Nova Arquitetura (Assíncrona)</h2>

                <h3>5.1 Visão Geral</h3>

                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                    <img
                        src="/img/bc_data_collection_nova_arquitetura.png"
                        alt="Nova Arquitetura de Coleta"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "6px"
                        }}
                    />
                </div>

                <p>A arquitetura assíncrona foi desenhada para garantir:</p>
                <ul>
                    <li>Desacoplamento entre coleta e persistência</li>
                    <li>Resiliência a falhas de fontes externas</li>
                    <li>Capacidade de throughput com priorização</li>
                    <li>Controle de concorrência e rate limit</li>
                </ul>

                <h3>5.2 Componentes Principais</h3>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Componente</th>
                            <th style={styles.th}>Função</th>
                            <th style={styles.th}>Observações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={styles.td}><strong>Worker2a</strong></td>
                            <td style={styles.td}>Crawlers que coletam processos dos tribunais</td>
                            <td style={styles.td}>Publicam dados brutos no Kafka</td>
                        </tr>
                        <tr>
                            <td style={styles.td}><strong>Kafka</strong></td>
                            <td style={styles.td}>Backbone de mensageria</td>
                            <td style={styles.td}>Tópicos com prioridade: HIGH / MEDIUM / LOW</td>
                        </tr>
                        <tr>
                            <td style={styles.td}><strong>proc2a-persistence-consumer</strong></td>
                            <td style={styles.td}>Consumers que leem do Kafka</td>
                            <td style={styles.td}>Validam payload, merge de anexos/textos e enviam para API</td>
                        </tr>
                        <tr>
                            <td style={styles.td}><strong>proc2a-persistence-api</strong></td>
                            <td style={styles.td}>Serviço HTTP principal de persistência</td>
                            <td style={styles.td}>Deduplicação, transações, callbacks, DLQ</td>
                        </tr>
                        <tr>
                            <td style={styles.td}><strong>Proc2a DB</strong></td>
                            <td style={styles.td}>Base relacional PostgreSQL</td>
                            <td style={styles.td}>Esquema versionado via AtlasDB</td>
                        </tr>
                        <tr>
                            <td style={styles.td}><strong>Pipeline</strong></td>
                            <td style={styles.td}>Recebe JSON canônico</td>
                            <td style={styles.td}>Segue fluxo normal para tuxedo/consumo interno</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <div style={styles.divider} />

            {/* 6) RESILIÊNCIA */}
            <section style={styles.section}>
                <h2>6) Mecanismos de Resiliência</h2>

                <h3>6.1 Retentativas infinitas</h3>
                <p>
                    Qualquer mensagem que não for persistida com sucesso é retentada indefinidamente, até:
                </p>
                <ul>
                    <li>Persistir com sucesso</li>
                    <li>Ou ser direcionada para DLQ</li>
                </ul>

                <h3>6.2 Rate Limiter (Redis)</h3>
                <p>Controla requests/s para:</p>
                <ul>
                    <li>Garantir fluxo previsível</li>
                    <li>Evitar saturação súbita da base</li>
                    <li>Manter estabilidade mesmo em picos</li>
                </ul>

                <h3>6.3 Concurrency Limiter</h3>
                <div style={styles.callout}>
                    <strong>Limite padrão:</strong> 50 requisições concorrentes.
                    <br />
                    <strong>Comportamento esperado:</strong>
                    <ul>
                        <li>Base rápida → maior throughput</li>
                        <li>Base lenta → throughput reduz automaticamente</li>
                    </ul>
                </div>
                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                    <img
                        src="/img/bc_data_collection_limitador_de_concorrencia.png"
                        alt="Nova Arquitetura de Coleta"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "6px"
                        }}
                    />
                </div>

            </section>

            <div style={styles.divider} />

            {/* 7) DSM */}
            <section style={styles.section}>
                <h2>7) Distribution Signal Manager (DSM)</h2>

                <h3>7.1 Visão Geral</h3>
                <p>
                    O DSM é um serviço web em Python (FastAPI) responsável por gerenciar descoberta de sinais de processos,
                    validar/processar sinais e distribuir eventos via Pub/Sub.
                </p>

                <h3>7.2 Arquitetura Principal</h3>
                <div style={styles.code}>
                    HTTP Request → Signal Evaluation → Strategy Selection → Processing → Pub/Sub Distribution
                </div>

                <h3>7.3 Componentes Core</h3>
                <ul>
                    <li>API FastAPI: endpoint <span style={styles.code}>/v1/lawsuit-discovery-signal</span></li>
                    <li>Signal Evaluator: orquestração e processamento</li>
                    <li>Strategy Pattern: estratégias específicas por origem</li>
                    <li>Classification System: verificação via Tuxedo + bifurcação</li>
                    <li>Deduplication: cache Redis com TTL</li>
                </ul>

                <h3>7.4 Integrações</h3>
                <ul>
                    <li><strong>Redis:</strong> cache e deduplicação</li>
                    <li><strong>Google Pub/Sub:</strong> distribuição</li>
                    <li><strong>Tuxedo API:</strong> verificação de existência de processo</li>
                    <li><strong>BigQuery:</strong> persistência para pesquisa analítica</li>
                </ul>

                <h3>7.5 Funcionalidades Principais</h3>

                <h4>Classificação Inteligente</h4>
                <p>Valida existência do processo via Tuxedo API e bifurca:</p>
                <ul>
                    <li><span style={styles.code}>Distribution (__type_new)</span>: processo não existe</li>
                    <li><span style={styles.code}>Upgrade (__type_other)</span>: processo já existe</li>
                </ul>

                <h4>Estratégias Especializadas</h4>
                <ul>
                    <li><strong>SolucionareDistributionStrategy:</strong> Priority 1, freshness 600s</li>
                    <li><strong>BatchStrategy:</strong> Priority 5, freshness 0 (imediato)</li>
                    <li><strong>CollectorStrategy:</strong> Priority 2, deduplicação compartilhada</li>
                    <li><strong>CustomStrategy:</strong> configurações flexíveis por origem</li>
                </ul>

                <h4>Deduplicação Inteligente</h4>
                <ul>
                    <li><strong>Padrão:</strong> 1 execução/dia por origem</li>
                    <li><strong>Compartilhada:</strong> autonomo + collector compartilham cache</li>
                    <li><strong>Imediata:</strong> freshness 0 para processamento crítico</li>
                    <li><strong>Customizada:</strong> regras específicas por estratégia</li>
                </ul>

                <h4>Processamento por Volume</h4>
                <ul>
                    <li><strong>Alto volume:</strong> scan (35M+), cp_collector (5M+)</li>
                    <li><strong>Médio volume:</strong> solucionare_distribution (2M+)</li>
                    <li><strong>Baixo volume:</strong> monitoring, experiments</li>
                </ul>
            </section>

            <footer style={{ marginTop: "60px", fontSize: "12px", color: "#666" }}>
                Documento interno – Coleta (Times, Fluxos e Arquitetura)
            </footer>
        </div>
    );
}
