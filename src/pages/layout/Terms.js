import * as React from 'react';
// material
import { Container, Typography, Stack, Button } from '@material-ui/core';
import useSettings from 'hooks/useSettings';
// components
import Page from 'components/Page';
// ----------------------------------------------------------------------
export default function Terms() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Registro.Legal | Terms of Use">
      <Container maxWidth={themeStretch ? false : 'md'} sx={{ marginTop: 20, marginBottom: 10 }}>
        <Typography variant="h3" component="h1" paragraph>
          ACORDO DE USUÁRIO (END-USER AGREEMENT)
        </Typography>
        <Typography>
          Este ACORDO DE USUÁRIO (END-USER AGREEMENT) será referido neste instrumento como “EUA”. O portal de internet REGISTRO.LEGAL, com endereço virtual em www.registro.legalserá referido neste instrumento como “REGISTRO.LEGAL”. O usuário do REGISTRO.LEGAL,  seja pessoa física ou jurídica, será referido neste instrumento como “VOCÊ”, e seu possessivo como “SEU”  ou  “SUA”. REGISTRO.LEGALe  VOCÊ  podem  ser  referidos  conjuntamente  neste instrumento como “PARTES”. Os serviços, suporte, informação e documentação relacionados ao REGISTRO.LEGALsão referidos neste instrumento como “NOSSOS SERVIÇOS”. SEUS trabalhos  ou  documentos  apresentados  para  registro  em  arquivo  digital  são  referidos  neste instrumento como “DOCUMENTOS”.
          <br />
          <br />
          O EUA é um acordo legal entre o REGISTRO.LEGALe VOCÊ.
          <br />
          <br />
          <b>TERMOS E CONDICÕES GERAIS</b>
          <br />
          <br />
          1.  O REGISTRO.LEGALé  um  portal  que  oferece  as  ferramentas  necessárias para (i) registrar a SEU DOCUMENTOe fazer prova a questões relacionadas a direitos  autorais;  e  (ii)  registrar  qualquer DOCUMENTO  DIGITAL  (obra)que VOCÊ julgue importante certificar com Carimbo de Tempo (Timestamp).
          <br />
          <br />
          2.  NOSSOS  SERVIÇOS  incluem  ferramentas  de  registros,  armazenamento  e consultas, bem como suporte, informações e documentos disponibilizados pelo portal REGISTRO.LEGAL, necessários para o registro de quaisquer OBRAS. Ao utilizar  NOSSOS  SERVIÇOS,  VOCÊ  concorda  e  obriga-se  aos  termos  deste EUA. Se VOCÊ não concordar com os termos deste EUA, não utilize NOSSOS SERVIÇOS. O REGISTRO.LEGALtem uma política de reembolso de 30 dias, para créditos não usados; se, por acaso, NOSSOS SERVIÇOS forem prestados a VOCÊ sem custos (por exemplo, se você recebeu créditos de bônus), VOCÊ não  terá  direito  a  ressarcimento  por  estes  créditos.  Ao  utilizar  NOSSOS SERVIÇOS VOCÊ também concorda e está ciente de que este EUA pode ser modificado sem prévio aviso.
          <br />
          <br />
          3.SERVIÇOS   E   SUPORTE   DE   TERCEIROSpodem   ser   utilizados   pelo REGISTRO.LEGALa fim de fornecer a VOCÊ NOSSOS SERVIÇOS e qualquer acordo entre  o REGISTRO.LEGALe  quaisquer  terceiros  obriga  apenas essas duas partes.
          <br />
          <br />
          4. DIREITOS DE PROPRIEDADE INTELECTUAL –Todos os textos e imagens que fazem parte do portal REGISTRO.LEGALsão protegidos pela Lei de Direitos Autorais   e   Tratados   Internacionais   de   Direitos   Autorais   e   qualquer   uso desautorizado  ou  violação  de  direitos  estará  sujeito  às  penas  cabíveis.  Para efeito  de  NOSSOS  SERVIÇOS, os  DOCUMENTOSregistrados  por  você  no REGISTRO.LEGALsão   de   SUA   inteira   responsabilidade,   não   tendo   o REGISTRO.LEGAL quaisquer direitos sobre eles.
          <br />
          <br />
          5. INDENIZAÇÕES –VOCÊ exime o REGISTRO.LEGALde quaisquer e todas as   perdas,   responsabilidades   e   despesas   e   concorda   em   indenizar   o REGISTRO.LEGAL(incluindo despesas com honorários advocatícios e custas judiciais)   por   danos   decorrentes   do   uso   não   autorizado   dos   NOSSOS  SERVIÇOS por VOCÊ ou decorrentes do SEU uso em desacordo com este EUA.
          <br />
          <br />
          6. REGRAS DE USO –VOCÊ é responsável e deve fornecer dados confiáveis e verdadeiros ao REGISTRO.LEGAL. VOCÊ tem ciência que os SEUS dados de acesso (nome de usuário e senha) são pessoais e privativos, e VOCÊ é o único responsável  pelo  correto  uso  do  portal REGISTRO.LEGALatravés  dos  SEUS dados de acesso. VOCÊ pode registrar apenas DOCUMENTOSque são de SUA autoria ou coautoria, ou de cujo(s) autor(es) VOCÊ tenha autorização expressa para fazê-lo.
          <br />
          <br />
          7.  SERVIÇOS  RELACIONADOS –VOCÊ,  por  meio  deste,  expressamente reconhece estar ciente e concorda que os NOSSOS SERVIÇOS fazem uso de comunicação  externa  com  computadores,  dispositivos  móveis  ou  quaisquer outros  aparelhos  digitais  e/ou  eletrônicos.  O REGISTRO.LEGALnão  será responsabilizado por pagamentos de qualquer serviço de internet ou outro meio de  comunicação  e  não  será  responsávelpor  viabilizar  ou  oferecer  esses serviços.
          <br />
          <br />
          8. CUSTO DE NOSSOS SERVIÇOS –VOCÊ está ciente e compreende que o REGISTRO.LEGALirá cobrar VOCÊ pelo uso dos NOSSOS SERVIÇOS através de  um  SISTEMA  DE  CONTA  DE  CRÉDITOS.  Para  fazer  uso  dos  NOSSOS SERVIÇOS VOCÊ precisa adicionar créditos na SUA CONTA DE CRÉDITOS no perfil do SEU usuário. Cada vez que VOCÊ utilizar os NOSSOS SERVIÇOS para registrar umDOCUMENTO, SUA CONTA DE CRÉDITO será descontada de um crédito. O valor de cada crédito será informado no portal e poderá ser modificado pelo REGISTRO.LEGAL, conforme julgar necessário.
          <br />
          <br />
          9. SERVIÇOS DE SUPORTE TÉCNICO –Sujeitos aos termos e condições deste EUA, o REGISTRO.LEGALpoderá oferecer a VOCÊ serviços de suporte técnico relacionados   aos   NOSSOS   SERVIÇOS   através do   email   de   contato (sac@registro.legal)   e   da   nossa   FAQ   (área   de   perguntas   frequentes), disponibilizada  no REGISTRO.LEGAL.  O REGISTRO.LEGALse  reserva  o direito de terminar a qualquer tempo o serviço de suporte técnico dos NOSSOS SERVIÇOS.
          <br />
          <br />
          10. ADITIVOS, MODIFICAÇÕES E RENÚNCIAS –Os termos deste EUA podem ser  modificados  apenas  pelo REGISTRO.LEGAL.  O REGISTRO.LEGALse reserva   o   direito   de   alterar   os   valores,   características,   especificações, capacidades,   funções   ou   outras   propriedades   dos   NOSSOS   SERVIÇOS. Nenhum atraso ou omissão do REGISTRO.LEGALem exercer ou fazer valer a qualquer  tempo  os  seus  direitos  ou  disposições  previstos  neste  EUA  será considerado renúncia do REGISTRO.LEGALem exercer ou fazer valer cada um e  todos  os  seus  direitos  e  disposições  neste  EUA.  Nenhum  ato  de  renúncia isolado     significará     uma     renúncia     contínua,     coletiva     ou     definitiva.
          <br />
          <br />
          11.  TITULAÇÃO  OU  REFERÊNCIAS –As  titulações  e  referências  utilizadas neste   EUA   são   utilizadas   apenas   por   conveniência   e   não   devem   ser consideradas para a análise e interpretação deste EUA.
          <br />
          <br />
          12.   FORÇA   MAIOR   E   TERCEIROS –O REGISTRO.LEGAL - não será responsabilizado por qualquer falha ou atraso nocumprimento deste EUA que seja decorrente de qualquer evento além do razoável controle ou a que terceiros derem   causa,   exemplificativamente,   nos   casos   de   incêndio,   explosão, indisponibilidade de recursos, falha ou interrupção do serviço de internet, falha ou manutenção do servidor, dificuldades trabalhistas, guerra, motim, força maior, leis, julgamentos ou instruções governamentais.
          <br />
          <br />
          13. TÉRMINO –Sem prejuízo de quaisquer outros direitos e por discernimento próprio,  o REGISTRO.LEGALpode  unilateralmente  encerrar  suas  atividades, este EUA e os direitos nele garantidos a VOCÊ. Os direitos garantidos a VOCÊ por força deste EUA podem também ser automaticamente encerrados diante da SUA inobservância aos termos teste EUA. Independentemente do encerramento deste EUA, o registro de SEU DOCUMENTOrealizado no REGISTRO.LEGAL ainda terá validade para seu propósito.
          <br />
          <br />
          14.  FORO –Este  EUA  será  regido  e  julgado  pelas  leis  do  Estado  de GOIÁS, Brasil, foro de Rio Verde.
          <br />
          <br />
          15.  TODO  O  ACORDO –Este  EUA,  bem  como  as Garantias,  Renúncias  de Garantias  e  Limitações  à  Responsabilidade  estabelecidas  abaixo  constituem todo  o  acordo  entre  as  PARTES  e  substituem  e  invalidam  qualquer  acordo escrito ou oral que tenha sido anteriormente realizado.

          <br />
          <br />
          <b>GARANTIAS,   RENÚNCIAS   DE   GARANTIAS   E   LIMITAÇÕES   À   RESPONSABILIDADE</b>
          <br />
          <br />   

          1.   LIMITAÇÕES   DE   GARANTIAS   PARA   OS   NOSSOS   SERVIÇOS –O REGISTRO.LEGALgarante  que  (a)  NOSSOS  SERVIÇOS  serão  prestados essencialmente de acordo com o material escrito disponibilizado no portal, e(b) quaisquer   serviços de   suporte   oferecidos   pelo REGISTRO.LEGALserão prestados essencialmente como descritos no material escrito disponibilizados no portal. Em caso de qualquer falha dos NOSSOS SERVIÇOS que VOCÊ tenha dado causa por acidente, abuso, dolo, modificação ou qualquer outro uso não autorizado,  o REGISTRO.LEGALe  seus  fornecedores  serão  eximidos  de qualquer   responsabilidade   sob   os   termos   deste   EUA,   e   VOCÊ   será responsabilizado pela quebra material deste EUA.
          <br />
          <br />
          2. PRECISÃO E VALIDADE –VOCÊ, por meio deste, está ciente que NOSSOS SERVIÇOS  não  são  “fault   tolerant”  (serviços  sem  interrupção),  não  são desenvolvidos ou têm outro objetivo que não aquele especificamente oferecido pelos termos deste EUA e não devem ser utilizados para aplicações que possam ser consideradas de risco.
          <br />
          <br />
          3. PROTEÇÃO DOS SEUS DIREITOS DE PROPRIEDADE INTELECTUAL –O REGISTRO.LEGALe/ou  seus  fornecedores  não  se  responsabilizam  pelas informações atribuídas AOS DOCUMENTOSpor VOCÊ por meio de NOSSOS SERVIÇOS. NOSSOS SERVIÇOS objetivam apenas atribuir o registro de data e  hora aos  DOCUMENTOS  DIGITAISque  sejam  registradosno  IPFS.  Caso VOCÊ  utilize  NOSSOS  SERVIÇOS  com  o  objetivo  de  proteger  o  SEU  direito autoral ou qualqueroutro direito assegurado por lei, o REGISTRO.LEGALe/ouseus  fornecedores  não  terão  a  obrigação  de  defender,  de  nenhuma  forma, NOSSOS SERVIÇOS, ou quaisquer das técnicas e/ouexpertiseassociadas aos NOSSOS SERVIÇOS, a menos que as PARTES acordem o contrário por escrito.
          <br />
          <br />
          4. APLICAÇÃO DA LEI LOCAL –Algumas leis locais podem não reconhecer a veracidade e a admissibilidade dos documentos registrados de forma eletrônica. É de SUA inteira responsabilidade verificar se a lei local onde VOCÊ pretende fazer  uso dos  NOSSOS  SERVIÇOS  reconhecerá  o  registro  eletrônico  de documentos.
          <br />
          <br />
          5.   SEGURANÇA –Apesar   do   fato   de   NOSSOS   SERVIÇOS   utilizarem equipamentos  altamente  seguros  e  certificados  pelo  Governo  dos  Estados Unidos  da  América,  e  utilizarem  um  sistema  de  encriptação,  as  PARTES acordam   que   o REGISTRO.LEGALe/ou   seus   fornecedores   não   serão responsabilizados por falha de segurança de qualquer natureza relacionadas a NOSSOS   SERVIÇOS   ou   por   comprometimento   do   sistema  por   terceiros independentemente da extensão dos danossofridos por VOCÊ em razão desses fatos.
          <br />
          <br />
          6.   NENHUMA   OUTRA   GARANTIA –AS   LIMITAÇÕES   DE   GARANTIAS DISPOSTAS   NA   SEÇÃO   1   ACIMA   SOBREPÕEM   TODAS   AS   OUTRAS GARANTIAS E CONDIÇÕES, EXPRESSAS OU IMPLÍCITAS, E CONSTITUEM GARANTIAS   EXCLUSIVAS   DO REGISTRO.LEGALEM   RELAÇÃO   AOS NOSSOS  SERVIÇOS  E  SERVIÇOS  DE  SUPORTE.  O REGISTRO.LEGAL RENÚNCIA  A  TODAS  AS  DEMAIS  GARANTIAS  E  CONDIÇÕES,  E  VOCÊ ABRE  MÃO  E  RENÚNCIA  A  TODAS  AS  GARANTIAS  DE  QUAISQUER NATUREZAS, EXPRESSAS OU IMPLÍCITAS, INCLUINDO, SEM RESTRIÇÃO, QUALQUER GARANTIAMERCANTIL IMPLÍCITA, CRIADA PARA UM FIM OU USO  ESPECÍFICO,  TÍTULO,  NÃO  VIOLAÇÃO,  OU  QUALQUER  GARANTIA DECORRENTE  DE  QUALQUER  ESTATUTO  OU  DECORRENTE  DE  LEI  OU PROCEDIMENTO  DE  ACORDO,  PROCEDIMENTO  DE  PERFORMANCE  OU PRÁTICA     DE     COMÉRCIO.     EXCETO     QUANDO     EXPRESSAMENTE GARANTIDO NESTE EUA, NOSSOS SERVIÇOS E SERVIÇOS DE SUPORTE (SE   HOUVER)   SÃO   OFERECIDOS   CONFORME   APRESENTADOS.   O REGISTRO.LEGALNÃO  GARANTE  QUE  OS  NOSSOS  SERVIÇOS  SÃO LIVRES DE FALHAS, QUE VOCÊ PODERÁ USAR NOSSOS SERVIÇOS SEM QUALQUER   PROBLEMA   OU   INTERRUPÇÃO,   OU   QUE   OS   NOSSOS SERVIÇOS    NÃO    SÃO    SUSCETÍVEIS    A    INVASÃO,    ATAQUE    OU CONTAMINAÇÃO POR VÍRUS DE COMPUTADOR. O REGISTRO.LEGALNÃO GARANTE  QUE  AS  FUNÇÕES  DE  NOSSOS  SERVIÇOS  IRÃO  ATENDER  A SUAS  EXIGÊNCIAS,  OU  QUE  NOSSOS  SERVIÇOS  IRÃO  FUNCIONAR  DE ACORDOCOM     QUALQUER     COMBINAÇÃO     QUE     TENHA     SIDO SELECIONADA  POR  VOCÊ,  OU  QUE  QUALQUER  DEFEITO  QUE  POSSA HAVER   NOS   NOSSOS   SERVIÇOS   SERÁ   CORRIGIDO.   VOCÊ   SERÁ EXCLUSIVAMENTE RESPONSÁVEL PELA ESCOLHA, USO E ADEQUAÇÃO DOS NOSSOS SERVIÇOS. O REGISTRO.LEGALNÃO OFERECE GARANTIA, E   VOCÊ   ASSUME   TOTAL   RISCO   QUANTO   À   INTEGRIDADE   DOS RESULTADOS, CAPACIDADE, ADEQUAÇÃO, USO OU DESEMPENHO DOS NOSSOS SERVIÇOS. EM NENHUM CASO O REGISTRO.LEGALE/OU SEUS FORNECEDORES  SERÃO  RESPONSABILIZADOS  POR  VOCÊ  OU  POR QUAISQUER  TERCEIROS  POR  QUALQUER  PREJUÍZO  DECORRENTE  OU RELACIONADO  AO  USO  OU  DESEMPENHO  DOS  NOSSOS  SERVIÇOS.
          <br />
          <br />
          7. LIMITAÇÕES DE RESPONSABILIDADE E REPARAÇÃO –Em nenhum caso o REGISTRO.LEGALe/ou  seus  fornecedores  serão  responsabilizados  por quaisquer  danos  incidentais,  punitivos,  indiretos,  especiais  ou  consequentes (incluindo,   sem   qualquer   limitação,   danos   por   lucros   cessantes,   perdas, imprecisão ou violação de dados, interrupção da atividade comercial, perda de informações pessoais ou comerciais, ou qualquer outra perda pecuniária) a que VOCÊ der causa em razão do uso ou inabilidade em usar NOSSOS SERVIÇOS ou do fornecimento ou falha no fornecimento dos serviços de suporte, ainda que o REGISTRO.LEGALtenha sido alertado da possiblidade de tais danos. Essa limitação  se  aplica  se os danos  forem questionados  ou requeridos,  de  acordo com este EUA, ou objeto de pedido de reparação de danos, ou qualquer outra ação.  Essa  limitação  não  pode  ser  renunciada  ou  modificada  por  qualquer pessoa. Em qualquer caso, toda a responsabilidade do REGISTRO.LEGALsob os  termos  deste  EUA  será  limitada  ao  valor  máximo  pago  por  VOCÊ  pelos NOSSOS SERVIÇOS.
          <br />
          <br />
          8. a  funcionalidade  da  Plataforma REGISTRO.LEGALdepende  de  serviços  e produtos   de   terceiros,   tais   como   provedores   de   internet   e   telefonia, disponibilidade  da IPFS,  hardwares  e  softwares,  dentre  outros,  que  poderão afetar o desempenho do Portal Web REGISTRO.LEGALindependentemente da sua vontade e controle; 
          <br />
          <br />
          9. O  REGISTRO.LEGALnão  possui  qualquer  responsabilidade  pelo  conteúdo dos DOCUMENTOSregistrados no IPFS, cabendo exclusivamente ao Usuário responder  pelos  eventuais  danos  direitos  e  indiretos  causados  a  quaisquer terceiros; 
          10. O REGISTRO.LEGALnão garante e não possui responsabilidade sobre os efeitos do registro no IPFS, incluindo, não limitadamente, o seu reconhecimento pelos  Tribunais  Judiciais  e  Arbitrais  nacionais  e  internacionais,  bem  como  por entidades públicas ou privadas; 
          <br />
          <br />
          11.  A  aquisição  de  créditos  e  o  uso do  Porta  Web  REGISTRO.LEGAL,  em qualquer  modalidade  de  contratação  ou  de  pagamento,  serão  regidos  e interpretados de acordo com as leis do Brasil, com base nos TERMOS, ficando excluídos entendimentos e propostas anteriores. 
          <br />
          <br />
          12. Alterações no Portal Web REGISTRO.LEGAL: O Usuário fica desde já ciente que  poderá  retirar  ou  inserir  novas  funcionalidades,  ou  mesmo  alterar  as características, sem aviso prévio.
          <br />
          <br />
          VOCÊ  COMPREENDE  E  RECONHECE  QUE  O REGISTRO.LEGALNÃO  É RESPONSÁVEL,   E   NÃO   TERÁ   QUALQUER   RESPONSABILIDADE   POR QUALQUER  SERVIÇO  PRESTADO  POR  OUTRAS  PESSOAS,  FÍSICAS  OU JURÍDICAS, QUE NÃO O PRÓPRIO REGISTRO.LEGAL.
        </Typography>
      </Container>
    </Page>
  );
}
